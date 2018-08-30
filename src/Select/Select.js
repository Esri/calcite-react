import PropTypes from 'prop-types';
import React from 'react';
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
import Menu from '../Menu';

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
  ...other
}) => {
  function getAnchorElement(params) {
    const {
      ref,
      getButtonProps,
      getInputProps,
      placeholder,
      selectedItem
    } = params;

    if (filterable) {
      return (
        <FormControlContext.Consumer>
          {({ formControlContext }) => (
            <StyledSelectInput
              onClick={getButtonProps().onClick}
              {...getInputProps({
                placeholder: placeholder,
                id: id || formControlContext._generatedId,
                fullWidth: fullWidth,
                minimal: minimal,
                style: style,
                ...other
              })}
              innerRef={ref}
            />
          )}
        </FormControlContext.Consumer>
      );
    }
    return (
      <FormControlContext.Consumer>
        {({ formControlContext }) => (
          <StyledSelectButton
            {...getButtonProps()}
            {...getInputProps()}
            fullWidth={fullWidth}
            minimal={minimal}
            innerRef={ref}
            id={id || formControlContext._generatedId}
            style={style}
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

  function getFullWidthStyle() {
    if (fullWidth) {
      return { minWidth: '100%' };
    }
  }

  return (
    <Manager style={{ ...PopperManagerStyles, ...wrapperStyle }}>
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
          <StyledSelectWrapper {...getRootProps({ refKey: 'innerRef' })}>
            <Reference style={{ display: 'inline-block' }}>
              {({ ref }) => {
                return getAnchorElement({
                  ref,
                  getButtonProps,
                  getInputProps,
                  placeholder: placeholder,
                  selectedItem,
                  labelEl: label,
                  horizontal: horizontal
                });
              }}
            </Reference>
            {isOpen ? (
              <Popper positionFixed={positionFixed} placement={'bottom-start'}>
                {({ ref, style, placement }) => (
                  <Menu
                    innerRef={ref}
                    style={{
                      ...style,
                      ...getFullWidthStyle(),
                      ...menuStyle
                    }}
                    data-placement={placement}
                    withComponent={<StyledSelectMenu fullWidth={fullWidth} />}
                  >
                    {getMenuItems(
                      inputValue,
                      getItemProps,
                      highlightedIndex,
                      selectedItem
                    )}
                  </Menu>
                )}
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
  menuStyle: PropTypes.object,
  /** Uses `position: fixed` on the tooltip allowing it to show up outside of containers that have `overflow: hidden` */
  positionFixed: PropTypes.bool
};

Select.defaultProps = {
  placeholder: 'Select...'
};

export default Select;
