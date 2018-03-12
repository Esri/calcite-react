import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GuideExample from '../../../stories/GuideExample';
import doc from './Avatar.md';
import Avatar from '../';

import CodyProfilePic from '../../../stories/images/codyProfile.jpeg';

import DownloadIcon from 'mdi-react/DownloadIcon';
import ContentSaveIcon from 'mdi-react/ContentSaveIcon';
import AccountIcon from 'mdi-react/AccountIcon';
import MagnifyIcon from 'mdi-react/MagnifyIcon';

import EsriColors from '../../theme/EsriColors';

const avatarBaseStyle = {
  margin: '10px'
};

storiesOf('Avatar', module).add(
  'Basic',
  withInfo(doc)(() => (
    <div>
      <GuideExample label="Text" style={{ display: 'flex' }}>
        <Avatar style={{ ...avatarBaseStyle }}>A</Avatar>
        <Avatar
          style={{
            ...avatarBaseStyle,
            backgroundColor: EsriColors.Calcite_Vibrant_Red_200
          }}
        >
          CL
        </Avatar>
        <Avatar
          style={{
            ...avatarBaseStyle,
            backgroundColor: EsriColors.Calcite_Gray_250,
            color: '#4c4c4c'
          }}
        >
          JP
        </Avatar>
      </GuideExample>
      <GuideExample label="Image" style={{ display: 'flex' }}>
        <Avatar src={CodyProfilePic} style={{ ...avatarBaseStyle }} />
        <Avatar
          src="https://avatars2.githubusercontent.com/u/3399064?s=400&v=4"
          style={{ ...avatarBaseStyle, width: 60, height: 60 }}
        />
      </GuideExample>
      <GuideExample label="SVG Icon" style={{ display: 'flex' }}>
        <Avatar style={{ ...avatarBaseStyle }}>
          <DownloadIcon />
        </Avatar>
        <Avatar
          style={{
            ...avatarBaseStyle,
            backgroundColor: EsriColors.Calcite_Green_a100
          }}
        >
          <ContentSaveIcon />
        </Avatar>
        <Avatar
          style={{
            ...avatarBaseStyle,
            backgroundColor: EsriColors.Calcite_Red_150,
            color: EsriColors.Calcite_Red_a250
          }}
        >
          <AccountIcon />
        </Avatar>
        <Avatar
          style={{
            ...avatarBaseStyle,
            backgroundColor: EsriColors.Calcite_Purple_a200
          }}
        >
          <MagnifyIcon style={{ fill: EsriColors.Calcite_Purple_150 }} />
        </Avatar>
      </GuideExample>
    </div>
  ))
);
