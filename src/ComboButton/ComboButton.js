import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  StyledComboButtonContainer,
  StyledComboButton,
  StyledComboButtonDropdown
} from './ComboButton-styled';

import Popover from '../Popover';
import CaretDownIcon from 'calcite-ui-icons-react/CaretDownIcon';

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
        <StyledComboButton onClick={onClick} {...other}>
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
            <StyledComboButtonDropdown onClick={this.togglePopover} {...other}>
              <CaretDownIcon filled size={14} />
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
  /** The content of the component, should be a Menu with MenuItems for the dropdown */
  children: PropTypes.node,
  /** The html type property of the primary button */
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  /** Style prop used to render a clear button */
  clear: PropTypes.bool,
  /** Style prop used to render a clear-gray button */
  clearGray: PropTypes.bool,
  /** Style prop used to render an extra small button */
  extraSmall: PropTypes.bool,
  /** Style prop used to render a small button */
  small: PropTypes.bool,
  /** Style prop used to render a large button */
  large: PropTypes.bool,
  /** Style prop used to render an extra large button */
  extraLarge: PropTypes.bool,
  /** Style prop used to render a 100% width button */
  fullWidth: PropTypes.bool,
  /** Style prop used to render a 50% width button */
  half: PropTypes.bool,
  /** Style prop used to render a red button */
  red: PropTypes.bool,
  /** Style prop used to render a green button */
  green: PropTypes.bool,
  /** The html disabled property of the primary button */
  disabled: PropTypes.bool,
  /** The html href property of the primary button, results in rendering an anchor element */
  href: PropTypes.string,
  /** The icon that will be displayed as the content of a ComboButton */
  icon: PropTypes.node,
  /** The position of the icon in relation to other children in a ComboButton */
  iconPosition: PropTypes.oneOf(['after', 'before'])
};

ComboButton.defaultProps = {
  type: 'button',
  iconPosition: 'after',
  onClick: () => {}
};

ComboButton.displayName = 'ComboButton';

export default ComboButton;
