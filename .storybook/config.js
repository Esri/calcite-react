import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';
// import { checkA11y } from '@storybook/addon-a11y';

import Container from '../stories/Container';
import GuideExample from '../stories/GuideExample';
import PropTable from '../stories/info-addon/PropTable';

addDecorator(story => <Container story={story} />);
// addDecorator(checkA11y);

setDefaults({
  header: true,
  inline: true,
  propTablesExclude: [GuideExample],
  TableComponent: PropTable
});

function loadStories() {
  const req = require.context('../src', true, /\-story\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
