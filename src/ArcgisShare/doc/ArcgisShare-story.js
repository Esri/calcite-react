import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GuideExample from '../../../stories/GuideExample';
import doc from './ArcgisShare.md';

import ArcgisShare from '../';

import user from './user.json';
import portal from './portal.json';
import item from './item.json';

storiesOf('ArcGIS Share', module)
  .add(
    'Basic',
    withInfo(doc)(() => (
      <div>
        <GuideExample>
          <ArcgisShare
            user={user}
            portal={portal}
            onChange={e => console.log(e)}
          />
        </GuideExample>
      </div>
    ))
  )
  .add(
    'Populated from Item',
    withInfo(doc)(() => (
      <div>
        <GuideExample>
          <ArcgisShare
            user={user}
            portal={portal}
            sharing={item.sharing}
            onChange={e => console.log(e)}
          />
        </GuideExample>
      </div>
    ))
  )
  .add(
    'Promote Favorites',
    withInfo(doc)(() => (
      <div>
        <GuideExample>
          <ArcgisShare
            user={user}
            portal={portal}
            promoteFavorites
            onChange={e => console.log(e)}
          />
        </GuideExample>
      </div>
    ))
  );
