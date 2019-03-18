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
  StyledCopyToClipboard,
  StyledCopyToClipboardInput,
  StyledCopyButton
} from './CopyToClipboard-styled';

import Tooltip from '../Tooltip';
import CopyToClipboardIcon from 'calcite-ui-icons-react/CopyToClipboardIcon';
import CheckIcon from 'calcite-ui-icons-react/CheckIcon';

class CopyToClipboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      copySuccessful: false
    };
  }

  fallbackCopyTextToClipboard = children => {
    let textArea = document.createElement('textarea');
    textArea.value = children;
    textArea.style.cssText = 'position: fixed; top: -9999px; left: -9999px;';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand('copy');
      this.setState({ copySuccessful: true });
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
  };

  copyTextToClipboard = children => {
    if (!navigator.clipboard) {
      this.fallbackCopyTextToClipboard(children);
      return;
    }
    navigator.clipboard.writeText(children).then(() => {
      this.setState({ copySuccessful: true });
    });
  };

  getTooltipText = () => {
    if (this.state.copySuccessful) {
      return this.props.successTooltip;
    }

    return this.props.tooltip;
  };

  getClipboardIcon = () => {
    if (this.state.copySuccessful) {
      return this.props.copySuccessIcon;
    }

    return this.props.copyIcon;
  };

  resetCopySuccess = () => {
    this.setState({ copySuccessful: false });
  };

  render() {
    const {
      children,
      positionFixed,
      appendToBody,
      tooltipStyle,
      ...other
    } = this.props;

    const copyToClipboard = (
      <StyledCopyToClipboard {...other}>
        <StyledCopyToClipboardInput as="input" value={children} readOnly />
        <Tooltip
          positionFixed={positionFixed}
          appendToBody={appendToBody}
          title={this.getTooltipText()}
          style={tooltipStyle}
        >
          <StyledCopyButton
            clear
            onClick={() => this.copyTextToClipboard(children)}
            onBlur={this.resetCopySuccess}
            icon={this.getClipboardIcon()}
          />
        </Tooltip>
      </StyledCopyToClipboard>
    );

    return copyToClipboard;
  }
}

CopyToClipboard.propTypes = {
  /** Text to be copied. */
  children: PropTypes.string,
  /** The tooltip label before the text is copied. */
  tooltip: PropTypes.string,
  /** The tooltip label after the text is copied. */
  successTooltip: PropTypes.string,
  /** The tooltip will use position: fixed */
  positionFixed: PropTypes.bool,
  /** The tooltip will use appendToBody for positioning on the dom */
  appendToBody: PropTypes.bool,
  /** Style definition passed to the tooltip popover */
  tooltipStyle: PropTypes.object,
  /** Icon to be used in the copy to clipboard button */
  copyIcon: PropTypes.node,
  /** Icon to be used once the copy to clipboard button has been clicked */
  copySuccessIcon: PropTypes.node
};

CopyToClipboard.defaultProps = {
  tooltip: 'Copy',
  successTooltip: 'Copied!',
  appendToBody: true,
  copyIcon: <CopyToClipboardIcon />,
  copySuccessIcon: <CheckIcon />
};

CopyToClipboard.displayName = 'CopyToClipboard';

export default CopyToClipboard;
