import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import { Manager, Reference, Popper } from 'react-popper';
import matchSorter from 'match-sorter';
import uniqid from 'uniqid';

import {
  StyledSearchContainer,
  StyledSearchInputWrapper,
  StyledSearch,
  StyledShortcutCharacter,
  StyledCloseCircleIcon,
  StyledMagnifyIcon,
  ManagerStyle,
  PopperStyle
} from './Search-styled';

import { StyledSelectMenu } from '../Select/Select-styled';
import { MenuItem } from '../Menu';
import Tooltip from '../Tooltip';

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

  handleOnUserAction = changes => {
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
      this.props.onUserAction(inputValue || this.props.inputValue);
      return;
    }

    // object or string?
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

    this.props.onUserAction(inputValue, selectedItemVal);
  };

  getClearSearchIcon = () => {
    if (this.props.inputValue || this.props.selectedItem) {
      return (
        <StyledCloseCircleIcon
          onClick={() => {
            this.props.onRequestClear();
          }}
        />
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

  getMenuItems = (
    itemsToShow,
    getItemProps,
    highlightedIndex,
    selectedItem
  ) => {
    return itemsToShow.map((item, index) => {
      if (React.isValidElement(item)) {
        return React.cloneElement(item, {
          ...getItemProps({
            item: item.props.item || item.props,
            active: highlightedIndex === index,
            selected: this.itemToValue(selectedItem) === this.itemToValue(item)
          })
        });
      }
      return (
        <MenuItem
          key={this.itemToValue(item)}
          {...getItemProps({
            item,
            active: highlightedIndex === index,
            selected: selectedItem === item
          })}
        >
          {this.itemToString(item)}
        </MenuItem>
      );
    });
  };

  getFullWidthStyle = fullWidth => {
    if (fullWidth) {
      return { minWidth: '100%' };
    }
  };

  render() {
    const {
      minimal,
      fullWidth,
      inputValue,
      selectedItem,
      onChange,
      placeholder,
      containerStyle,
      menuStyle,
      children,
      ...other
    } = this.props;

    return (
      <StyledSearchContainer
        style={containerStyle}
        fullWidth={fullWidth}
        minimal={minimal}
      >
        <StyledMagnifyIcon />
        <Manager style={ManagerStyle}>
          <Downshift
            itemToString={this.itemToString}
            inputValue={inputValue}
            selectedItem={selectedItem}
            onChange={onChange}
            onUserAction={this.handleOnUserAction}
            render={({
              getRootProps,
              getInputProps,
              getItemProps,
              highlightedIndex,
              isOpen
            }) => (
              <StyledSearchInputWrapper
                {...getRootProps({ refKey: 'innerRef' })}
              >
                <Reference style={{ display: 'inline-block' }}>
                  {({ ref }) => (
                    <StyledSearch
                      as="input"
                      {...getInputProps({
                        placeholder: placeholder,
                        minimal: minimal,
                        ...other
                      })}
                      ref={ref}
                      id={`${this._generatedId}Reference`}
                    />
                  )}
                </Reference>

                {isOpen && this.state.itemsToShow ? (
                  <Popper
                    positionFixed={this.props.positionFixed}
                    style={{
                      ...this.getFullWidthStyle(fullWidth),
                      ...PopperStyle
                    }}
                    placement={'bottom-start'}
                  >
                    {({ ref, style, placement, arrowProps }) => (
                      <StyledSelectMenu
                        ref={ref}
                        fullWidth={fullWidth}
                        style={{
                          ...style,
                          ...menuStyle
                        }}
                        data-placement={placement}
                      >
                        {this.getMenuItems(
                          this.state.itemsToShow,
                          getItemProps,
                          highlightedIndex,
                          selectedItem
                        )}
                      </StyledSelectMenu>
                    )}
                  </Popper>
                ) : null}
              </StyledSearchInputWrapper>
            )}
          />
        </Manager>
        {this.getShortcutIcon()}
        {this.getClearSearchIcon()}
      </StyledSearchContainer>
    );
  }
}

Search.propTypes = {
  /** Array of items */
  items: PropTypes.array,
  /** Text in the input */
  inputValue: PropTypes.string,
  /** The selected item */
  selectedItem: PropTypes.any,
  /** Text for the placeholder property on the input */
  placeholder: PropTypes.string,
  /** An object used to map properties to name and value of items (only applies if `items` is an array of objects) */
  dataSourceConfig: PropTypes.object,
  /** Function called when an item is selected */
  onChange: PropTypes.func,
  /** Function called when the input value is changed, items dropdown hides/shows, hovers an item, or clicks on an item */
  onUserAction: PropTypes.func,
  /** Function called when the user clicks the clear button */
  onRequestClear: PropTypes.func,
  /** Toggle minimal style on the input */
  minimal: PropTypes.bool,
  /** Whether or not the search and its menu will fill the container's width */
  fullWidth: PropTypes.bool,
  /** Style prop applied to the Search container element */
  containerStyle: PropTypes.object,
  /** Style prop applied to the menu wrapper */
  menuStyle: PropTypes.object,
  /** Character used to display a shortcut icon on the right side of the search input */
  shortcutCharacter: PropTypes.string,
  /** Text used in the shortcut tooltip to describe what the shortcut is */
  shortcutTooltip: PropTypes.node,
  /** Uses `position: fixed` on the tooltip allowing it to show up outside of containers that have `overflow: hidden` */
  positionFixed: PropTypes.bool,
  /** You can add search options as children if you want more control over the item rendering. Search MenuItems can take either an item object that maps to your dataSourceConfig or you can manually set the label and value props on MenuItems */
  children: PropTypes.node
};

Search.defaultProps = {
  placeholder: 'Search...',
  dataSourceConfig: {
    label: 'label',
    value: 'value'
  },
  shortcutTooltip: 'Press  /  to search'
};

export default Search;
