import React, { Children } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import memoize from 'memoize-one';
import { List } from 'react-virtualized';
import { Manager, Reference, Popper } from 'react-popper';

import {
  StyledMultiSelectWrapper,
  StyledMultiSelectButton,
  StyledMultiSelectMenu
} from './MultiSelect-styled';

import { FormControlContext } from '../Form/FormControl';
import { PopoverContext } from '../Popover/Popover';

const Select = ({
  children,
  selectedValues,
  placeholder,
  wrapperStyle,
  menuStyle,
  id,
  fullWidth,
  minimal,
  onChange,
  renderValue,
  positionFixed,
  appendToBody,
  disabled,
  onBlur,
  field,
  form,
  closeOnSelect,
  virtualized,
  virtualizedRowHeight,
  virtualizedMenuWidth,
  ...other
}) => {
  let name, touched, errors, isSubmitting, setFieldValue;
  if (field) {
    name = field.name;
    touched = form.touched;
    errors = form.errors;
    isSubmitting = form.isSubmitting;
    setFieldValue = form.setFieldValue;
  }
  const menuHeight =
    (menuStyle && parseInt(menuStyle.height, 10)) ||
    (menuStyle && parseInt(menuStyle.maxHeight, 10)) ||
    300;

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
    let values;
    if (selectedItems.indexOf(selectedItem) !== -1) {
      // Already selected item was clicked, remove it
      values = selectedItems
        .filter(item => item !== selectedItem)
        .map(item => item.props.value);
    } else {
      // An unselected item was clicked, add it selection
      const existingValues = selectedItems.map(item => item.props.value);
      values = [...existingValues, selectedItem.props.value];
    }

    if (setFieldValue) {
      setFieldValue(name, values);
    }

    if (onChange) {
      onChange(values);
    }
  }

  function _getItemsFromValues(values) {
    return Children.toArray(children).filter(child => {
      return values.indexOf(child.props.value) !== -1;
    });
  }

  function getSelectedValues() {
    return field ? field.value : selectedValues;
  }

  function handleBlur(e) {
    if (field) {
      field.onBlur(e);
    }

    if (onBlur) {
      onBlur(e);
    }
  }

  function isSuccess(formControlContext) {
    if (touched) {
      return touched[name] && !errors[name] ? true : false;
    }
    return formControlContext.success;
  }

  function isError(formControlContext) {
    if (touched) {
      return touched[name] && errors[name] ? true : false;
    }
    return formControlContext.error;
  }

  function isDisabled() {
    return isSubmitting || disabled;
  }

  function _getPopper(popper, isOpen, isInPopover, appendToBody) {
    if (isOpen || isInPopover) {
      if (appendToBody) {
        return ReactDOM.createPortal(popper, document.body);
      }

      return popper;
    }
  }

  function _stateReducer(state, changes) {
    if (closeOnSelect) {
      return changes;
    }

    switch (changes.type) {
      case Downshift.stateChangeTypes.keyDownEnter:
      case Downshift.stateChangeTypes.clickItem:
        return {
          ...changes,
          isOpen: state.isOpen,
          highlightedIndex: state.highlightedIndex
        };
      default:
        return changes;
    }
  }

  const getValues = memoize(selectedItems => {
    return selectedItems.map(selectedItem => selectedItem.props.value);
  });

  function getMenuItems(filteredList, params) {
    const { getItemProps, highlightedIndex, selectedValues } = params;

    if (virtualized) {
      return (
        <List
          width={virtualizedMenuWidth || 9999}
          autoWidth={!virtualizedMenuWidth}
          scrollToIndex={highlightedIndex || 0}
          scrollToAlignment="auto"
          height={
            filteredList.length < 7
              ? filteredList.length * virtualizedRowHeight
              : menuHeight
          }
          rowCount={filteredList.length}
          rowHeight={virtualizedRowHeight}
          rowRenderer={({ index, style: rowRenderStyle }) => {
            return getMenuItem(filteredList[index], {
              getItemProps,
              highlightedIndex,
              index,
              selectedValues,
              rowRenderStyle
            });
          }}
        />
      );
    }

    return filteredList.map((item, index) =>
      getMenuItem(item, {
        getItemProps,
        highlightedIndex,
        index,
        selectedValues
      })
    );
  }

  function getMenuItem(item, params) {
    const {
      getItemProps,
      highlightedIndex,
      index,
      selectedValues,
      rowRenderStyle
    } = params;

    return React.cloneElement(item, {
      ...getItemProps({
        style: { ...item.props.style, ...rowRenderStyle },
        item,
        index,
        active: highlightedIndex === index,
        selected: selectedValues.indexOf(item.props.value) > -1,
        key: item.props.value
      })
    });
  }

  return (
    <Manager>
      <Downshift
        itemToString={itemToString}
        onChange={downshiftOnChange}
        onBlur={handleBlur}
        stateReducer={_stateReducer}
        selectedItem={_getItemsFromValues(getSelectedValues())}
      >
        {({
          getRootProps,
          getToggleButtonProps,
          getInputProps,
          getItemProps,
          isOpen,
          selectedItem,
          highlightedIndex
        }) => {
          const selectedValues = getValues(selectedItem);

          return (
            <StyledMultiSelectWrapper
              {...getRootProps({}, { suppressRefError: true })}
              style={wrapperStyle}
            >
              <Reference style={{ display: 'inline-block' }}>
                {({ ref }) => (
                  <FormControlContext.Consumer>
                    {({ formControlContext }) => (
                      <StyledMultiSelectButton
                        ref={ref}
                        success={isSuccess(formControlContext)}
                        error={isError(formControlContext)}
                        disabled={isDisabled()}
                        as="button"
                        {...getToggleButtonProps()}
                        {...getInputProps({
                          id: id || formControlContext._generatedId,
                          fullWidth: fullWidth,
                          minimal: minimal
                        })}
                        {...other}
                      >
                        {downshiftRenderValue(selectedItem)}
                      </StyledMultiSelectButton>
                    )}
                  </FormControlContext.Consumer>
                )}
              </Reference>
              <PopoverContext.Consumer>
                {({ popoverContext }) => {
                  return _getPopper(
                    <Popper
                      positionFixed={positionFixed}
                      placement={other.placement}
                      modifiers={{
                        preventOverflow: {
                          enabled: appendToBody || positionFixed ? false : true
                        },
                        hide: {
                          enabled: appendToBody || positionFixed ? false : true
                        }
                      }}
                    >
                      {({ ref: popperRef, style, placement }) => (
                        <StyledMultiSelectMenu
                          ref={popperRef}
                          style={{ ...style, ...menuStyle }}
                          fullWidth={fullWidth}
                          data-placement={placement}
                          isOpen={isOpen}
                        >
                          {getMenuItems(children, {
                            getItemProps,
                            highlightedIndex,
                            selectedValues
                          })}
                          {/*Children.map(children, (child, index) =>
                            React.cloneElement(child, {
                              ...getItemProps({
                            item: child,
                            active: highlightedIndex === index,
                            selected:
                            selectedValues.indexOf(child.props.value) > -1
                              }),
                              key: index
                            })
                          )*/}
                        </StyledMultiSelectMenu>
                      )}
                    </Popper>,
                    isOpen,
                    popoverContext.isInPopover,
                    appendToBody
                  );
                }}
              </PopoverContext.Consumer>
            </StyledMultiSelectWrapper>
          );
        }}
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
  /** Placement of the popover in relation to the target */
  placement: PropTypes.oneOf([
    'top',
    'right',
    'bottom',
    'left',
    'top-start',
    'right-start',
    'bottom-start',
    'left-start',
    'top-end',
    'right-end',
    'bottom-end',
    'left-end'
  ]),
  /** Placeholder text for the input */
  placeholder: PropTypes.string,
  /** Whether or not the select will fill its container's width */
  fullWidth: PropTypes.bool,
  /** A style variant for select inputs */
  minimal: PropTypes.bool,
  /** Style prop applied to the menu wrapper */
  menuStyle: PropTypes.object,
  /** Uses `position: fixed` on the tooltip allowing it to show up outside of containers that have `overflow: hidden` */
  positionFixed: PropTypes.bool,
  /** Whether or not to close the menu on each selection */
  closeOnSelect: PropTypes.bool,
  /** Use react-virtualized to render rows as the user scrolls */
  virtualized: PropTypes.bool,
  /** (virtualized only) Row height used to calculate how many rows to render in a virtualized menu */
  virtualizedRowHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  /** (virtualized only) Width of the menu, unloaded rows may be wider than the initial set */
  virtualizedMenuWidth: PropTypes.number
};

Select.defaultProps = {
  placeholder: 'Select...',
  placement: 'bottom-start',
  closeOnSelect: true,
  virtualizedRowHeight: 42
};

export default Select;
