import PropTypes from 'prop-types';
import React from 'react';
import Downshift from 'downshift';

const Select = props => {
  function getAnchorElement(input, getButtonProps, getInputProps) {
    if (input) {
      return React.cloneElement(input, {
        ...getButtonProps(),
        ...getInputProps(),
        type: 'text',
        style: { cursor: 'pointer' }
      });
    }
    return <input {...getButtonProps()} />;
  }

  function itemToString(item) {
    // TODO... what to do if the item isn't a simple component with a string as a child?
    return (item.props && item.props.children) || 'unknown';
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
        getButtonProps,
        getInputProps,
        getItemProps,
        isOpen,
        selectedItem,
        highlightedIndex
      }) => (
        <div>
          {getAnchorElement(props.input, getButtonProps, getInputProps)}
          {isOpen ? (
            <div style={{ border: '4px solid lime' }}>
              {props.children.map((child, index) =>
                React.cloneElement(child, {
                  ...getItemProps({
                    item: child,
                    key: index,
                    style: { cursor: 'pointer', ...child.props.style }
                  })
                })
              )}
            </div>
          ) : null}
        </div>
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
  onChange: PropTypes.func
};

Select.defaultProps = {};

export default Select;
