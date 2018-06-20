import PropTypes from 'prop-types';
import React from 'react';
import Downshift from 'downshift';
import { Manager, Target, Popper } from 'react-popper';
import matchSorter from 'match-sorter';

import {
  StyledSelectWrapper,
  StyledSelectButton,
  StyledSelectInput,
  StyledSelectMenu
} from './Select-styled';
import Menu from '../Menu';

const popperStyle = {
  transition: `opacity 200ms cubic-bezier(0.4, 0.0, 0.2, 1)`,
  zIndex: 2000
};

const Select = ({
  children,
  filterable,
  fullWidth,
  minimal,
  style,
  id,
  _generatedId,
  placeholder,
  selectedItem,
  selectedValue,
  menuStyle,
  wrapperStyle,
  horizontal,
  label,
  onChange,
  ...other
}) => {
  function getAnchorElement(params) {
    const { getButtonProps, getInputProps, placeholder, selectedItem } = params;

    if (filterable) {
      return (
        <StyledSelectInput
          onClick={getButtonProps().onClick}
          {...getInputProps({
            placeholder: placeholder,
            id: id || _generatedId,
            fullWidth: fullWidth,
            minimal: minimal,
            ...other
          })}
        />
      );
    }
    return (
      <StyledSelectButton
        {...getButtonProps()}
        {...getInputProps()}
        fullWidth={fullWidth}
        minimal={minimal}
        id={id || _generatedId}
        {...other}
      >
        {itemToString(selectedItem) ? itemToString(selectedItem) : placeholder}
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

  function downshiftOnChange(selectedItem, downshiftProps) {
    const value = selectedItem.props.value;
    onChange(value, selectedItem);
  }

  function _getItemFromValue(value) {
    return children.filter(child => {
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

    if (filterable && inputValue && !inputMatchesSelection) {
      return matchSorter(children, inputValue, {
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

    return children.map((child, index) =>
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
    <Manager>
      <Downshift
        itemToString={itemToString}
        onChange={downshiftOnChange}
        selectedItem={selectedItem || _getItemFromValue(selectedValue)}
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
            style={wrapperStyle}
          >
            <Target>
              {getAnchorElement({
                getButtonProps,
                getInputProps,
                placeholder: placeholder,
                selectedItem,
                labelEl: label,
                horizontal: horizontal
              })}
            </Target>
            {isOpen ? (
              <Popper style={popperStyle} placement={'bottom-start'}>
                <Menu
                  style={menuStyle}
                  withComponent={<StyledSelectMenu fullWidth={fullWidth} />}
                >
                  {getMenuItems(
                    inputValue,
                    getItemProps,
                    highlightedIndex,
                    selectedItem
                  )}
                </Menu>
              </Popper>
            ) : null}
          </StyledSelectWrapper>
        )}
      />
    </Manager>
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
