import PropTypes from 'prop-types';
import React from 'react';
import Downshift from 'downshift';

import {
  StyledSelectWrapper,
  StyledSelectButton,
  StyledSelectMenu
} from './Select-styled';
import Menu from '../Menu';

const Select = props => {
  function getAnchorElement(params) {
    const {
      inputEl,
      getButtonProps,
      getInputProps,
      placeholder,
      selectedItem
    } = params;

    if (inputEl) {
      const inputElType = inputEl.props.type;
      if (
        inputElType === 'button' ||
        inputElType === 'submit' ||
        inputElType === 'reset'
      ) {
        return React.cloneElement(inputEl, {
          ...getButtonProps(),
          ...getInputProps(),
          children: itemToString(selectedItem)
            ? itemToString(selectedItem)
            : props.placeholder
        });
      } else if (inputElType === 'text') {
        return React.cloneElement(inputEl, {
          ...getButtonProps(),
          ...getInputProps(),
          ...inputEl.props,
          placeholder
        });
      }
    }
    return (
      <StyledSelectButton
        {...getButtonProps()}
        {...getInputProps()}
        fullWidth={props.fullWidth}
        minimal={props.minimal}
        style={{ ...props.style }}
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
    // 🚨 Currently, the arguments passed back to the `onChange` event handler
    //    are the value of the selected item (literally just props.value) and
    //    the item itself.

    const value = selectedItem.props.value;
    props.onChange(value, selectedItem);
  }

  function _getItemFromValue(value) {
    return props.children.filter(child => {
      return child.props.value === value;
    })[0];
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
        highlightedIndex
      }) => (
        <StyledSelectWrapper
          {...getRootProps({ refKey: 'innerRef' })}
          style={props.wrapperStyle}
        >
          {getAnchorElement({
            inputEl: props.input,
            getButtonProps,
            getInputProps,
            placeholder: props.placeholder,
            selectedItem
          })}
          {isOpen ? (
            <Menu withComponent={<StyledSelectMenu />}>
              {props.children.map((child, index) =>
                React.cloneElement(child, {
                  ...getItemProps({
                    item: child,
                    active: highlightedIndex === index,
                    selected: selectedItem === child
                  }),
                  key: index
                })
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
  /** Node to use as the input for the Select */
  input: PropTypes.node,
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
  minimal: PropTypes.bool
};

Select.defaultProps = {
  placeholder: 'Select...'
};

export default Select;
