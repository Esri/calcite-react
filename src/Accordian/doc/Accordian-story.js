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
    class AccordianExample extends Component {
      constructor(props) {
        super(props);
        this.state = {
          activeSectionIndexes: [0]
        };
      }

      onAccordianChange = (evt, index) => {
        this.state.activeSectionIndexes.includes(index)
          ? this.setState({
              activeSectionIndexes: this.state.activeSectionIndexes.filter(
                item => index !== item
              )
            })
          : this.setState({
              activeSectionIndexes: [...this.state.activeSectionIndexes, index]
            });
      };

      render() {
        return (
          <GuideExample>
            <Accordian
              onAccordianChange={this.onAccordianChange}
              activeSectionIndexes={this.state.activeSectionIndexes}
            >
              <AccordianSection>
                <AccordianTitle>Accordian Title 1</AccordianTitle>
                <AccordianContent>
                  <span>Accordian Content 1</span>
                </AccordianContent>
              </AccordianSection>
              <AccordianSection>
                <AccordianTitle>Accordian Title 2</AccordianTitle>
                <AccordianContent>
                  <span>Accordian Content 2</span>
                </AccordianContent>
              </AccordianSection>
              <AccordianSection>
                <AccordianTitle>Accordian Title 3</AccordianTitle>
                <AccordianContent>
                  <span>Accordian Content 3</span>
                </AccordianContent>
              </AccordianSection>
            </Accordian>
          </GuideExample>
        );
      }
    }
    return <AccordianExample />;
  })
);
