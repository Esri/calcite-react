import PropTypes from 'prop-types';
import React from 'react';
import Downshift from 'downshift';
import matchSorter from 'match-sorter';

import {
  StyledSelectWrapper,
  StyledSelectButton,
  StyledSelectInput,
  StyledSelectMenu
} from './Select-styled';
import Menu from '../Menu';

const Select = props => {
  function getAnchorElement(params) {
    const { getButtonProps, getInputProps, placeholder, selectedItem } = params;

    if (props.filterable) {
      return (
        <StyledSelectInput
          onClick={getButtonProps().onClick}
          {...getInputProps({
            placeholder: placeholder,
            style: { ...props.style },
            id: props.id || props._generatedId,
            fullWidth: props.fullWidth,
            minimal: props.minimal
          })}
        />
      );
    }
    return (
      <StyledSelectButton
        {...getButtonProps()}
        {...getInputProps()}
        fullWidth={props.fullWidth}
        minimal={props.minimal}
        style={{ ...props.style }}
        id={props.id || props._generatedId}
      >
        {itemToString(selectedItem)
          ? itemToString(selectedItem)
          : props.placeholder}
      </StyledSelectButton>
    );
  }

  function itemToString(item) {
    let label = item;
    if (item && item.props) {
      label = item.props.label || item.props.children || item;
    }

    return label;
  }

  function onChange(selectedItem, downshiftProps) {
    const value = selectedItem.props.value;
    props.onChange(value, selectedItem);
  }

  function _getItemFromValue(value) {
    return props.children.filter(child => {
      return child.props.value === value;
    })[0];
  }

  function getMenuItems(
    inputValue,
    getItemProps,
    highlightedIndex,
    selectedItem
  ) {
    // return the full list if they reopen the dropdown
    // filter if they change the inputValue
    const inputMatchesSelection = inputValue === itemToString(selectedItem);

    if (props.filterable && inputValue && !inputMatchesSelection) {
      return matchSorter(props.children, inputValue, {
        keys: ['props.children', 'props.value']
      }).map((child, index) =>
        React.cloneElement(child, {
          ...getItemProps({
            item: child,
            active: highlightedIndex === index,
            selected: selectedItem === child
          }),
          key: index
        })
      );
    }

    return props.children.map((child, index) =>
      React.cloneElement(child, {
        ...getItemProps({
          item: child,
          active: highlightedIndex === index,
          selected: selectedItem === child
        }),
        key: index
      })
    );
  }

  return (
    <Downshift
      itemToString={itemToString}
      onChange={onChange}
      selectedItem={
        props.selectedItem || _getItemFromValue(props.selectedValue)
      }
      render={({
        getRootProps,
        getButtonProps,
        getInputProps,
        getItemProps,
        isOpen,
        selectedItem,
        highlightedIndex,
        inputValue
      }) => (
        <StyledSelectWrapper
          {...getRootProps({ refKey: 'innerRef' })}
          style={props.wrapperStyle}
        >
          {getAnchorElement({
            getButtonProps,
            getInputProps,
            placeholder: props.placeholder,
            selectedItem,
            labelEl: props.label,
            horizontal: props.horizontal
          })}
          {isOpen ? (
            <Menu
              style={props.menuStyle}
              withComponent={<StyledSelectMenu fullWidth={props.fullWidth} />}
            >
              {getMenuItems(
                inputValue,
                getItemProps,
                highlightedIndex,
                selectedItem
              )}
            </Menu>
          ) : null}
        </StyledSelectWrapper>
      )}
    />
  );
};

Select.propTypes = {
  /** Nodes to be used as options in the Select */
  children: PropTypes.node,
  /** Toggle the select to use an input and allow filtering of the items */
  filterable: PropTypes.bool,
  /** Callback function fired when the value of the Select changes. */
  onChange: PropTypes.func,
  /** The selected item of the select */
  selectedItem: PropTypes.node,
  /** Value of the selected item */
  selectedValue: PropTypes.node,
  /** Placeholder text for the input */
  placeholder: PropTypes.string,
  /** Whether or not the select will fill its container's width */
  fullWidth: PropTypes.bool,
  /** A style variant for select inputs */
  minimal: PropTypes.bool,
  /** HTML prop for the Select, works together with a label's `for` prop */
  id: PropTypes.string,
  /** Style prop applied to the menu wrapper */
  menuStyle: PropTypes.object
};

Select.defaultProps = {
  placeholder: 'Select...'
};

export default Select;
