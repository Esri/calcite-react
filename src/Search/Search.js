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
    newItemsToShow = this.userInputtedValue
      ? matchSorter(this.props.items, this.userInputtedValue)
      : this.props.items;
    if (
      changes.hasOwnProperty('highlightedIndex') &&
      (changes.type === Downshift.stateChangeTypes.keyDownArrowUp ||
        changes.type === Downshift.stateChangeTypes.keyDownArrowDown)
    ) {
      inputValue = newItemsToShow[changes.highlightedIndex];
    }
    if (isClosingMenu) {
      inputValue = selectedItemVal;
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
    return (
      <StyledSearchContainer minimal={this.props.minimal}>
        <MagnifyIcon />
        <Downshift
          inputValue={this.props.inputValue}
          selectedItem={this.props.selectedItem}
          onChange={this.props.onChange}
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
                  placeholder: this.props.placeholder,
                  minimal: this.props.minimal
                })}
              />
              {isOpen ? (
                <Menu
                  style={this.props.menuStyle}
                  withComponent={<StyledSelectMenu />}
                >
                  {this.state.itemsToShow.map((item, index) => (
                    <MenuItem
                      key={item}
                      {...getItemProps({
                        item,
                        active: highlightedIndex === index,
                        selected: this.props.selectedItem === item
                      })}
                    >
                      {item}
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
  selectedItem: PropTypes.string,
  /** Text for the placeholder property on the input */
  placeholder: PropTypes.string,
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
  placeholder: 'Search...'
};

export default Search;
