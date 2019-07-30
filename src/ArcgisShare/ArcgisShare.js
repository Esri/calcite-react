// Copyright 2019 Esri
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.​

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
  GroupFieldsetStyles,
  StyledStarIcon,
  StyledLegend,
  StyledNoGroups
} from './ArcgisShare-styled';

// App components
import Checkbox from '../Checkbox';
import { Fieldset } from '../Form';

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
    this.props.user && this.initGroupsState(this.props.user.groups);
  }

  initGroupsState = groups => {
    let groubsObj = {};
    groups.forEach(group => {
      const sharing = this.props.sharing;
      const isShared =
        sharing && sharing.groups && sharing.groups.indexOf(group.id) > -1;
      groubsObj[group.id] = isShared;
    });

    this.setState({
      groups: groubsObj
    });
  };

  getGroupCheckboxes = (groups, noGroupsLabel) => {
    let _groups = [...groups];

    if (_groups.length) {
      if (this.props.promoteFavorites) {
        _groups.sort((a, b) => {
          return b.isFav - a.isFav;
        });
      }

      return _groups.map(group => {
        let favIcon;
        if (group.isFav && this.props.promoteFavorites) {
          favIcon = <StyledStarIcon filled size={16} />;
        }
        return (
          <Checkbox
            key={group.id}
            id={group.id}
            labelStyle={{ ...GroupCheckboxLabelStyles }}
            checked={this.state.groups[group.id] || false}
            onChange={this.groupChange}
          >
            {group.title} {favIcon}
          </Checkbox>
        );
      });
    }

    return <StyledNoGroups>{noGroupsLabel}</StyledNoGroups>;
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
    const {
      publicLabel,
      groupsLabel,
      noGroupsLabel,
      portal,
      user
    } = this.props;

    return (
      <StyledArcgisShare>
        <Checkbox
          id="public"
          labelStyle={{ ...PrimaryCheckboxLabelStyles }}
          checked={this.state.public || false}
          onChange={this.publicChange}
        >
          {publicLabel}
        </Checkbox>
        <Checkbox
          id="org"
          labelStyle={{ ...PrimaryCheckboxLabelStyles }}
          checked={this.state.org || false}
          onChange={this.orgChange}
        >
          {portal && portal.name}
        </Checkbox>
        <Fieldset name="shareGroups" style={{ ...GroupFieldsetStyles }}>
          <StyledLegend>{groupsLabel}:</StyledLegend>
          <StyledGroupContainer>
            {user && this.getGroupCheckboxes(user.groups, noGroupsLabel)}
          </StyledGroupContainer>
        </Fieldset>
      </StyledArcgisShare>
    );
  }
}

ArcgisShare.propTypes = {
  /** AGOL user object. */
  user: PropTypes.object.isRequired,
  /** AGOL portal object. */
  portal: PropTypes.object.isRequired,
  /** AGOL sharing object. */
  sharing: PropTypes.object,
  /** Text label for the Public group. */
  publicLabel: PropTypes.string,
  /** Text label for the Groups header. */
  groupsLabel: PropTypes.string,
  /** Boolean toggle for highlighting favorited groups. */
  promoteFavorites: PropTypes.bool,
  /** Text label used inside the groups list when the user is not assigned to any groups */
  noGroupsLabel: PropTypes.string
};

ArcgisShare.defaultProps = {
  publicLabel: 'Everyone (public)',
  groupsLabel: 'These groups',
  noGroupsLabel: 'No groups for this user'
};

ArcgisShare.displayName = 'ArcgisShare';

export default ArcgisShare;
