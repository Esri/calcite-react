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
  ...other
}) => {
  function gutterClicked(e) {
    console.log(e);
    if (e.target === e.currentTarget) {
      onRequestClose(e);
    }
  }

  const drawer = (
    <StyledDrawer active={active} onClick={gutterClicked} {...other}>
      <StyledDrawerNav active={active} right={right} drawerWidth={drawerWidth}>
        {children}
      </StyledDrawerNav>
    </StyledDrawer>
  );

  return ReactDOM.createPortal(
    drawer,
    document.getElementsByTagName('body')[0]
  );
};

Drawer.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** Description TBD */
  active: PropTypes.bool,
  /** Description TBD */
  right: PropTypes.bool,
  /** Description TBD */
  drawerWidth: PropTypes.number,
  /** Description TBD */
  onRequestClose: PropTypes.func
};

Drawer.defaultProps = {
  drawerWidth: 280
};

export default Drawer;
