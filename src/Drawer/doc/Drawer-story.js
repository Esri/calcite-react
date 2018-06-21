import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GuideExample from '../../../stories/GuideExample';
import doc from './Drawer.md';
import Drawer from '../';

import SideNav, { SideNavTitle, SideNavLink } from '../../SideNav';
import Button from '../../Button';

storiesOf('Drawer', module).add(
  'Basic',
  withInfo({
    text: doc,
    propTables: [Drawer]
  })(() => {
    class DrawerStory extends Component {
      constructor(props) {
        super(props);
        this.state = {
          drawerDirection: 'left',
          active: false
        };
      }

      showDrawerClicked = drawerDirection => {
        this.setState({
          drawerDirection,
          active: true
        });
      };

      hideDrawer = () => {
        this.setState({
          active: false
        });
      };

      render() {
        return (
          <GuideExample>
            <Button onClick={() => this.showDrawerClicked('left')}>
              Open Left Drawer
            </Button>
            <Button
              onClick={() => this.showDrawerClicked('right')}
              style={{ float: 'right' }}
            >
              Open Right Drawer
            </Button>
            <Drawer
              active={this.state.active}
              right={this.state.drawerDirection === 'right'}
              onRequestClose={this.hideDrawer}
            >
              <SideNav>
                <SideNavTitle>Sidenav Group</SideNavTitle>
                <nav>
                  <SideNavLink>Agricultural</SideNavLink>
                  <SideNavLink>Transition</SideNavLink>
                  <SideNavLink>Perpetual</SideNavLink>
                  <SideNavLink>Cultural</SideNavLink>
                </nav>
              </SideNav>
            </Drawer>
          </GuideExample>
        );
      }
    }

    DrawerStory.propTypes = {
      isStory: PropTypes.bool
    };
    return <DrawerStory />;
  })
);
