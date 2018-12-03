import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import { StyledDrawer, StyledDrawerNav } from './Drawer-styled';

const Drawer = ({
  children,
  active,
  right,
  drawerWidth,
  onRequestClose,
  drawerNavStyle,
  ...other
}) => {
  function gutterClicked(e) {
    if (e.target === e.currentTarget) {
      onRequestClose(e);
    }
  }

  const drawer = (
    <StyledDrawer active={active} onClick={gutterClicked} {...other}>
      <StyledDrawerNav
        active={active}
        right={right}
        drawerWidth={drawerWidth}
        style={drawerNavStyle}
      >
        {children}
      </StyledDrawerNav>
    </StyledDrawer>
  );

  return ReactDOM.createPortal(drawer, document.body);
};

Drawer.propTypes = {
  /** Child elements to be rendered inside the Drawer */
  children: PropTypes.node,
  /** Toggle visibility of the drawer */
  active: PropTypes.bool,
  /** Display the drawer on the right side of the screen */
  right: PropTypes.bool,
  /** Width (in px) of the drawer nav */
  drawerWidth: PropTypes.number,
  /** Function called when the user clicks the overlay area of a drawer */
  onRequestClose: PropTypes.func,
  /** Styles passed to the DrawerNav sub-component */
  drawerNavStyle: PropTypes.node
};

Drawer.defaultProps = {
  drawerWidth: 280,
  onRequestClose: () => {}
};

Drawer.displayName = 'Drawer';

export default Drawer;
