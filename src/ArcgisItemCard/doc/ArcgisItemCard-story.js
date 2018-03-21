import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GuideExample from '../../../stories/GuideExample';
import doc from './ArcgisItemCard.md';

import ArcgisItemCard from '../';

import item from './item.json';

storiesOf('ArcGIS Item Card', module).add(
  'Basic',
  withInfo(doc)(() => (
    <div>
      <GuideExample>
        <ArcgisItemCard item={item} />
      </GuideExample>
      <GuideExample>
        <ArcgisItemCard item={item} style={{ maxWidth: '420px' }} />
      </GuideExample>
    </div>
  ))
);
