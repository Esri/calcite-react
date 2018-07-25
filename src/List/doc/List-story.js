import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GuideExample from '../../../stories/GuideExample';
import doc from './List.md';
import List, {
  ListHeader,
  ListItem,
  ListItemTitle,
  ListItemSubtitle
} from '../';

import SendIcon from 'mdi-react/SendIcon';
import EmailOpenIcon from 'mdi-react/EmailOpenIcon';
import InboxIcon from 'mdi-react/InboxIcon';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';
import ChevronUpIcon from 'mdi-react/ChevronUpIcon';
import StarIcon from 'mdi-react/StarIcon';
import EmailIcon from 'mdi-react/EmailIcon';
import CommentAlertIcon from 'mdi-react/CommentAlertIcon';

import AmazonIcon from 'mdi-react/AmazonIcon';
import AzureIcon from 'mdi-react/AzureIcon';
import CiscoWebexIcon from 'mdi-react/CiscoWebexIcon';
import ViewGridIcon from 'mdi-react/ViewGridIcon';
import LanConnectIcon from 'mdi-react/LanConnectIcon';
import VectorPolylineIcon from 'mdi-react/VectorPolylineIcon';

storiesOf('List', module)
  .add(
    'Basic',
    withInfo(doc)(() => (
      <div>
        <GuideExample>
          <List style={{ maxWidth: '280px' }}>
            <ListHeader>Nested List Items</ListHeader>
            <ListItem leftNode={<SendIcon />}>
              <ListItemTitle>Sent mail</ListItemTitle>
            </ListItem>
            <ListItem leftNode={<EmailOpenIcon />}>
              <ListItemTitle>Drafts</ListItemTitle>
              <ListItemSubtitle>You have no drafts</ListItemSubtitle>
            </ListItem>
            <ListItem
              leftNode={<InboxIcon />}
              rightNode={
                <ChevronUpIcon style={{ width: '24px', height: '24px' }} />
              }
            >
              <ListItemTitle>Inbox</ListItemTitle>
              <ListItemSubtitle>3 Items</ListItemSubtitle>
            </ListItem>
            <List nested>
              <ListItem leftNode={<EmailIcon />} rightNode={1}>
                <ListItemTitle>Unread</ListItemTitle>
              </ListItem>
              <ListItem leftNode={<StarIcon />} rightNode={9}>
                <ListItemTitle>Starred</ListItemTitle>
              </ListItem>
              <ListItem leftNode={<CommentAlertIcon />} rightNode="0">
                <ListItemTitle>Urgent</ListItemTitle>
              </ListItem>
            </List>
          </List>
        </GuideExample>
      </div>
    ))
  )
  .add(
    'Controlled',
    withInfo({
      text: doc,
      propTables: [List, ListHeader, ListItem, ListItemTitle, ListItemSubtitle]
    })(() => {
      class ListStory extends Component {
        constructor(props) {
          super(props);
          this.state = {
            open: false
          };
        }

        toggleSublist = () => {
          this.setState({
            open: !this.state.open
          });
        };

        render() {
          let arrowIcon;
          if (this.state.open) {
            arrowIcon = (
              <ChevronUpIcon style={{ width: '24px', height: '24px' }} />
            );
          } else {
            arrowIcon = (
              <ChevronDownIcon style={{ width: '24px', height: '24px' }} />
            );
          }

          return (
            <GuideExample>
              <List style={{ maxWidth: '280px' }}>
                <ListHeader>Nested List Items</ListHeader>
                <ListItem leftNode={<SendIcon />}>
                  <ListItemTitle>Sent mail</ListItemTitle>
                </ListItem>
                <ListItem leftNode={<EmailOpenIcon />}>
                  <ListItemTitle>Drafts</ListItemTitle>
                  <ListItemSubtitle>You have no drafts</ListItemSubtitle>
                </ListItem>
                <ListItem
                  leftNode={<InboxIcon />}
                  rightNode={arrowIcon}
                  onClick={this.toggleSublist}
                >
                  <ListItemTitle>Inbox</ListItemTitle>
                  <ListItemSubtitle>3 Items</ListItemSubtitle>
                </ListItem>
                <List nested open={this.state.open}>
                  <ListItem leftNode={<EmailIcon />} rightNode={1}>
                    <ListItemTitle>Unread</ListItemTitle>
                  </ListItem>
                  <ListItem leftNode={<StarIcon />} rightNode={9}>
                    <ListItemTitle>Starred</ListItemTitle>
                  </ListItem>
                  <ListItem leftNode={<CommentAlertIcon />} rightNode="0">
                    <ListItemTitle>Urgent</ListItemTitle>
                  </ListItem>
                </List>
              </List>
            </GuideExample>
          );
        }
      }

      ListStory.propTypes = {
        isStory: PropTypes.bool
      };
      return <ListStory />;
    })
  )
  .add(
    'Lots Of Content',
    withInfo(doc)(() => (
      <div>
        <GuideExample>
          <List>
            <ListItem leftNode={<AmazonIcon />}>
              <ListItemTitle>Amazon</ListItemTitle>
              <ListItemSubtitle>
                S3, IoT, Glacier, Lorem ipsum dolor sit amet, consectetur
                adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut.
              </ListItemSubtitle>
            </ListItem>
            <ListItem leftNode={<AzureIcon />}>
              <ListItemTitle>Azure</ListItemTitle>
              <ListItemSubtitle>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea.
              </ListItemSubtitle>
            </ListItem>
            <List nested>
              <ListItem leftNode={<ViewGridIcon />}>
                <ListItemTitle>Azure Blob storage</ListItemTitle>
                <ListItemSubtitle>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </ListItemSubtitle>
              </ListItem>
              <ListItem leftNode={<LanConnectIcon />}>
                <ListItemTitle>Azure IoT</ListItemTitle>
                <ListItemSubtitle>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </ListItemSubtitle>
              </ListItem>
              <ListItem leftNode={<VectorPolylineIcon />}>
                <ListItemTitle>Azure Event hubs</ListItemTitle>
                <ListItemSubtitle>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </ListItemSubtitle>
              </ListItem>
            </List>
            <ListItem leftNode={<CiscoWebexIcon />}>
              <ListItemTitle>Cisco</ListItemTitle>
              <ListItemSubtitle>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea.
              </ListItemSubtitle>
            </ListItem>
          </List>
        </GuideExample>
      </div>
    ))
  );
