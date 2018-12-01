import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GuideExample from '../../../stories/GuideExample';
import doc from './SubNav.md';
import greenBlueBg from '../../../stories/images/subNav-greenBlue-bg.png';
import grayCityBg from '../../../stories/images/city_map.png';
import Button from '../../Button';
import SubNav, {
  SubNavTitle,
  SubNavList,
  SubNavLink,
  SubNavActions
} from '../';

storiesOf('SubNav', module)
  .add(
    'Basic',
    withInfo(doc)(() => (
      <div>
        <GuideExample>
          <SubNav>
            <SubNavTitle href="#">Fields</SubNavTitle>
            <SubNavList>
              <SubNavLink active href="#">
                Glens
              </SubNavLink>
              <SubNavLink href="#">Dales</SubNavLink>
              <SubNavLink href="#">Meadows</SubNavLink>
            </SubNavList>
          </SubNav>
        </GuideExample>
        <GuideExample label="blue">
          <SubNav blue>
            <SubNavTitle href="#">Fields</SubNavTitle>
            <SubNavList>
              <SubNavLink active href="#">
                Glens
              </SubNavLink>
              <SubNavLink href="#">Dales</SubNavLink>
              <SubNavLink href="#">Meadows</SubNavLink>
            </SubNavList>
          </SubNav>
        </GuideExample>
        <GuideExample label="with actions">
          <SubNav blue>
            <SubNavTitle href="#">Fields</SubNavTitle>
            <SubNavList>
              <SubNavLink active href="#">
                Glens
              </SubNavLink>
              <SubNavLink href="#">Dales</SubNavLink>
              <SubNavLink href="#">Meadows</SubNavLink>
            </SubNavList>
            <SubNavActions>
              <Button white small>
                New Field
              </Button>
            </SubNavActions>
          </SubNav>
        </GuideExample>
        <GuideExample label="no nav - with actions">
          <SubNav blue>
            <SubNavTitle href="#">Fields</SubNavTitle>
            <SubNavActions>
              <Button white small>
                New Field
              </Button>
            </SubNavActions>
          </SubNav>
        </GuideExample>
      </div>
    ))
  )
  .add(
    'Background Image',
    withInfo(doc)(() => (
      <div>
        <GuideExample label="backgroundImage">
          <SubNav
            backgroundImage={greenBlueBg}
            gradientFromColor="#70be49"
            gradientToColor="#1688aa"
            overlayGradient={false}
          >
            <SubNavTitle href="#" style={{ color: '#fff' }}>
              Fields
            </SubNavTitle>
            <SubNavList>
              <SubNavLink active href="#">
                Glens
              </SubNavLink>
              <SubNavLink href="#">Dales</SubNavLink>
              <SubNavLink href="#">Meadows</SubNavLink>
            </SubNavList>
          </SubNav>
        </GuideExample>

        <GuideExample label="overlayGradient">
          <SubNav
            backgroundImage={grayCityBg}
            gradientFromColor="#70BB51"
            gradientToColor="#2088A7"
          >
            <SubNavTitle href="#" style={{ color: '#fff' }}>
              Fields
            </SubNavTitle>
            <SubNavList>
              <SubNavLink active href="#">
                Glens
              </SubNavLink>
              <SubNavLink href="#">Dales</SubNavLink>
              <SubNavLink href="#">Meadows</SubNavLink>
            </SubNavList>
          </SubNav>
        </GuideExample>
      </div>
    ))
  );
