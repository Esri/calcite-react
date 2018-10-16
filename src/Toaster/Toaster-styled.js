import styled, { css } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import Button from '../Button';
import { unitCalc } from '../utils/helpers';

const StyledToastContainer = styled(ToastContainer)`
  &.Toastify__toast-container {
    width: 450px;

    &--top-center {
      margin-left: ${props => unitCalc('450px', -0.5, '*')};
    }

    &--bottom-center {
      margin-left: ${props => unitCalc('450px', -0.5, '*')};
    }
  }

  .Toastify__toast {
    padding: ${props => unitCalc(props.theme.baseline, 2, '/')};
    box-shadow: ${props => props.theme.boxShadow};
    border: 1px solid ${props => props.theme.palette.lightestGray};
    border-radius: ${props => props.theme.borderRadius};
    font-family: ${props => props.theme.type.avenirFamily};

    &--default {
      background: ${props => props.theme.palette.white};
      color: ${props => props.theme.palette.offBlack};
    }
    &--info {
      background: ${props => props.theme.palette.blue};
      border-color: transparent;
    }
    &--success {
      background: ${props => props.theme.palette.darkGreen};
      border-color: transparent;
    }
    &--warning {
      background: ${props => props.theme.palette.darkYellow};
      border-color: transparent;
    }
    &--error {
      background: ${props => props.theme.palette.red};
      border-color: transparent;
    }
  }

  .Toastify__progress-bar {
    visibility: hidden;

    &--default {
      background: ${props => props.theme.palette.blue};
    }

    &.progress-visible {
      visibility: visible;
    }

    ${props =>
      props.showProgress &&
      css`
        visibility: visible;

        &.progress-hidden {
          visibility: hidden;
        }
      `};
  }
`;

const StyledCloseButton = styled(Button)`
  color: currentColor;

  &:hover {
    color: currentColor;
    opacity: 0.7;
  }
`;

export { StyledToastContainer, StyledCloseButton };
