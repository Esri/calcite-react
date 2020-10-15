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

import React from 'react';

// styled-components
import styled, { css } from 'styled-components';

// Utils, common elements
import { unitCalc } from '../utils/helpers';

// Calcite theme and Esri colors
import { CalciteTheme as theme } from '../CalciteThemeProvider';

// Calcite components
import { CalciteH3 } from '../Elements';
import Button from '../Button';
import { StyledButton } from '../Button/Button-styled';

// Icons
import XIcon from 'calcite-ui-icons-react/XIcon';

// Third party libraries

// Overlay styles passed to the ReactModal library
const reactModalOverlayStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  top: '0px',
  left: '0px',
  right: '0px',
  bottom: '0px',
  textAlign: 'center',
  background: theme.palette.transparentBlack,
  zIndex: 101,
  transition: `opacity 300ms cubic-bezier(0.4, 0.0, 0.2, 1)`,
  opacity: 0
};

// Modal wrapper styles passed to the ReactModal library
const reactModalContentStyles = color => {
  let borderTop;
  if (color === 'blue') {
    borderTop = `4px solid ${theme.palette.blue}`;
  } else if (color === 'red') {
    borderTop = `4px solid ${theme.palette.red}`;
  } else {
    borderTop = 'none';
  }

  return {
    position: 'relative',
    top: 'auto',
    left: 'auto',
    right: 'auto',
    bottom: 'auto',
    maxWidth: '80vw',
    maxHeight: '80vh',
    overflow: 'auto',
    outline: 'none',
    boxSizing: 'border-box',
    zIndex: '102',
    background: theme.palette.white,
    padding: '0px',
    textAlign: 'initial',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    verticalAlign: 'middle',
    borderRadius: '3px',
    boxShadow: theme.boxShadow,
    border: 'none',
    borderTop,
    transition: `margin-top 300ms cubic-bezier(0.4, 0.0, 0.2, 1)`,
    marginTop: '30px'
  };
};

const StyledModalHeader = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  max-width: 100%;
  min-width: 0;
  z-index: 2;
  flex: 0 0 auto;
  border-bottom: 1px solid ${props => props.theme.palette.lightestGray};
`;
StyledModalHeader.defaultProps = { theme };

const StyledModalTitle = styled(CalciteH3)`
  width: 100%;
  margin: 0;
  padding: ${props => unitCalc(props.theme.baseline, 2, '/')}
    ${props => props.theme.baseline};
`;
StyledModalTitle.defaultProps = { theme };

const StyledModalCloseButton = styled(Button).attrs(() => {
  return {
    icon: <XIcon size={24} />,
    iconButton: true,
    large: true
  };
})`
  padding: ${props => unitCalc(props.theme.baseline, 1.5, '/')};

  &:hover {
    background: ${props => props.theme.palette.offWhite};
  }
`;
StyledModalCloseButton.defaultProps = { theme };

const StyledModalContent = styled.div`
  position: relative;
  height: 100%;
  max-height: calc(100vh - 12rem);
  display: block;
  padding: ${props => props.theme.baseline};
  z-index: 1;
  overflow: auto;

  ${props =>
    props.noPadding &&
    css`
      padding: 0;
    `};
`;
StyledModalContent.defaultProps = { theme };

const StyledSecondaryActions = styled.div`
  display: flex;
  justify-content: flex-start;
  flex: 1 0 auto;
`;
StyledSecondaryActions.defaultProps = { theme };

const StyledModalActions = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  align-items: center;
  text-align: end;
  padding: ${props => unitCalc(props.theme.baseline, 1.5, '/')};
  border-top: 1px solid ${props => props.theme.palette.lightestGray};

  ${StyledButton} {
    margin: 0 ${props => unitCalc(props.theme.baseline, 4, '/')};

    &:first-child {
      margin-right: 0;

      html[dir='rtl'] & {
        margin-right: ${props => unitCalc(props.theme.baseline, 4, '/')};
        margin-left: 0;
      }
    }
  }
`;
StyledModalActions.defaultProps = { theme };

const overlayTransition = {
  entering: { opacity: 0 },
  entered: {
    opacity: 1
  },
  exiting: {
    opacity: 0
  }
};

const dialogTransition = {
  entering: { marginTop: '30px' },
  entered: {
    marginTop: 0
  },
  exiting: { marginTop: '30px' }
};

export {
  reactModalOverlayStyles,
  reactModalContentStyles,
  StyledModalHeader,
  StyledModalTitle,
  StyledModalCloseButton,
  StyledModalContent,
  StyledModalActions,
  StyledSecondaryActions,
  overlayTransition,
  dialogTransition
};
