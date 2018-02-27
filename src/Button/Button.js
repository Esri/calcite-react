import PropTypes from 'prop-types';
import React from 'react';
import { StyledButton } from './Button-styled';

const Button = ({ children, disabled, href, type, ...other }) => {
  const StyledLink = StyledButton.withComponent('a');

  const link = (
    <StyledLink href={href} {...other} disabled={disabled} type={type}>
      {children}
    </StyledLink>
  );

  const button = (
    <StyledButton {...other} disabled={disabled} type={type}>
      {children}
    </StyledButton>
  );

  return href ? link : button;
};

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  href: PropTypes.string
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
  href: ''
};

export default Button;
