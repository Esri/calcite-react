// Copyright 2019 Esri
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.​

import PropTypes from 'prop-types';
import React from 'react';
import { StyledButton, StyledIconClass } from './Button-styled';

import { ButtonGroupContext } from './ButtonGroup';

const Button = ({
  children,
  href,
  iconButton,
  icon,
  iconPosition,
  ...other
}) => {
  const getIcon = icon => {
    if (icon) {
      return React.cloneElement(icon, {
        ...icon.props,
        className: `${icon.props.className} ${
          StyledIconClass.styledComponentId
        }`
      });
    }
  };

  return (
    <ButtonGroupContext.Consumer>
      {({ buttonGroupContext }) => (
        <StyledButton
          iconButton={iconButton}
          iconPosition={iconPosition}
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
  /** The content of the component; text or icon. */
  children: PropTypes.node,
  /** The HTML type property of the Button. */
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  /** Style prop used to render an inline Button. */
  inline: PropTypes.bool,
  /** Style prop used to render a transparent Button. */
  transparent: PropTypes.bool,
  /** Style prop used to render a clear Button. */
  clear: PropTypes.bool,
  /** Style prop used to render a clear-gray Button. */
  clearGray: PropTypes.bool,
  /** Style prop used to render a clear-white Button. */
  clearWhite: PropTypes.bool,
  /** Style prop used to render a white Button. */
  white: PropTypes.bool,
  /** Style prop used to render an extra small Button. */
  extraSmall: PropTypes.bool,
  /** Style prop used to render a small Button. */
  small: PropTypes.bool,
  /** Style prop used to render a large Button. */
  large: PropTypes.bool,
  /** Style prop used to render an extra large Button. */
  extraLarge: PropTypes.bool,
  /** Style prop used to render a 100% width Button. */
  fullWidth: PropTypes.bool,
  /** Style prop used to render a 50% width Button. */
  half: PropTypes.bool,
  /** Style prop used to render a red Button. */
  red: PropTypes.bool,
  /** Style prop used to render a green Button. */
  green: PropTypes.bool,
  /** The HTML disabled property of the Button. */
  disabled: PropTypes.bool,
  /** The HTML href property of the Button. */
  href: PropTypes.string,
  /** The icon that will be displayed as the content of a Button. */
  icon: PropTypes.node,
  /** A style prop used to adjust size and padding of Buttons with only an icon as its content. */
  iconButton: PropTypes.bool,
  /** The position of the icon in relation to other children in a Button. */
  iconPosition: PropTypes.oneOf(['after', 'before'])
};

Button.defaultProps = {
  type: 'button',
  iconPosition: 'after'
};

Button.displayName = 'Button';

export default Button;
