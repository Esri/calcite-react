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
  /** Description TBD */
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  /** Description TBD */
  children: PropTypes.node,
  /** Description TBD */
  transparent: PropTypes.bool,
  /** Description TBD */
  clear: PropTypes.bool,
  /** Description TBD */
  clearGray: PropTypes.bool,
  /** Description TBD */
  clearWhite: PropTypes.bool,
  /** Description TBD */
  white: PropTypes.bool,
  /** Description TBD */
  small: PropTypes.bool,
  /** Description TBD */
  large: PropTypes.bool,
  /** Description TBD */
  fill: PropTypes.bool,
  /** Description TBD */
  half: PropTypes.bool,
  /** Description TBD */
  red: PropTypes.bool,
  /** Description TBD */
  green: PropTypes.bool,
  /** Description TBD */
  disabled: PropTypes.bool,
  /** Description TBD */
  href: PropTypes.string
};

Button.defaultProps = {
  type: 'button'
};

export default Button;
