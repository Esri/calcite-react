import PropTypes from 'prop-types';
import React from 'react';
import Downshift from 'downshift';
import { Manager, Reference, Popper } from 'react-popper';

import {
  StyledMultiSelectWrapper,
  StyledMultiSelectButton,
  StyledMultiSelectMenu
} from './MultiSelect-styled';

const Select = ({
  children,
  selectedValues,
  placeholder,
  wrapperStyle,
  menuStyle,
  fullWidth,
  minimal,
  onChange,
  renderValue,
  positionFixed,
  ...other
}) => {
  function itemToString(item) {
    let label = item;
    if (item && item.props) {
      label = item.props.label || item.props.children || item;
    }

    return label;
  }

  function downshiftRenderValue(items) {
    if (renderValue) return renderValue(items);

    if (!items || !items.length) return placeholder;
    return items.map(item => itemToString(item)).join(', ');
  }

  function downshiftOnChange(selectedItem, downshiftProps) {
    const { selectedItem: selectedItems } = downshiftProps;

    if (selectedItems.indexOf(selectedItem) !== -1) {
      // Already selected item was clicked, remove it
      const values = selectedItems
        .filter(item => item !== selectedItem)
        .map(item => item.props.value);
      onChange(values);
    } else {
      // An unselected item was clicked, add it selection
      const values = selectedItems.map(item => item.props.value);
      onChange([...values, selectedItem.props.value]);
    }
  }

  function _getItemsFromValues(values) {
    return children.filter(child => {
      return values.indexOf(child.props.value) !== -1;
    });
  }

  return (
    <Manager>
      <Downshift
        itemToString={itemToString}
        onChange={downshiftOnChange}
        selectedItem={_getItemsFromValues(selectedValues)}
      >
        {({
          getRootProps,
          getToggleButtonProps,
          getInputProps,
          getItemProps,
          isOpen,
          selectedItem,
          highlightedIndex
        }) => (
          <StyledMultiSelectWrapper
            {...getRootProps({}, { suppressRefError: true })}
            style={wrapperStyle}
          >
            <Reference style={{ display: 'inline-block' }}>
              {({ ref }) => (
                <StyledMultiSelectButton
                  ref={ref}
                  {...getToggleButtonProps()}
                  {...getInputProps()}
                  fullWidth={fullWidth}
                  minimal={minimal}
                  as="button"
                  {...other}
                >
                  {downshiftRenderValue(selectedItem)}
                </StyledMultiSelectButton>
              )}
            </Reference>
            {isOpen ? (
              <Popper positionFixed={positionFixed} placement={'bottom-start'}>
                {({ ref: popperRef, style, placement }) => (
                  <StyledMultiSelectMenu
                    ref={popperRef}
                    style={{ ...style, ...menuStyle }}
                    fullWidth={fullWidth}
                    data-placement={placement}
                  >
                    {children.map((child, index) =>
                      React.cloneElement(child, {
                        ...getItemProps({
                          item: child,
                          active: highlightedIndex === index,
                          selected: selectedItem.indexOf(child) !== -1
                        }),
                        key: index
                      })
                    )}
                  </StyledMultiSelectMenu>
                )}
              </Popper>
            ) : null}
          </StyledMultiSelectWrapper>
        )}
      </Downshift>
    </Manager>
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
  menuStyle: PropTypes.object,
  /** Uses `position: fixed` on the tooltip allowing it to show up outside of containers that have `overflow: hidden` */
  positionFixed: PropTypes.bool
};

Select.defaultProps = {
  placeholder: 'Select...'
};

export default Select;
