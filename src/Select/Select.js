import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import { Manager, Reference, Popper } from 'react-popper';
import matchSorter from 'match-sorter';

import {
  StyledSelectWrapper,
  StyledSelectButton,
  StyledSelectInput,
  StyledSelectMenu,
  PopperManagerStyles
} from './Select-styled';

import { FormControlContext } from '../Form/FormControl';

const Select = ({
  children,
  filterable,
  fullWidth,
  minimal,
  style,
  id,
  placeholder,
  selectedItem,
  selectedValue,
  menuStyle,
  wrapperStyle,
  horizontal,
  label,
  onChange,
  positionFixed,
  appendToBody,
  disabled,
  onBlur,
  field,
  form,
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

  function getAnchorElement(params) {
    const {
      ref,
      getToggleButtonProps,
      getInputProps,
      placeholder,
      selectedItem
    } = params;

    if (filterable) {
      return (
        <FormControlContext.Consumer>
          {({ formControlContext }) => (
            <StyledSelectInput
              as="input"
              onClick={getToggleButtonProps().onClick}
              success={isSuccess(formControlContext)}
              error={isError(formControlContext)}
              disabled={isDisabled()}
              {...getInputProps({
                placeholder: placeholder,
                id: id || formControlContext._generatedId,
                fullWidth: fullWidth,
                minimal: minimal,
                style: style,
                ...other
              })}
              ref={ref}
            />
          )}
        </FormControlContext.Consumer>
      );
    }
    return (
      <FormControlContext.Consumer>
        {({ formControlContext }) => (
          <StyledSelectButton
            {...getToggleButtonProps()}
            {...getInputProps()}
            as="button"
            fullWidth={fullWidth}
            minimal={minimal}
            ref={ref}
            id={id || formControlContext._generatedId}
            style={style}
            success={isSuccess(formControlContext)}
            error={isError(formControlContext)}
            disabled={isDisabled()}
            {...other}
          >
            {itemToString(selectedItem)
              ? itemToString(selectedItem)
              : placeholder}
          </StyledSelectButton>
        )}
      </FormControlContext.Consumer>
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

    if (setFieldValue) {
      setFieldValue(name, value);
    }

    if (onChange) {
      onChange(value, selectedItem);
    }
  }

  function _getItemFromValue(value) {
    if (!value) return null;

    return (
      children.filter(child => {
        return child.props.value === value;
      })[0] || null
    );
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
            selected: selectedItem === child,
            key: index
          })
        })
      );
    }

    return children.map((child, index) =>
      React.cloneElement(child, {
        ...getItemProps({
          item: child,
          active: highlightedIndex === index,
          selected: selectedItem === child,
          key: index
        })
      })
    );
  }

  function getFullWidthStyle() {
    if (fullWidth) {
      return { minWidth: '100%' };
    }
  }

  function getSelectedValue() {
    return field ? field.value : selectedValue;
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

  function _getPopper(popper, appendToBody) {
    if (appendToBody) {
      return ReactDOM.createPortal(popper, document.body);
    }

    return popper;
  }

  return (
    <Manager style={{ ...PopperManagerStyles, ...wrapperStyle }}>
      <Downshift
        itemToString={itemToString}
        onChange={downshiftOnChange}
        onBlur={handleBlur}
        selectedItem={selectedItem || _getItemFromValue(getSelectedValue())}
      >
        {({
          getRootProps,
          getToggleButtonProps,
          getInputProps,
          getItemProps,
          isOpen,
          selectedItem,
          highlightedIndex,
          inputValue
        }) => (
          <StyledSelectWrapper
            {...getRootProps({}, { suppressRefError: true })}
          >
            <Reference style={{ display: 'inline-block' }}>
              {({ ref }) => {
                return getAnchorElement({
                  ref,
                  getToggleButtonProps,
                  getInputProps,
                  placeholder,
                  selectedItem,
                  labelEl: label,
                  horizontal
                });
              }}
            </Reference>
            {isOpen
              ? _getPopper(
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
                    {({ ref, style, placement }) => {
                      return (
                        <StyledSelectMenu
                          ref={ref}
                          style={{
                            ...style,
                            ...getFullWidthStyle(),
                            ...menuStyle
                          }}
                          data-placement={placement}
                          fullWidth={fullWidth}
                        >
                          {getMenuItems(
                            inputValue,
                            getItemProps,
                            highlightedIndex,
                            selectedItem
                          )}
                        </StyledSelectMenu>
                      );
                    }}
                  </Popper>,
                  appendToBody
                )
              : null}
          </StyledSelectWrapper>
        )}
      </Downshift>
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
  menuStyle: PropTypes.object,
  /** Uses `position: fixed` on the tooltip allowing it to show up outside of containers that have `overflow: hidden` */
  positionFixed: PropTypes.bool,
  /** Specify where the menu should appear in relation to the Select element */
  placement: PropTypes.oneOf([
    'auto',
    'top',
    'top-start',
    'top-end',
    'right',
    'right-start',
    'right-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'left',
    'left-start',
    'left-end'
  ])
};

Select.defaultProps = {
  placeholder: 'Select...',
  placement: 'bottom-start'
};

export default Select;
