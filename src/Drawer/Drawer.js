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
  /** Child elements to be rendered inside the Drawer. */
  children: PropTypes.node,
  /** Toggle visibility of the Drawer. */
  active: PropTypes.bool,
  /** Display the Drawer on the right side of the screen. */
  right: PropTypes.bool,
  /** Width (in px) of the Drawer nav. */
  drawerWidth: PropTypes.number,
  /** Function called when the user clicks the overlay area of a Drawer. */
  onRequestClose: PropTypes.func,
  /** Styles passed to the DrawerNav subcomponent. */
  drawerNavStyle: PropTypes.node
};

Drawer.defaultProps = {
  drawerWidth: 280,
  onRequestClose: () => {}
};

Drawer.displayName = 'Drawer';

export default Drawer;
