import PropTypes from 'prop-types';
import React from 'react';
import { StyledButton } from './Button-styled';

import { ButtonGroupContext } from './ButtonGroup';

const Button = ({
  children,
  href,
  iconButton,
  icon,
  iconPosition,

  ...other
}) => {
  function getIconMargin() {
    if (iconButton) {
      return;
    } else {
      return {
        marginLeft: iconPosition === 'after' ? '0.75em' : '-0.25em',
        marginRight: iconPosition === 'before' ? '0.75em' : '-0.25em'
      };
    }
  }

  const getIcon = icon => {
    if (icon) {
      return React.cloneElement(icon, {
        ...icon.props,
        style: {
          fill: 'currentColor',
          verticalAlign: 'bottom',
          ...getIconMargin(),
          ...icon.props.style
        }
      });
    }
  };

  return (
    <ButtonGroupContext.Consumer>
      {({ buttonGroupContext }) => (
        <StyledButton
          iconButton={iconButton}
          grouped={buttonGroupContext.grouped}
          isToggle={buttonGroupContext.isToggle}
          as={href ? 'a' : 'button'}
          href={href}
          {...other}
        >
          {iconPosition === 'before' ? getIcon(icon) : null}
          {children}
          {iconPosition === 'after' ? getIcon(icon) : null}
        </StyledButton>
      )}
    </ButtonGroupContext.Consumer>
  );
};

Button.propTypes = {
  /** The content of the component, text or icon */
  children: PropTypes.node,
  /** The html type property of the Button */
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  /** Style prop used to render a transparent button */
  transparent: PropTypes.bool,
  /** Style prop used to render a clear button */
  clear: PropTypes.bool,
  /** Style prop used to render a clear-gray button */
  clearGray: PropTypes.bool,
  /** Style prop used to render a clear-white button */
  clearWhite: PropTypes.bool,
  /** Style prop used to render a white button */
  white: PropTypes.bool,
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
  /** The html disabled property of the Button */
  disabled: PropTypes.bool,
  /** The html href property of the Button */
  href: PropTypes.string,
  /** The icon that will be displayed as the content of a Button */
  icon: PropTypes.node,
  /** A style prop used to adjust size and padding of buttons with only an icon as its content */
  iconButton: PropTypes.bool,
  /** The position of the icon in relation to other children in a Button */
  iconPosition: PropTypes.oneOf(['after', 'before'])
};

Button.defaultProps = {
  type: 'button',
  iconPosition: 'after'
};

Button.displayName = 'Button';

export default Button;
