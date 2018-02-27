import PropTypes from 'prop-types';
import React from 'react';
import { StyledButton } from './Button-styled';

const Button = ({
  children,
  transparent,
  clear,
  clearGray,
  clearWhite,
  white,
  small,
  large,
  fill,
  half,
  red,
  green,
  disabled,
  href,
  type,
  ...other
}) => {
  const StyledLink = StyledButton.withComponent('a');

  const link = (
    <StyledLink
      transparent={transparent}
      clear={clear}
      clearGray={clearGray}
      clearWhite={clearWhite}
      white={white}
      small={small}
      large={large}
      fill={fill}
      half={half}
      red={red}
      green={green}
      href={href}
      {...other}
      disabled={disabled}
      type={type}
    >
      {children}
    </StyledLink>
  );

  const button = (
    <StyledButton
      transparent={transparent}
      clear={clear}
      clearGray={clearGray}
      clearWhite={clearWhite}
      white={white}
      small={small}
      large={large}
      fill={fill}
      half={half}
      red={red}
      green={green}
      {...other}
      disabled={disabled}
      type={type}
    >
      {children}
    </StyledButton>
  );

  return href ? link : button;
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  children: PropTypes.node,
  transparent: PropTypes.bool,
  clear: PropTypes.bool,
  clearGray: PropTypes.bool,
  clearWhite: PropTypes.bool,
  white: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  fill: PropTypes.bool,
  half: PropTypes.bool,
  red: PropTypes.bool,
  green: PropTypes.bool,
  disabled: PropTypes.bool,
  href: PropTypes.string
};

Button.defaultProps = {
  type: 'button',
  transparent: false,
  clear: false,
  clearGray: false,
  clearWhite: false,
  white: false,
  small: false,
  large: false,
  fill: false,
  half: false,
  red: false,
  green: false,
  disabled: false,
  href: ''
};

export default Button;
