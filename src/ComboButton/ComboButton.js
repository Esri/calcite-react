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
  state = {
    open: false
  };

  togglePopover = () => {
    this.setState({ open: !this.state.open });
  };

  closePopover = () => {
    this.setState({ open: false });
  };

  render() {
    const {
      children,
      onClick,
      label,
      icon,
      iconPosition,
      dropdownIcon,
      half,
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
      <StyledComboButtonContainer half={half}>
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
              {dropdownIcon}
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
  /** The content of the component; should be a Menu with MenuItems for the dropdown. */
  children: PropTypes.node,
  /** The HTML type property of the primary ComboButton. */
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  /** Style prop used to render a clear ComboButton. */
  clear: PropTypes.bool,
  /** Style prop used to render a clear-gray ComboButton. */
  clearGray: PropTypes.bool,
  /** Style prop used to render an extra small ComboButton. */
  extraSmall: PropTypes.bool,
  /** Style prop used to render a small ComboButton. */
  small: PropTypes.bool,
  /** Style prop used to render a large ComboButton. */
  large: PropTypes.bool,
  /** Style prop used to render an extra large ComboButton. */
  extraLarge: PropTypes.bool,
  /** Style prop used to render a 100% width ComboButton. */
  fullWidth: PropTypes.bool,
  /** Style prop used to render a 50% width ComboButton. */
  half: PropTypes.bool,
  /** Style prop used to render a red ComboButton. */
  red: PropTypes.bool,
  /** Style prop used to render a green ComboButton. */
  green: PropTypes.bool,
  /** The HTML disabled property of the primary ComboButton. */
  disabled: PropTypes.bool,
  /** The HTML href property of the primary ComboButton; results in rendering an anchor element. */
  href: PropTypes.string,
  /** The icon that will be displayed as the content of a ComboButton. */
  icon: PropTypes.node,
  /** The position of the icon in relation to other children in a ComboButton. */
  iconPosition: PropTypes.oneOf(['after', 'before']),
  /** The icon used inside the dropdown button */
  dropdownIcon: PropTypes.node
};

ComboButton.defaultProps = {
  type: 'button',
  iconPosition: 'after',
  dropdownIcon: <CaretDownIcon filled size={14} />,
  onClick: () => {}
};

ComboButton.displayName = 'ComboButton';

export default ComboButton;
