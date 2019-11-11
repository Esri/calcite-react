// Copyright 2019 Esri
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.​

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import { List } from 'react-virtualized';
import { Manager, Reference, Popper } from 'react-popper';
import matchSorter from 'match-sorter';
import uniqid from 'uniqid';
import { rtlModifier } from '../utils/helpers';

import {
  StyledSearchContainer,
  StyledSearchInputWrapper,
  StyledSearch,
  StyledShortcutCharacter,
  StyledClearIconContainer,
  StyledSearchIconContainer,
  ManagerStyle,
  PopperStyle
} from './Search-styled';

import SearchMenu from './SearchMenu';
import { MenuItem } from '../Menu';
import Tooltip from '../Tooltip';
import { ListContext } from '../List/List';

import MagnifyingGlassIcon from 'calcite-ui-icons-react/MagnifyingGlassIcon';
import XCircleIcon from 'calcite-ui-icons-react/XCircleIcon';
import { CalciteTheme } from '../CalciteThemeProvider';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemsToShow: this.props.children || this.props.items
    };
    this.userInputtedValue = '';
    this._generatedId = uniqid();
  }

  componentDidMount() {
    this.props.inputRef &&
      this.props.inputRef(
        document.getElementById(`${this._generatedId}Reference`)
      );
  }

  itemToString = item => {
    if (!item) {
      return;
    }

    if (typeof item === 'string') {
      return item;
    }

    if (this.props.dataSourceConfig) {
      if (React.isValidElement(item)) {
        if (item.props.item) {
          return item.props.item[this.props.dataSourceConfig.label];
        }

        return item.props[this.props.dataSourceConfig.label];
      }

      return item[this.props.dataSourceConfig.label];
    }

    return item.name;
  };

  itemToValue = item => {
    if (!item) {
      return;
    }

    if (typeof item === 'string') {
      return item;
    }

    if (this.props.dataSourceConfig) {
      if (React.isValidElement(item)) {
        if (item.props.item) {
          return item.props.item[this.props.dataSourceConfig.value];
        }

        return item.props[this.props.dataSourceConfig.value];
      }

      return item[this.props.dataSourceConfig.value];
    }

    return item.value;
  };

  handleOnUserAction = (changes, downshiftProps) => {
    let selectedItemVal = changes.selectedItem || this.props.selectedItem || '';
    let inputValue = this.props.inputValue || '';
    let newItemsToShow;

    const isClosingMenu = changes.hasOwnProperty('isOpen') && !changes.isOpen;

    if (
      changes.type === Downshift.stateChangeTypes.keyDownEscape &&
      !isClosingMenu
    ) {
      selectedItemVal = '';
    }
    if (changes.hasOwnProperty('inputValue')) {
      if (changes.type === Downshift.stateChangeTypes.keyDownEscape) {
        inputValue = this.userInputtedValue || '';
      } else {
        inputValue = changes.inputValue || '';
        this.userInputtedValue = changes.inputValue;
      }
    }

    // If the component is just being used as an input filter
    if (!this.props.children && !this.props.items) {
      this.props.onUserAction(
        changes.inputValue === undefined
          ? downshiftProps.inputValue
          : changes.inputValue
      );
      return;
    }

    // object or string?
    if (!this.props.remote) {
      newItemsToShow = this.userInputtedValue
        ? matchSorter(
            this.props.children || this.props.items,
            this.userInputtedValue,
            {
              keys: [this.itemToString]
            }
          )
        : this.props.children || this.props.items;

      if (
        changes.hasOwnProperty('highlightedIndex') &&
        (changes.type === Downshift.stateChangeTypes.keyDownArrowUp ||
          changes.type === Downshift.stateChangeTypes.keyDownArrowDown)
      ) {
        inputValue =
          this.itemToString(newItemsToShow[changes.highlightedIndex]) || '';
      }
      if (isClosingMenu) {
        inputValue = this.itemToString(selectedItemVal) || '';
        this.userInputtedValue = selectedItemVal;
      }

      this.setState({
        itemsToShow: newItemsToShow
      });
    }

    this.props.onUserAction(inputValue, selectedItemVal);
  };

  getSearchIcon = searchIcon => {
    if (searchIcon) {
      return (
        <StyledSearchIconContainer>{searchIcon}</StyledSearchIconContainer>
      );
    }

    return null;
  };

  getClearSearchIcon = () => {
    if (this.props.inputValue || this.props.selectedItem) {
      return (
        <StyledClearIconContainer onClick={this.props.onRequestClear}>
          {this.props.clearIcon}
        </StyledClearIconContainer>
      );
    }
  };

  getShortcutIcon = () => {
    if (
      this.props.shortcutCharacter &&
      !this.props.inputValue &&
      !this.props.selectedItem
    ) {
      return (
        <StyledShortcutCharacter>
          <Tooltip title={this.props.shortcutTooltip} placement="left">
            {this.props.shortcutCharacter}
          </Tooltip>
        </StyledShortcutCharacter>
      );
    }
  };

  getMenuItems = (itemsToShow, virtualized, params) => {
    const {
      getItemProps,
      highlightedIndex,
      selectedItem,
      menuHeight,
      virtualizedRowHeight,
      virtualizedMenuWidth
    } = params;

    if (virtualized) {
      return (
        <List
          width={virtualizedMenuWidth || 9999}
          autoWidth={!virtualizedMenuWidth}
          scrollToIndex={highlightedIndex || 0}
          scrollToAlignment="auto"
          height={
            itemsToShow.length < 7
              ? itemsToShow.length * virtualizedRowHeight
              : menuHeight
          }
          rowCount={itemsToShow.length}
          rowHeight={virtualizedRowHeight}
          rowRenderer={({ index, style: rowRenderStyle }) => {
            return this.getMenuItem(itemsToShow[index], {
              getItemProps,
              highlightedIndex,
              index,
              selectedItem,
              rowRenderStyle
            });
          }}
        />
      );
    }

    return itemsToShow.map((item, index) =>
      this.getMenuItem(item, {
        getItemProps,
        highlightedIndex,
        index,
        selectedItem
      })
    );
  };

  getMenuItem = (item, params) => {
    const {
      getItemProps,
      highlightedIndex,
      index,
      selectedItem,
      rowRenderStyle
    } = params;

    if (React.isValidElement(item)) {
      return React.cloneElement(item, {
        ...getItemProps({
          style: { ...item.props.style, ...rowRenderStyle },
          item: item.props.item || item.props,
          index,
          active: highlightedIndex === index,
          selected: this.itemToValue(selectedItem) === this.itemToValue(item),
          key: this.itemToValue(item)
        })
      });
    }
    return (
      <MenuItem
        {...getItemProps({
          style: { ...rowRenderStyle },
          item,
          index,
          active: highlightedIndex === index,
          selected: selectedItem === item,
          key: this.itemToValue(item)
        })}
      >
        {this.itemToString(item)}
      </MenuItem>
    );
  };

  getFullWidthStyle = fullWidth => {
    if (fullWidth) {
      return { minWidth: '100%' };
    }
  };

  _getPopper = (popper, appendToBody) => {
    if (appendToBody) {
      return ReactDOM.createPortal(popper, document.body);
    }

    return popper;
  };

  render() {
    const {
      minimal,
      fullWidth,
      inputValue,
      selectedItem,
      onChange,
      onUserAction,
      onRequestClear,
      placeholder,
      containerStyle,
      menuStyle,
      appendToBody,
      positionFixed,
      children,
      virtualized,
      virtualizedRowHeight,
      virtualizedMenuWidth,
      searchIcon,
      rtl,
      ...other
    } = this.props;

    const usePreventOverflow = appendToBody || positionFixed ? false : true;
    const menuHeight =
      (menuStyle && parseInt(menuStyle.height, 10)) ||
      (menuStyle && parseInt(menuStyle.maxHeight, 10)) ||
      300;

    let itemsToShow;
    if (this.props.remote)
      itemsToShow = this.props.items || this.props.children;
    else itemsToShow = this.state.itemsToShow;

    return (
      <ListContext.Consumer>
        {({ listContext }) => (
          <StyledSearchContainer
            style={containerStyle}
            fullWidth={fullWidth}
            minimal={minimal}
          >
            {this.getSearchIcon(searchIcon)}
            <Manager style={ManagerStyle}>
              <Downshift
                itemToString={this.itemToString}
                inputValue={inputValue}
                selectedItem={selectedItem}
                onChange={onChange}
                onUserAction={this.handleOnUserAction}
              >
                {({
                  getRootProps,
                  getInputProps,
                  getItemProps,
                  highlightedIndex,
                  isOpen
                }) => (
                  <StyledSearchInputWrapper
                    {...getRootProps({}, { suppressRefError: true })}
                  >
                    <Reference style={{ display: 'inline-block' }}>
                      {({ ref }) => (
                        <StyledSearch
                          as="input"
                          {...getInputProps({
                            id: `${this._generatedId}Reference`,
                            placeholder,
                            minimal,
                            fullWidth,
                            ref,
                            selectableListFilter: listContext.selectable,
                            searchIcon,
                            ...other
                          })}
                        />
                      )}
                    </Reference>
                    {isOpen && itemsToShow
                      ? this._getPopper(
                          <Popper
                            positionFixed={positionFixed}
                            style={{
                              ...this.getFullWidthStyle(fullWidth),
                              ...PopperStyle
                            }}
                            placement={this.props.placement}
                            modifiers={{
                              preventOverflow: {
                                enabled: usePreventOverflow
                              },
                              hide: {
                                enabled: usePreventOverflow
                              },
                              rtl: {
                                order: 0,
                                enabled: true,
                                fn: data => rtlModifier(data, rtl)
                              }
                            }}
                          >
                            {({ ref, style, placement, scheduleUpdate }) => (
                              <SearchMenu
                                innerRef={ref}
                                fullWidth={fullWidth}
                                style={{
                                  ...style,
                                  ...menuStyle
                                }}
                                isOpen={isOpen}
                                data-placement={placement}
                                scheduleUpdate={scheduleUpdate}
                              >
                                {this.getMenuItems(itemsToShow, virtualized, {
                                  highlightedIndex,
                                  menuHeight,
                                  virtualizedRowHeight,
                                  virtualizedMenuWidth,
                                  getItemProps,
                                  selectedItem
                                })}
                              </SearchMenu>
                            )}
                          </Popper>,
                          appendToBody
                        )
                      : null}
                  </StyledSearchInputWrapper>
                )}
              </Downshift>
            </Manager>
            {this.getShortcutIcon()}
            {this.getClearSearchIcon()}
          </StyledSearchContainer>
        )}
      </ListContext.Consumer>
    );
  }
}

Search.propTypes = {
  /** Array of items. */
  items: PropTypes.array,
  /** Text in the input. */
  inputValue: PropTypes.string,
  /** The selected item. */
  selectedItem: PropTypes.any,
  /** Text for the placeholder property on the input. */
  placeholder: PropTypes.string,
  /** An object used to map properties to the name and value of items (only applies if `items` is an array of objects). */
  dataSourceConfig: PropTypes.object,
  /** Function called when an item is selected. */
  onChange: PropTypes.func,
  /** Function called when the input value is changed, items dropdown hides/shows, or when the user hovers over or clicks on an item. */
  onUserAction: PropTypes.func,
  /** Function called when the user clicks the clear button. */
  onRequestClear: PropTypes.func,
  /** Placement of the popover in relation to the target. */
  placement: PropTypes.oneOf([
    'top',
    'right',
    'bottom',
    'left',
    'top-start',
    'right-start',
    'bottom-start',
    'left-start',
    'top-end',
    'right-end',
    'bottom-end',
    'left-end'
  ]),
  /** Toggle minimal style on the input. */
  minimal: PropTypes.bool,
  /** Whether or not the Search and its menu will fill the container's width. */
  fullWidth: PropTypes.bool,
  /** Style prop applied to the Search container element. */
  containerStyle: PropTypes.object,
  /** Style prop applied to the menu wrapper. */
  menuStyle: PropTypes.object,
  /** Character used to display a shortcut icon on the right side of the Search input. */
  shortcutCharacter: PropTypes.string,
  /** Text used in the shortcut tooltip to describe what the shortcut is. */
  shortcutTooltip: PropTypes.node,
  /** Uses `position: fixed` on the tooltip allowing it to show up outside of containers that have `overflow: hidden`. */
  positionFixed: PropTypes.bool,
  /** You can add Search options as children if you want more control over the item rendering. Search MenuItems can take either an item object that maps to your dataSourceConfig, or you can manually set the label and value props on MenuItems. */
  children: PropTypes.node,
  /** Use react-virtualized to render rows as the user scrolls. */
  virtualized: PropTypes.bool,
  /** (virtualized only) Row height used to calculate how many rows to render in a virtualized menu. */
  virtualizedRowHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  /** (virtualized only) Width of the menu; unloaded rows may be wider than the initial set. */
  virtualizedMenuWidth: PropTypes.number,
  /** SVG icon to be displayed inside the Search input */
  searchIcon: PropTypes.node,
  /** SVG icon to clear the value of the Search input */
  clearIcon: PropTypes.node,
  /** Use a remote API for the data load.  This will allow the application to see the exact return from the API with no filtering applied */
  remote: PropTypes.bool,
  /** Manually set RTL behavior of the Search to flip its direction */
  rtl: PropTypes.bool
};

Search.defaultProps = {
  placeholder: 'Search...',
  dataSourceConfig: {
    label: 'label',
    value: 'value'
  },
  placement: 'bottom-start',
  shortcutTooltip: 'Press  /  to search',
  virtualizedRowHeight: 42,
  searchIcon: <MagnifyingGlassIcon filled size={16} />,
  clearIcon: (
    <XCircleIcon filled size={16} color={CalciteTheme.palette.darkerGray} />
  ),
  onUserAction: () => {},
  onChange: () => {},
  onRequestClear: () => {},
  remote: false
};

Search.displayName = 'Search';

export default Search;
