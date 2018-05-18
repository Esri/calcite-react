import PropTypes from 'prop-types';
import React from 'react';
import Downshift from 'downshift';

import {
  StyledMultiSelectWrapper,
  StyledMultiSelectButton,
  StyledMultiSelectMenu
} from './MultiSelect-styled';
import Menu from '../Menu';

const Select = props => {
  function itemToString(item) {
    let label = item;
    if (item && item.props) {
      label = item.props.label || item.props.children || item;
    }

    return label;
  }

  function renderValue(items) {
    if (props.renderValue) return props.renderValue(items);

    if (!items || !items.length) return props.placeholder;
    return items.map(item => itemToString(item)).join(', ');
  }

  function onChange(selectedItem, downshiftProps) {
    const { selectedItem: selectedItems } = downshiftProps;

    if (selectedItems.indexOf(selectedItem) !== -1) {
      // Already selected item was clicked, remove it
      const values = selectedItems
        .filter(item => item !== selectedItem)
        .map(item => item.props.value);
      props.onChange(values);
    } else {
      // An unselected item was clicked, add it selection
      const values = selectedItems.map(item => item.props.value);
      props.onChange([...values, selectedItem.props.value]);
    }
  }

  function _getItemsFromValues(values) {
    return props.children.filter(child => {
      return values.indexOf(child.props.value) !== -1;
    });
  }

  return (
    <Downshift
      itemToString={itemToString}
      onChange={onChange}
      selectedItem={_getItemsFromValues(props.selectedValues)}
      render={({
        getRootProps,
        getButtonProps,
        getInputProps,
        getItemProps,
        isOpen,
        selectedItem,
        highlightedIndex
      }) => (
        <StyledMultiSelectWrapper
          {...getRootProps({ refKey: 'innerRef' })}
          style={props.wrapperStyle}
        >
          <StyledMultiSelectButton
            {...getButtonProps()}
            {...getInputProps()}
            fullWidth={props.fullWidth}
            minimal={props.minimal}
            style={{ ...props.style }}
          >
            {renderValue(selectedItem)}
          </StyledMultiSelectButton>
          {isOpen ? (
            <Menu
              style={props.menuStyle}
              withComponent={<StyledMultiSelectMenu />}
            >
              {props.children.map((child, index) =>
                React.cloneElement(child, {
                  ...getItemProps({
                    item: child,
                    active: highlightedIndex === index,
                    selected: selectedItem.indexOf(child) !== -1
                  }),
                  key: index
                })
              )}
            </Menu>
          ) : null}
        </StyledMultiSelectWrapper>
      )}
    />
  );
};

Select.propTypes = {
  /** Nodes to be used as options in the Select */
  children: PropTypes.node,
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
  /** Style prop applied to the menu wrapper */
  menuStyle: PropTypes.object
};

Select.defaultProps = {
  placeholder: 'Select...'
};

export default Select;
