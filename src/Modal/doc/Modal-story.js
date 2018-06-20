import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GuideExample from '../../../stories/GuideExample';
import doc from './Modal.md';
import Modal, { ModalActions } from '../';

import Button from '../../Button';
import { CalciteH1, CalciteP } from '../../Elements';

storiesOf('Modal', module)
  .add(
    'Basic',
    withInfo(doc)(() => (
      <GuideExample
        id="modalGuideExample"
        style={{ position: 'relative', height: '400px' }}
      >
        <Modal
          open={true}
          parentSelector={() => document.getElementById('modalGuideExample')}
          overlayStyle={{ position: 'absolute' }}
        >
          <CalciteH1>Modal!</CalciteH1>
          <CalciteP>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </CalciteP>
          <ModalActions>
            <Button style={{ marginRight: '10px' }}>Okay</Button>
            <Button clear>Cancel</Button>
          </ModalActions>
        </Modal>
      </GuideExample>
    ))
  )
  .add(
    'Open Modal Button',
    withInfo({
      text: doc,
      propTables: [Modal, ModalActions]
    })(() => {
      class ModalStory extends Component {
        constructor(props) {
          super(props);
          this.state = {
            open: false
          };
        }

        openModal = () => {
          this.setState({
            open: true
          });
        };

        closeModal = () => {
          this.setState({
            open: false
          });
        };

        render() {
          return (
            <GuideExample>
              <Button onClick={this.openModal}>Open Modal</Button>
              <Modal open={this.state.open} onRequestClose={this.closeModal}>
                <CalciteH1>Modal!</CalciteH1>
                <CalciteP>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </CalciteP>
                <ModalActions>
                  <Button
                    onClick={this.closeModal}
                    style={{ marginRight: '10px' }}
                  >
                    Okay
                  </Button>
                  <Button onClick={this.closeModal} clear>
                    Cancel
                  </Button>
                </ModalActions>
              </Modal>
            </GuideExample>
          );
        }
      }

      ModalStory.propTypes = {
        isStory: PropTypes.bool
      };
      return <ModalStory />;
    })
  );
