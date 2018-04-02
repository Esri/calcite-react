import React, { Component } from 'react';
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
    withInfo(doc)(() => {
      class ControlledSliderExample extends Component {
        constructor(props) {
          super(props);
          this.state = {
            value: 20
          };
        }

        updateSliderValue = event => {
          this.setState({ value: event.target.value });
        };

        render() {
          return (
            <GuideExample>
              <Form horizontal>
                <FormControl>
                  <TextField
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

      return <ControlledSliderExample />;
    })
  );
