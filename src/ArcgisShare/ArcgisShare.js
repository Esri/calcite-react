// Framework and third-party non-ui
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Redux operations and local helpers/utils/modules

// Component specific modules (Component-styled, etc.)
import {
  StyledArcgisShare,
  StyledGroupContainer,
  PrimaryCheckboxLabelStyles,
  GroupCheckboxLabelStyles,
  GroupFieldsetStyles
} from './ArcgisShare-styled';

// App components
import Checkbox from '../Checkbox';
import Form, { Fieldset, Legend } from '../Form';

// Third-party components (buttons, icons, etc.)

// JSON

// CSS

class ArcgisShare extends Component {
  constructor(props) {
    super(props);
    const sharing = this.props.sharing;
    const isPublic = sharing && sharing.access === 'public';
    const isOrg = sharing && sharing.access === 'org';

    this.state = {
      public: isPublic,
      org: isOrg,
      groups: {}
    };
  }

  componentDidMount() {
    this.initGroupsState(this.props.user.groups);
  }

  initGroupsState = groups => {
    let groubsObj = {};
    groups.forEach(group => {
      const sharing = this.props.sharing;
      const isShared = sharing && sharing.groups.indexOf(group.id) > -1;
      groubsObj[group.id] = isShared;
    });

    this.setState({
      groups: groubsObj
    });
  };

  getGroupCheckboxes = groups => {
    return groups.map(group => {
      return (
        <Checkbox
          key={group.id}
          id={group.id}
          labelStyle={{ ...GroupCheckboxLabelStyles }}
          checked={this.state.groups[group.id]}
          onChange={this.groupChange}
        >
          {group.title}
        </Checkbox>
      );
    });
  };

  publicChange = e => {
    this.setState(
      {
        public: e.target.checked
      },
      () => {
        this.props.onChange(this.state);
      }
    );
  };

  orgChange = e => {
    this.setState(
      {
        org: e.target.checked
      },
      () => {
        this.props.onChange(this.state);
      }
    );
  };

  groupChange = e => {
    let groupsObj = this.state.groups;
    groupsObj[e.target.id] = e.target.checked;

    this.setState(
      {
        groups: groupsObj
      },
      this.changed
    );
  };

  changed = () => {
    this.props.onChange(this.state);
  };

  render() {
    return (
      <StyledArcgisShare>
        <Form>
          <Checkbox
            id="public"
            labelStyle={{ ...PrimaryCheckboxLabelStyles }}
            checked={this.state.public}
            onChange={this.publicChange}
          >
            {this.props.publicLabel}
          </Checkbox>
          <Checkbox
            id="org"
            labelStyle={{ ...PrimaryCheckboxLabelStyles }}
            checked={this.state.org}
            onChange={this.orgChange}
          >
            {this.props.portal.name}
          </Checkbox>
          <Fieldset name="shareGroups" style={{ ...GroupFieldsetStyles }}>
            <Legend>{this.props.groupsLabel}:</Legend>
            <StyledGroupContainer>
              {this.getGroupCheckboxes(this.props.user.groups)}
            </StyledGroupContainer>
          </Fieldset>
        </Form>
      </StyledArcgisShare>
    );
  }
}

ArcgisShare.propTypes = {
  user: PropTypes.object.isRequired,
  portal: PropTypes.object.isRequired,
  sharing: PropTypes.object,
  publicLabel: PropTypes.string,
  groupsLabel: PropTypes.string
};

ArcgisShare.defaultProps = {
  publicLabel: 'Everyone (public)',
  groupsLabel: 'These groups'
};

export default ArcgisShare;
