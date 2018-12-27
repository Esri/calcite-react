import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  StyledCopyToClipboard,
  StyledCopyToClipboardInput,
  ClipboardIconStyles,
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
      return <CheckIcon style={ClipboardIconStyles} />;
    }

    return <CopyToClipboardIcon style={ClipboardIconStyles} />;
  };

  resetCopySuccess = () => {
    this.setState({ copySuccessful: false });
  };

  render() {
    const { children, ...other } = this.props;

    const copyToClipboard = (
      <StyledCopyToClipboard {...other}>
        <StyledCopyToClipboardInput as="input" value={children} readOnly />
        <Tooltip title={this.getTooltipText()}>
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
  successTooltip: PropTypes.string
};

CopyToClipboard.defaultProps = {
  tooltip: 'Copy',
  successTooltip: 'Copied!'
};

CopyToClipboard.displayName = 'CopyToClipboard';

export default CopyToClipboard;
