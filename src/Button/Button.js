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
  /** The icon that will be displayed as the content of a Button */
  icon: PropTypes.node,
  /** The position of the icon in relation to other children in a Button */
  iconPosition: PropTypes.oneOf(['after', 'before'])
};

Button.defaultProps = {
  type: 'button',
  iconPosition: 'after'
};

Button.displayName = 'Button';

export default Button;
