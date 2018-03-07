import PropTypes from 'prop-types';
import React from 'react';
import Downshift from 'downshift';

import {
  StyledSelectWrapper,
  StyledSelectInput,
  StyledSelectMenu
} from './Select-styled';
import Menu from '../Menu';

const Select = props => {
  function getAnchorElement(
    input,
    getButtonProps,
    getInputProps,
    selectedItem
  ) {
    if (input) {
      return React.cloneElement(input, {
        ...getButtonProps(),
        ...getInputProps(),
        children: selectedItem ? selectedItem : props.placeholder
      });
    }
    return (
      <StyledSelectInput
        {...getButtonProps()}
        {...getInputProps()}
        type="text"
        placeholder={props.placeholder}
      />
    );
  }

  function itemToString(item) {
    // TODO... what to do if the item isn't a simple component with a string as a child?
    let label;
    if (item && item.props) {
      label = item.props.label || item.props.children || '';
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

  return (
    <Downshift
      itemToString={itemToString}
      onChange={onChange}
      render={({
        getRootProps,
        getButtonProps,
        getInputProps,
        getItemProps,
        isOpen,
        selectedItem,
        highlightedIndex
      }) => (
        <StyledSelectWrapper {...getRootProps({ refKey: 'innerRef' })}>
          {getAnchorElement(
            props.input,
            getButtonProps,
            getInputProps,
            selectedItem
          )}
          {isOpen ? (
            <Menu withComponent={<StyledSelectMenu />}>
              {props.children.map((child, index) =>
                React.cloneElement(child, {
                  ...getItemProps({
                    item: child,
                    key: index
                  })
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
  /** Placeholder text for the input */
  placeholder: PropTypes.string
};

Select.defaultProps = {
  placeholder: 'Select...'
};

export default Select;
