import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import GuideExample from '../../../stories/GuideExample';
import doc from './Button.md';
import Button from '../';

import DownloadIcon from 'mdi-react/DownloadIcon';
import ContentSaveIcon from 'mdi-react/ContentSaveIcon';

storiesOf('Button', module)
  .add(
    'Basic',
    withInfo(doc)(() => (
      <div>
        <GuideExample>
          <Button onClick={action('clicked')}>default</Button>
        </GuideExample>

        <GuideExample label="transparent">
          <Button transparent onClick={action('clicked')}>
            transparent
          </Button>
        </GuideExample>

        <GuideExample label="clear">
          <Button clear onClick={action('clicked')}>
            clear
          </Button>
        </GuideExample>

        <GuideExample label="clearGray">
          <Button clearGray onClick={action('clicked')}>
            clear-gray
          </Button>
        </GuideExample>

        <GuideExample label="clearWhite">
          <Button clearWhite onClick={action('clicked')}>
            clear-white
          </Button>
        </GuideExample>

        <GuideExample label="white">
          <Button white onClick={action('clicked')}>
            white
          </Button>
        </GuideExample>

        <GuideExample label="halo">
          <Button halo onClick={action('clicked')}>
            halo
          </Button>
        </GuideExample>

        <GuideExample label="small">
          <Button small onClick={action('clicked')}>
            small
          </Button>
        </GuideExample>

        <GuideExample label="large">
          <Button large onClick={action('clicked')}>
            large
          </Button>
        </GuideExample>

        <GuideExample label="extraLarge">
          <Button extraLarge onClick={action('clicked')}>
            extraLarge
          </Button>
        </GuideExample>

        <GuideExample label="fullWidth">
          <Button fullWidth onClick={action('clicked')}>
            fullWidth
          </Button>
        </GuideExample>

        <GuideExample label="half">
          <Button half onClick={action('clicked')}>
            half
          </Button>
        </GuideExample>
        <GuideExample label="red">
          <Button red onClick={action('clicked')}>
            red
          </Button>
        </GuideExample>
        <GuideExample label="green">
          <Button green onClick={action('clicked')}>
            green
          </Button>
        </GuideExample>

        <GuideExample label="disabled">
          <Button disabled onClick={action('clicked')}>
            disabled
          </Button>
        </GuideExample>

        <GuideExample label="grouped">
          <nav>
            <Button grouped onClick={action('clicked')}>
              One
            </Button>
            <Button grouped onClick={action('clicked')}>
              Two
            </Button>
            <Button grouped onClick={action('clicked')}>
              Three
            </Button>
          </nav>
        </GuideExample>

        <GuideExample label="href=&quot;&quot;">
          <Button
            href="https://esri.com"
            target="_blank"
            onClick={action('clicked')}
          >
            link button
          </Button>
        </GuideExample>
      </div>
    ))
  )
  .add(
    'With Icon',
    withInfo(doc)(() => (
      <div>
        <GuideExample>
          <Button onClick={action('clicked')} icon={<DownloadIcon />}>
            Download
          </Button>
        </GuideExample>
        <GuideExample>
          <Button
            onClick={action('clicked')}
            icon={<ContentSaveIcon />}
            iconPosition="before"
          >
            Save
          </Button>
        </GuideExample>
      </div>
    ))
  );
