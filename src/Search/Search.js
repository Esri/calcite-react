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
    let selectedItemVal = changes.selectedItem || this.props.selectedItem;
    let inputValue;
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
    console.log(this.props.value, this.props.selectedItem);
    if (this.props.value || this.props.selectedItem) {
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
          inputValue={this.props.value}
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
                <Menu withComponent={<StyledSelectMenu />}>
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
  /** Description TBD */
  children: PropTypes.node,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onRequestClear: PropTypes.func,
  minimal: PropTypes.bool
};

Search.defaultProps = {
  placeholder: 'Search...'
};

export default Search;
