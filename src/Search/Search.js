import PropTypes from 'prop-types';
import React from 'react';
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

const Search = ({
  children,
  value,
  minimal,
  placeholder,
  items,
  selectedItem,
  onRequestClear,
  onChange,
  onUserAction,
  ...other
}) => {
  let clearSearchIcon;
  if (value) {
    clearSearchIcon = (
      <CloseCircleIcon onClick={onRequestClear} className="search-close-icon" />
    );
  }

  function handleOnUserAction(changes) {
    let selectedItemVal = changes.selectedItem || selectedItem;
    let inputValue;
    let itemsToShow;
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
    itemsToShow = this.userInputtedValue
      ? matchSorter(this.items, this.userInputtedValue)
      : this.items;
    if (
      changes.hasOwnProperty('highlightedIndex') &&
      (changes.type === Downshift.stateChangeTypes.keyDownArrowUp ||
        changes.type === Downshift.stateChangeTypes.keyDownArrowDown)
    ) {
      inputValue = itemsToShow[changes.highlightedIndex];
    }
    if (isClosingMenu) {
      inputValue = selectedItemVal;
      this.userInputtedValue = selectedItemVal;
    }

    onUserAction(inputValue, itemsToShow, selectedItemVal);
  }

  const search = (
    <StyledSearchContainer minimal={minimal}>
      <MagnifyIcon />
      <Downshift
        inputValue={value}
        selectedItem={selectedItem}
        onChange={onChange}
        onUserAction={handleOnUserAction}
        render={({
          getRootProps,
          getInputProps,
          getItemProps,
          highlightedIndex,
          isOpen
        }) => (
          <StyledSearchInputWrapper {...getRootProps({ refKey: 'innerRef' })}>
            <StyledSearch
              {...getInputProps({ placeholder: placeholder, minimal: minimal })}
            />
            {isOpen ? (
              <Menu withComponent={<StyledSelectMenu />}>
                {items.map((item, index) => (
                  <MenuItem key={item}>{item}</MenuItem>
                ))}
              </Menu>
            ) : null}
          </StyledSearchInputWrapper>
        )}
      />
      {clearSearchIcon}
    </StyledSearchContainer>
  );

  return search;
};

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
