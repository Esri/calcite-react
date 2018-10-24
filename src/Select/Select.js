import React, { Component, Children } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import memoize from 'memoize-one';
import { List } from 'react-virtualized';
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
import { PopoverContext } from '../Popover/Popover';

class Select extends Component {
  getAnchorElement = params => {
    const {
      ref,
      getToggleButtonProps,
      getInputProps,
      placeholder,
      selectedItem,
      filterable,
      id,
      fullWidth,
      minimal,
      disabled,
      style,
      field,
      form,
      ...other
    } = params;

    if (filterable) {
      return (
        <FormControlContext.Consumer>
          {({ formControlContext }) => (
            <StyledSelectInput
              as="input"
              onClick={e => {
                e.target.select(0, e.target.value.length);
                getToggleButtonProps().onClick(e);
              }}
              success={this.isSuccess({ formControlContext, field, form })}
              error={this.isError({ formControlContext, field, form })}
              disabled={this.isDisabled({ field, form, disabled })}
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
            success={this.isSuccess({ formControlContext, field, form })}
            error={this.isError({ formControlContext, field, form })}
            disabled={this.isDisabled({ field, form, disabled })}
            {...other}
          >
            {this.itemToString(selectedItem)
              ? this.itemToString(selectedItem)
              : placeholder}
          </StyledSelectButton>
        )}
      </FormControlContext.Consumer>
    );
  };

  itemToString = item => {
    let label = item;
    if (item && item.props) {
      label = item.props.label || item.props.children || item;
    }

    return label;
  };

  downshiftOnChange = params => {
    const { selectedItem, field, form, onChange } = params;
    let name, touched, setTouched, setFieldValue;
    if (field) {
      name = field.name;
      touched = form.touched;
      setTouched = form.setTouched;
      setFieldValue = form.setFieldValue;
    }

    const value = selectedItem.props.value;

    if (setFieldValue) {
      setTouched({ ...touched, [name]: true });
      setFieldValue(name, value);
    }

    if (onChange) {
      onChange(value, selectedItem);
    }
  };

  _getItemFromValue = (children, value) => {
    if (!value) return null;

    return (
      Children.toArray(children).filter(child => {
        return child.props.value === value;
      })[0] || null
    );
  };

  getMenuItems = (filteredList, virtualized, params) => {
    const {
      getItemProps,
      highlightedIndex,
      selectedItem,
      menuHeight,
      virtualizedRowHeight,
      virtualizedMenuWidth
    } = params;

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
            return this.getMenuItem(filteredList[index], {
              getItemProps,
              highlightedIndex,
              index,
              selectedItem,
              rowRenderStyle
            });
          }}
        />
      );
    }

    return filteredList.map((item, index) =>
      this.getMenuItem(item, {
        getItemProps,
        highlightedIndex,
        index,
        selectedItem
      })
    );
  };

  getMenuItem = (item, params) => {
    const {
      getItemProps,
      highlightedIndex,
      index,
      selectedItem,
      rowRenderStyle
    } = params;

    return React.cloneElement(item, {
      ...getItemProps({
        style: { ...item.props.style, ...rowRenderStyle },
        item,
        index,
        active: highlightedIndex === index,
        selected: selectedItem && selectedItem.props.value === item.props.value,
        key: item.props.value
      })
    });
  };

  filterItems = memoize((items, inputValue, filterable, selectedItem) => {
    const inputMatchesSelection =
      inputValue === this.itemToString(selectedItem);

    if (filterable && inputValue && !inputMatchesSelection) {
      return matchSorter(items || this.state.items, inputValue, {
        keys: ['props.children', 'props.value']
      });
    }

    return items;
  });

  getFullWidthStyle = fullWidth => {
    if (fullWidth) {
      return { minWidth: '100%' };
    }
  };

  getSelectedValue = (field, selectedValue) => {
    return field ? field.value : selectedValue;
  };

  handleBlur = (e, field, onBlur) => {
    if (field) {
      field.onBlur(e);
    }

    if (onBlur) {
      onBlur(e);
    }
  };

  isSuccess = params => {
    const { formControlContext, field, form } = params;
    let name, touched, errors;
    if (field) {
      name = field.name;
      touched = form.touched;
      errors = form.errors;
    }

    if (touched) {
      return touched[name] && !errors[name] ? true : false;
    }
    return formControlContext.success;
  };

  isError = params => {
    const { formControlContext, field, form } = params;
    let name, touched, errors;
    if (field) {
      name = field.name;
      touched = form.touched;
      errors = form.errors;
    }

    if (touched) {
      return touched[name] && errors[name] ? true : false;
    }
    return formControlContext.error;
  };

  isDisabled = params => {
    const { field, form, disabled } = params;
    let isSubmitting;
    if (field) {
      isSubmitting = form.isSubmitting;
    }

    return isSubmitting || disabled;
  };

  _getPopper = params => {
    const { popper, isOpen, isInPopover, appendToBody } = params;

    if (isOpen || isInPopover) {
      if (appendToBody) {
        return ReactDOM.createPortal(popper, document.body);
      }

      return popper;
    }
  };

  render() {
    const {
      children,
      filterable,
      virtualized,
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
      virtualizedRowHeight,
      virtualizedMenuWidth,
      ...other
    } = this.props;

    const popperModifiersEnabled = appendToBody || positionFixed ? false : true;
    const menuHeight =
      (menuStyle && parseInt(menuStyle.height, 10)) ||
      (menuStyle && parseInt(menuStyle.maxHeight, 10)) ||
      300;

    return (
      <Manager style={{ ...PopperManagerStyles, ...wrapperStyle }}>
        <Downshift
          itemToString={this.itemToString}
          onChange={selection => {
            this.downshiftOnChange({
              selectedItem: selection,
              field,
              form,
              onChange
            });
          }}
          onBlur={e => this.handleBlur(e, field, onBlur)}
          selectedItem={
            selectedItem ||
            this._getItemFromValue(
              children,
              this.getSelectedValue(field, selectedValue)
            )
          }
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
          }) => {
            const filteredList = this.filterItems(
              children,
              inputValue,
              filterable,
              selectedItem
            );

            return (
              <StyledSelectWrapper
                fullWidth={fullWidth}
                {...getRootProps({}, { suppressRefError: true })}
              >
                <Reference style={{ display: 'inline-block' }}>
                  {({ ref }) => {
                    return this.getAnchorElement({
                      ref,
                      getToggleButtonProps,
                      getInputProps,
                      placeholder,
                      selectedItem,
                      filterable,
                      id,
                      fullWidth,
                      minimal,
                      disabled,
                      style,
                      field,
                      form,
                      ...other
                    });
                  }}
                </Reference>
                <PopoverContext.Consumer>
                  {({ popoverContext }) => {
                    return this._getPopper({
                      popper: (
                        <Popper
                          positionFixed={positionFixed}
                          placement={other.placement}
                          modifiers={{
                            preventOverflow: {
                              enabled: popperModifiersEnabled
                            },
                            hide: {
                              enabled: popperModifiersEnabled
                            }
                          }}
                        >
                          {({ ref, style: popperStyle, placement }) => {
                            return (
                              <StyledSelectMenu
                                ref={ref}
                                style={{
                                  ...popperStyle,
                                  ...this.getFullWidthStyle(),
                                  ...menuStyle
                                }}
                                isOpen={isOpen}
                                data-placement={placement}
                                fullWidth={fullWidth}
                              >
                                {this.getMenuItems(filteredList, virtualized, {
                                  highlightedIndex,
                                  menuHeight,
                                  virtualizedRowHeight,
                                  virtualizedMenuWidth,
                                  getItemProps,
                                  selectedItem
                                })}
                              </StyledSelectMenu>
                            );
                          }}
                        </Popper>
                      ),
                      isOpen,
                      popoverContext: popoverContext.isInPopover,
                      appendToBody
                    });
                  }}
                </PopoverContext.Consumer>
              </StyledSelectWrapper>
            );
          }}
        </Downshift>
      </Manager>
    );
  }
}

Select.propTypes = {
  /** Nodes to be used as options in the Select */
  children: PropTypes.node,
  /** Toggle the select to use an input and allow filtering of the items */
  filterable: PropTypes.bool,
  /** Use react-virtualized to render rows as the user scrolls */
  virtualized: PropTypes.bool,
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
  ]),
  /** (virtualized only) Row height used to calculate how many rows to render in a virtualized menu */
  virtualizedRowHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  /** (virtualized only) Width of the menu, unloaded rows may be wider than the initial set */
  virtualizedMenuWidth: PropTypes.number
};

Select.defaultProps = {
  placeholder: 'Select...',
  placement: 'bottom-start',
  virtualizedRowHeight: 42
};

export default Select;
