import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GuideExample from '../../../stories/GuideExample';
import doc from './Accordion.md';
import Accordion, {
  AccordionSection,
  AccordionTitle,
  AccordionContent
} from '../';

import { CalciteP } from '../../Elements';

storiesOf('Accordion', module)
  .add(
    'Basic',
    withInfo(doc)(() => (
      <GuideExample>
        <Accordion activeSectionIndexes={[0]}>
          <AccordionSection>
            <AccordionTitle>Accordion Title 1</AccordionTitle>
            <AccordionContent>
              <CalciteP>Accordion Content 1</CalciteP>
            </AccordionContent>
          </AccordionSection>
          <AccordionSection>
            <AccordionTitle>Accordion Title 2</AccordionTitle>
            <AccordionContent>
              <CalciteP>Accordion Content 2</CalciteP>
            </AccordionContent>
          </AccordionSection>
          <AccordionSection>
            <AccordionTitle>Accordion Title 3</AccordionTitle>
            <AccordionContent>
              <CalciteP>Accordion Content 3</CalciteP>
            </AccordionContent>
          </AccordionSection>
        </Accordion>
      </GuideExample>
    ))
  )
  .add(
    'Controlled Accordion',
    withInfo(doc)(() => {
      class AccordionExample extends Component {
        constructor(props) {
          super(props);
          this.state = {
            activeSectionIndexes: [0]
          };
        }

        onAccordionChange = (evt, index) => {
          this.state.activeSectionIndexes.includes(index)
            ? this.setState({
                activeSectionIndexes: this.state.activeSectionIndexes.filter(
                  item => index !== item
                )
              })
            : this.setState({
                activeSectionIndexes: [
                  ...this.state.activeSectionIndexes,
                  index
                ]
              });
        };

        render() {
          return (
            <GuideExample>
              <Accordion
                onAccordionChange={this.onAccordionChange}
                activeSectionIndexes={this.state.activeSectionIndexes}
              >
                <AccordionSection>
                  <AccordionTitle>Accordion Title 1</AccordionTitle>
                  <AccordionContent>
                    <CalciteP>Accordion Content 1</CalciteP>
                  </AccordionContent>
                </AccordionSection>
                <AccordionSection>
                  <AccordionTitle>Accordion Title 2</AccordionTitle>
                  <AccordionContent>
                    <CalciteP>Accordion Content 2</CalciteP>
                  </AccordionContent>
                </AccordionSection>
                <AccordionSection>
                  <AccordionTitle>Accordion Title 3</AccordionTitle>
                  <AccordionContent>
                    <CalciteP>Accordion Content 3</CalciteP>
                  </AccordionContent>
                </AccordionSection>
              </Accordion>
            </GuideExample>
          );
        }
      }
      return <AccordionExample />;
    })
  );
