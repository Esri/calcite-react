import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GuideExample from '../../../stories/GuideExample';
import doc from './Avatar.md';
import Avatar from '../';

import CodyProfilePic from '../../../stories/images/codyProfile.jpeg';

import DownloadToIcon from 'calcite-ui-icons-react/DownloadToIcon';
import SaveIcon from 'calcite-ui-icons-react/SaveIcon';
import UserIcon from 'calcite-ui-icons-react/UserIcon';
import SearchIcon from 'calcite-ui-icons-react/SearchIcon';

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
          <DownloadToIcon />
        </Avatar>
        <Avatar
          style={{
            ...avatarBaseStyle,
            backgroundColor: EsriColors.Calcite_Green_a100
          }}
        >
          <SaveIcon size={16} />
        </Avatar>
        <Avatar
          style={{
            ...avatarBaseStyle,
            backgroundColor: EsriColors.Calcite_Red_150,
            color: EsriColors.Calcite_Red_a250
          }}
        >
          <UserIcon />
        </Avatar>
        <Avatar
          style={{
            ...avatarBaseStyle,
            backgroundColor: EsriColors.Calcite_Purple_a200
          }}
        >
          <SearchIcon style={{ fill: EsriColors.Calcite_Purple_150 }} />
        </Avatar>
      </GuideExample>
    </div>
  ))
);
