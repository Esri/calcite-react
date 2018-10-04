import styled from 'styled-components';
import theme from '../theme/CalciteTheme';

const StyledModalOverlay = {
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

const StyledModalDialog = {
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
  padding: theme.baseline,
  textAlign: 'left',
  overflowY: 'auto',
  display: 'inline-block',
  verticalAlign: 'middle',
  borderRadius: theme.borderRadius,
  border: 'none',
  transition: `margin-top 300ms cubic-bezier(0.4, 0.0, 0.2, 1)`,
  marginTop: '30px'
};

const StyledModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const OverlayTransition = {
  entering: { opacity: 0 },
  entered: {
    opacity: 1
  },
  exiting: {
    opacity: 0
  }
};

const DialogTransition = {
  entering: { marginTop: '30px' },
  entered: {
    marginTop: 0
  },
  exiting: { marginTop: '30px' }
};

export {
  StyledModalOverlay,
  StyledModalDialog,
  StyledModalActions,
  OverlayTransition,
  DialogTransition
};
