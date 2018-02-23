import React from 'react';
import { configure, addDecorator } from '@storybook/react';
// import { checkA11y } from '@storybook/addon-a11y';
import Container from '../stories/Container';

addDecorator(story => <Container story={story} />);
// addDecorator(checkA11y);

function loadStories() {
  const req = require.context('../src/components', true, /\-story\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
