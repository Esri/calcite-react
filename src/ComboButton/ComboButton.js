import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  StyledComboButtonContainer,
  StyledComboButton,
  StyledComboButtonDropdown
} from './ComboButton-styled';

import Popover from '../Popover';
import ChevronDownIcon from '../icons/ChevronDownIcon';

class ComboButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  togglePopover = () => {
    this.setState({
      open: !this.state.open
    });
  };

  closePopover = () => {
    this.setState({
      open: false
    });
  };

  render() {
    const {
      children,
      onClick,
      label,
      clear,
      clearGray,
      small,
      large,
      fullWidth,
      half,
      red,
      green,
      disabled,
      type,
      icon,
      iconPosition,
      ...other
    } = this.props;

    let wrappedIcon;
    if (icon) {
      wrappedIcon = React.cloneElement(icon, {
        ...icon.props,
        style: {
          fill: 'currentColor',
          verticalAlign: 'bottom',
          marginLeft: iconPosition === 'after' ? '0.75em' : '-0.25em',
          marginRight: iconPosition === 'before' ? '0.75em' : '-0.25em',
          ...icon.props.style
        }
      });
    }

    const comboButton = (
      <StyledComboButtonContainer>
        <StyledComboButton
          onClick={onClick}
          clear={clear}
          clearGray={clearGray}
          small={small}
          large={large}
          fullWidth={fullWidth}
          half={half}
          red={red}
          green={green}
          disabled={disabled}
          type={type}
          {...other}
        >
          {iconPosition === 'before' ? wrappedIcon : null}
          {label}
          {iconPosition === 'after' ? wrappedIcon : null}
        </StyledComboButton>
        <Popover
          open={this.state.open}
          onRequestClose={this.closePopover}
          placement="bottom-end"
          targetContainerStyles={{ display: 'block' }}
          targetEl={
            <StyledComboButtonDropdown
              onClick={this.togglePopover}
              clear={clear}
              clearGray={clearGray}
              small={small}
              large={large}
              fullWidth={fullWidth}
              half={half}
              red={red}
              green={green}
              disabled={disabled}
              type={type}
              {...other}
            >
              <ChevronDownIcon />
            </StyledComboButtonDropdown>
          }
        >
          {children}
        </Popover>
      </StyledComboButtonContainer>
    );

    return comboButton;
  }
}

ComboButton.propTypes = {
  /** Description TBD */
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  /** Description TBD */
  children: PropTypes.node,
  /** Description TBD */
  clear: PropTypes.bool,
  /** Description TBD */
  clearGray: PropTypes.bool,
  /** Description TBD */
  small: PropTypes.bool,
  /** Description TBD */
  large: PropTypes.bool,
  /** Description TBD */
  fullWidth: PropTypes.bool,
  /** Description TBD */
  half: PropTypes.bool,
  /** Description TBD */
  red: PropTypes.bool,
  /** Description TBD */
  green: PropTypes.bool,
  /** Description TBD */
  disabled: PropTypes.bool,
  /** Description TBD */
  href: PropTypes.string,
  /** The icon that will be displayed as the content of a ComboButton */
  icon: PropTypes.node,
  /** The position of the icon in relation to other children in a ComboButton */
  iconPosition: PropTypes.oneOf(['after', 'before'])
};

ComboButton.defaultProps = {
  type: 'button',
  iconPosition: 'after'
};

export default ComboButton;
