import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import matchSorter from 'match-sorter';

import {
  StyledSearchContainer,
  StyledSearchInputWrapper,
  StyledSearch
} from './Search-styled';

import { StyledSelectMenu } from '../Select/Select-styled';
import Menu, { MenuItem } from '../Menu';

import MagnifyIcon from '../icons/MagnifyIcon';
import CloseCircleIcon from '../icons/CloseCircleIcon';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemsToShow: this.props.items
    };
    this.userInputtedValue = '';
  }

  itemToString = item => {
    if (typeof item === 'string') {
      return item;
    }

    if (this.props.dataSourceConfig) {
      return item[this.props.dataSourceConfig.label];
    }

    return item.name;
  };

  itemToValue = item => {
    if (typeof item === 'string') {
      return item;
    }

    if (this.props.dataSourceConfig) {
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
        inputValue = this.userInputtedValue;
      } else {
        inputValue = changes.inputValue;
        this.userInputtedValue = changes.inputValue;
      }
    }

    // object or string?
    newItemsToShow = this.userInputtedValue
      ? matchSorter(this.props.items, this.userInputtedValue, {
          keys: [this.itemToString]
        })
      : this.props.items;
    if (
      changes.hasOwnProperty('highlightedIndex') &&
      (changes.type === Downshift.stateChangeTypes.keyDownArrowUp ||
        changes.type === Downshift.stateChangeTypes.keyDownArrowDown)
    ) {
      inputValue = this.itemToString(newItemsToShow[changes.highlightedIndex]);
    }
    if (isClosingMenu) {
      inputValue = this.itemToString(selectedItemVal);
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
        <CloseCircleIcon
          onClick={this.props.onRequestClear}
          className="search-close-icon"
        />
      );
    }
  };

  render() {
    const {
      minimal,
      inputValue,
      selectedItem,
      onChange,
      placeholder,
      menuStyle,
      ...other
    } = this.props;

    return (
      <StyledSearchContainer minimal={minimal}>
        <MagnifyIcon />
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
            <StyledSearchInputWrapper {...getRootProps({ refKey: 'innerRef' })}>
              <StyledSearch
                {...getInputProps({
                  placeholder: placeholder,
                  minimal: minimal,
                  ...other
                })}
              />
              {isOpen ? (
                <Menu style={menuStyle} withComponent={<StyledSelectMenu />}>
                  {this.state.itemsToShow.map((item, index) => (
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
                  ))}
                </Menu>
              ) : null}
            </StyledSearchInputWrapper>
          )}
        />
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
  /** Style prop applied to the menu wrapper */
  menuStyle: PropTypes.object
};

Search.defaultProps = {
  placeholder: 'Search...',
  dataSourceConfig: {
    label: 'label',
    value: 'value'
  }
};

export default Search;
