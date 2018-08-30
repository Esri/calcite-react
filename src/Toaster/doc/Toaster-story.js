import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GuideExample from '../../../stories/GuideExample';
import doc from './Toaster.md';
import Toaster, { ToastContainer } from '../';

import Button from '../../Button';

import ToasterExampleComponent from './ToasterExampleComponent';

storiesOf('Toaster', module)
  .add(
    'Basic',
    withInfo({
      text: doc,
      propTables: [ToastContainer, Toaster]
    })(() => {
      class ToasterStory extends Component {
        constructor(props) {
          super(props);
          this.state = {
            toasterOpen: false,
            toaster2Open: false,
            toaster3Open: false,
            toaster4Open: false
          };
        }

        showToaster = () => {
          this.setState({
            toasterOpen: true
          });
        };

        hideToaster = () => {
          this.setState({
            toasterOpen: false
          });
        };

        showToaster2 = () => {
          this.setState({
            toaster2Open: true
          });
        };

        hideToaster2 = () => {
          this.setState({
            toaster2Open: false
          });
        };

        showToaster3 = () => {
          this.setState({
            toaster3Open: true
          });
        };

        hideToaster3 = () => {
          this.setState({
            toaster3Open: false
          });
        };

        showToaster4 = () => {
          this.setState({
            toaster4Open: true
          });
        };

        hideToaster4 = () => {
          this.setState({
            toaster4Open: false
          });
        };

        render() {
          return (
            <Fragment>
              <ToastContainer />
              <div>
                <GuideExample>
                  <Button onClick={this.showToaster}>Show Toaster</Button>
                  <Toaster
                    open={this.state.toasterOpen}
                    onClose={this.hideToaster}
                  >
                    Something Happened!
                  </Toaster>
                </GuideExample>
                <GuideExample label={`autoClose={false}`}>
                  <Button onClick={this.showToaster2}>Show Toaster</Button>
                  <Toaster
                    open={this.state.toaster2Open}
                    onClose={this.hideToaster2}
                    autoClose={false}
                  >
                    This toaster won't close automatically!
                  </Toaster>
                </GuideExample>
                <GuideExample label={`autoClose={10000}`}>
                  <Button onClick={this.showToaster3}>Show Toaster</Button>
                  <Toaster
                    open={this.state.toaster3Open}
                    onClose={this.hideToaster3}
                    autoClose={10000}
                  >
                    This toaster will stay open for 10 seconds!
                  </Toaster>
                </GuideExample>
                <GuideExample label="showProgress">
                  <Button onClick={this.showToaster4}>Show Toaster</Button>
                  <Toaster
                    open={this.state.toaster4Open}
                    onClose={this.hideToaster4}
                    showProgress
                  >
                    This toaster has a progress bar!
                  </Toaster>
                </GuideExample>
              </div>
            </Fragment>
          );
        }
      }

      ToasterStory.propTypes = {
        isStory: PropTypes.bool
      };
      return <ToasterStory />;
    })
  )
  .add(
    'Type Variations',
    withInfo({
      text: doc,
      propTables: [ToastContainer, Toaster]
    })(() => {
      class ToasterStory extends Component {
        constructor(props) {
          super(props);
          this.state = {
            toasterOpen: false
          };
        }

        showToaster = () => {
          this.setState({
            toasterOpen: true
          });
        };

        hideToaster = () => {
          this.setState({
            toasterOpen: false
          });
        };

        render() {
          return (
            <Fragment>
              <ToastContainer />
              <div>
                <GuideExample label="Types">
                  <Button onClick={this.showToaster}>Show Toaster</Button>
                  <Toaster
                    open={this.state.toasterOpen}
                    onClose={this.hideToaster}
                    autoClose={false}
                  >
                    default
                  </Toaster>
                  <Toaster
                    type="success"
                    open={this.state.toasterOpen}
                    onClose={this.hideToaster}
                    autoClose={false}
                  >
                    success
                  </Toaster>
                  <Toaster
                    type="info"
                    open={this.state.toasterOpen}
                    onClose={this.hideToaster}
                    autoClose={false}
                  >
                    info
                  </Toaster>
                  <Toaster
                    type="warning"
                    open={this.state.toasterOpen}
                    onClose={this.hideToaster}
                    autoClose={false}
                  >
                    warning
                  </Toaster>
                  <Toaster
                    type="error"
                    open={this.state.toasterOpen}
                    onClose={this.hideToaster}
                    autoClose={false}
                  >
                    error
                  </Toaster>
                </GuideExample>
              </div>
            </Fragment>
          );
        }
      }

      ToasterStory.propTypes = {
        isStory: PropTypes.bool
      };
      return <ToasterStory />;
    })
  )
  .add(
    'Component in Content',
    withInfo({
      text: doc,
      propTables: [ToastContainer, Toaster]
    })(() => {
      class ToasterStory extends Component {
        constructor(props) {
          super(props);
          this.state = {
            toasterOpen: false
          };
        }

        showToaster = () => {
          this.setState({
            toasterOpen: true
          });
        };

        hideToaster = () => {
          this.setState({
            toasterOpen: false
          });
        };

        render() {
          return (
            <Fragment>
              <ToastContainer />
              <div>
                <GuideExample>
                  <Button onClick={this.showToaster}>Show Toaster</Button>
                  <Toaster
                    open={this.state.toasterOpen}
                    onClose={this.hideToaster}
                  >
                    <ToasterExampleComponent
                      onInfoClick={e => {
                        alert('info clicked');
                        e.stopPropagation();
                      }}
                    />
                  </Toaster>
                </GuideExample>
              </div>
            </Fragment>
          );
        }
      }

      ToasterStory.propTypes = {
        isStory: PropTypes.bool
      };
      return <ToasterStory />;
    })
  )
  .add(
    'Positions',
    withInfo({
      text: doc,
      propTables: [ToastContainer, Toaster]
    })(() => {
      class ToasterStory extends Component {
        constructor(props) {
          super(props);
          this.state = {
            toasterOpen: false
          };
        }

        showToaster = () => {
          this.setState({
            toasterOpen: true
          });
        };

        hideToaster = () => {
          this.setState({
            toasterOpen: false
          });
        };

        render() {
          return (
            <Fragment>
              <ToastContainer />
              <div>
                <GuideExample>
                  <Button onClick={this.showToaster}>Show Toaster</Button>
                  <Toaster
                    open={this.state.toasterOpen}
                    onClose={this.hideToaster}
                    position="top-left"
                  >
                    This toaster is positioned at "top-left"!
                  </Toaster>
                  <Toaster
                    open={this.state.toasterOpen}
                    onClose={this.hideToaster}
                    position="top-center"
                  >
                    This toaster is positioned at "top-center"!
                  </Toaster>
                  <Toaster
                    open={this.state.toasterOpen}
                    onClose={this.hideToaster}
                    position="top-right"
                  >
                    This toaster is positioned at "top-right"!
                  </Toaster>
                  <Toaster
                    open={this.state.toasterOpen}
                    onClose={this.hideToaster}
                    position="bottom-right"
                  >
                    This toaster is positioned at "bottom-right"!
                  </Toaster>
                  <Toaster
                    open={this.state.toasterOpen}
                    onClose={this.hideToaster}
                    position="bottom-center"
                  >
                    This toaster is positioned at "bottom-center"!
                  </Toaster>
                  <Toaster
                    open={this.state.toasterOpen}
                    onClose={this.hideToaster}
                    position="bottom-left"
                  >
                    This toaster is positioned at "bottom-left"!
                  </Toaster>
                </GuideExample>
              </div>
            </Fragment>
          );
        }
      }

      ToasterStory.propTypes = {
        isStory: PropTypes.bool
      };
      return <ToasterStory />;
    })
  );
