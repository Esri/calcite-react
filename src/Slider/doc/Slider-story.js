import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GuideExample from '../../../stories/GuideExample';
import doc from './Slider.md';
import Slider from '../';

import Form, { FormControl } from '../../Form';
import TextField from '../../TextField';

storiesOf('Slider', module)
  .add(
    'Basic',
    withInfo(doc)(() => (
      <div>
        <GuideExample>
          <Slider />
        </GuideExample>
        <GuideExample>
          <Slider defaultValue={20} />
        </GuideExample>
      </div>
    ))
  )
  .add(
    'Controlled Slider',
    withInfo({
      text: doc,
      propTables: [Slider]
    })(() => {
      class SliderStory extends Component {
        constructor(props) {
          super(props);
          this.state = {
            value: 20
          };
        }

        updateSliderValue = event => {
          this.setState({ value: parseInt(event.target.value, 10) });
        };

        render() {
          return (
            <GuideExample>
              <Form horizontal>
                <FormControl>
                  <TextField
                    type="number"
                    value={this.state.value}
                    onChange={this.updateSliderValue}
                  />
                </FormControl>
                <FormControl style={{ flex: '1 0 100px' }}>
                  <Slider
                    value={this.state.value}
                    onChange={this.updateSliderValue}
                  />
                </FormControl>
              </Form>
            </GuideExample>
          );
        }
      }

      SliderStory.propTypes = {
        isStory: PropTypes.bool
      };
      return <SliderStory />;
    })
  );
