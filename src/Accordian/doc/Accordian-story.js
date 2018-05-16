import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import GuideExample from '../../../stories/GuideExample';
import doc from './Accordian.md';
import Accordian, {
  AccordianSection,
  AccordianTitle,
  AccordianContent
} from '../';

storiesOf('Accordian', module).add(
  'Basic',
  withInfo(doc)(() => {
    class ControlledAccordian extends Component {
      constructor(props) {
        super(props);
        this.state = {
          activeSection: 0
        };
      }

      onAccordianChange = index => {
        this.setState({ activeSection: index });
      };

      render() {
        return (
          <GuideExample>
            <Accordian
              onAccordianChange={this.onAccordianChange}
              activeSection={this.state.activeSection}
            >
              <AccordianSection>
                <AccordianTitle>
                  This is the best accordian. number 1
                </AccordianTitle>
                <AccordianContent>
                  <span>Hello</span>
                </AccordianContent>
              </AccordianSection>
              <AccordianSection>
                <AccordianTitle>
                  This is the best accordian. number 1
                </AccordianTitle>
                <AccordianContent>
                  <span>Hello 2</span>
                </AccordianContent>
              </AccordianSection>
            </Accordian>
          </GuideExample>
        );
      }
    }
    return <ControlledAccordian />;
  })
);
