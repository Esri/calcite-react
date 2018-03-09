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
  icon,
  iconPosition,
  ...other
}) => {
  const StyledLink = StyledButton.withComponent('a');

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
      {iconPosition === 'before' ? wrappedIcon : null}
      {children}
      {iconPosition === 'after' ? wrappedIcon : null}
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
      {iconPosition === 'before' ? wrappedIcon : null}
      {children}
      {iconPosition === 'after' ? wrappedIcon : null}
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
  href: PropTypes.string,
  /** The icon that will be displayed as the content of a Button */
  icon: PropTypes.node,
  /** The position of the icon in relation to other children in a Button */
  iconPosition: PropTypes.oneOf(['after', 'before'])
};

Button.defaultProps = {
  type: 'button',
  iconPosition: 'after'
};

export default Button;
