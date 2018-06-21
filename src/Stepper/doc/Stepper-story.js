import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GuideExample from '../../../stories/GuideExample';
import doc from './Stepper.md';
import Stepper, { Step, StepTitle, StepDescription } from '../';

import Button from '../../Button';

import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import LockOutlineIcon from 'mdi-react/LockOutlineIcon';
import TuneIcon from 'mdi-react/TuneIcon';
import EmoticonIcon from 'mdi-react/EmoticonIcon';

storiesOf('Stepper', module)
  .add(
    'Basic',
    withInfo(doc)(() => (
      <div>
        <GuideExample>
          <Stepper currentStep={2}>
            <Step>
              <StepTitle>Complete Step</StepTitle>
              <StepDescription>
                This is the first step in a series
              </StepDescription>
            </Step>
            <Step>
              <StepTitle>Current Step</StepTitle>
              <StepDescription>
                This is the second step in a series
              </StepDescription>
            </Step>
            <Step>
              <StepTitle>Pending Step</StepTitle>
              <StepDescription>
                This is the third step in a series
              </StepDescription>
            </Step>
          </Stepper>
        </GuideExample>
        <GuideExample label="error">
          <Stepper currentStep={2}>
            <Step>
              <StepTitle>Complete Step</StepTitle>
              <StepDescription>
                This is the first step in a series
              </StepDescription>
            </Step>
            <Step error>
              <StepTitle>Error Step</StepTitle>
              <StepDescription>
                This is the second step in a series
              </StepDescription>
            </Step>
            <Step>
              <StepTitle>Pending Step</StepTitle>
              <StepDescription>
                This is the third step in a series
              </StepDescription>
            </Step>
          </Stepper>
        </GuideExample>
        <GuideExample label="small">
          <Stepper currentStep={3} small>
            <Step>
              <StepTitle>Complete Step</StepTitle>
            </Step>
            <Step error>
              <StepTitle>Error Step</StepTitle>
            </Step>
            <Step>
              <StepTitle>Current Step</StepTitle>
            </Step>
          </Stepper>
        </GuideExample>
        <GuideExample label="selectable">
          <Stepper currentStep={1}>
            <Step>
              <StepTitle>Complete Step</StepTitle>
              <StepDescription>
                This is the first step in a series
              </StepDescription>
            </Step>
            <Step selectable>
              <StepTitle>Current Step</StepTitle>
              <StepDescription>
                This is the second step in a series
              </StepDescription>
            </Step>
            <Step>
              <StepTitle>Pending Step</StepTitle>
              <StepDescription>
                This is the third step in a series
              </StepDescription>
            </Step>
          </Stepper>
        </GuideExample>
      </div>
    ))
  )
  .add(
    'Custom Icons',
    withInfo(doc)(() => (
      <div>
        <GuideExample>
          <Stepper currentStep={3}>
            <Step icon={<AccountOutlineIcon />}>
              <StepTitle>Complete Step</StepTitle>
            </Step>
            <Step error icon={<LockOutlineIcon />}>
              <StepTitle>Error Step</StepTitle>
            </Step>
            <Step icon={<TuneIcon />}>
              <StepTitle>Current Step</StepTitle>
            </Step>
            <Step icon={<EmoticonIcon />}>
              <StepTitle>Pending Step</StepTitle>
            </Step>
          </Stepper>
        </GuideExample>
        <GuideExample label="small">
          <Stepper small currentStep={3}>
            <Step icon={<AccountOutlineIcon />}>
              <StepTitle>Complete Step</StepTitle>
            </Step>
            <Step error icon={<LockOutlineIcon />}>
              <StepTitle>Error Step</StepTitle>
            </Step>
            <Step icon={<TuneIcon />}>
              <StepTitle>Current Step</StepTitle>
            </Step>
            <Step icon={<EmoticonIcon />}>
              <StepTitle>Pending Step</StepTitle>
            </Step>
          </Stepper>
        </GuideExample>
      </div>
    ))
  )
  .add(
    'Vertical',
    withInfo(doc)(() => (
      <div>
        <GuideExample>
          <Stepper vertical currentStep={2}>
            <Step>
              <StepTitle>Complete Step</StepTitle>
              <StepDescription>
                This is the first step in a series
              </StepDescription>
            </Step>
            <Step error>
              <StepTitle>Error Step</StepTitle>
              <StepDescription>
                This is the second step in a series
              </StepDescription>
            </Step>
            <Step>
              <StepTitle>Pending Step</StepTitle>
              <StepDescription>
                This is the third step in a series
              </StepDescription>
            </Step>
          </Stepper>
        </GuideExample>
        <GuideExample label="small">
          <Stepper vertical small currentStep={2}>
            <Step>
              <StepTitle>Complete Step</StepTitle>
            </Step>
            <Step error>
              <StepTitle>Error Step</StepTitle>
            </Step>
            <Step>
              <StepTitle>Pending Step</StepTitle>
            </Step>
          </Stepper>
        </GuideExample>
      </div>
    ))
  )
  .add(
    'Controlled Stepper',
    withInfo({
      text: doc,
      propTables: [Stepper, Step, StepTitle, StepDescription]
    })(() => {
      class StepperStory extends Component {
        constructor(props) {
          super(props);
          this.state = {
            currentStep: 1
          };
        }

        nextStep = () => {
          this.setState({
            currentStep: this.state.currentStep + 1
          });
        };

        prevStep = () => {
          this.setState({
            currentStep: this.state.currentStep - 1
          });
        };

        render() {
          return (
            <GuideExample>
              <Stepper currentStep={this.state.currentStep}>
                <Step>
                  <StepTitle>Complete Step</StepTitle>
                  <StepDescription>
                    This is the first step in a series
                  </StepDescription>
                </Step>
                <Step>
                  <StepTitle>Current Step</StepTitle>
                  <StepDescription>
                    This is the second step in a series
                  </StepDescription>
                </Step>
                <Step>
                  <StepTitle>Pending Step</StepTitle>
                  <StepDescription>
                    This is the third step in a series
                  </StepDescription>
                </Step>
              </Stepper>
              <div style={{ marginTop: '1.55rem' }}>
                <Button
                  clear
                  onClick={this.prevStep}
                  style={{ marginRight: '.5rem' }}
                >
                  Previous
                </Button>
                <Button clear onClick={this.nextStep}>
                  Next
                </Button>
              </div>
            </GuideExample>
          );
        }
      }

      StepperStory.propTypes = {
        isStory: PropTypes.bool
      };
      return <StepperStory />;
    })
  );
