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

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  StyledAccountTile,
  StyledContentWrapper,
  StyledAvatarContainer,
  StyledIconWrapper,
  StyledTextWrapper,
  StyledP
} from './AccountTile-styled';

import Avatar from '../Avatar';
import Tooltip from '../Tooltip';
import { MenuItem } from '../Menu';
import Popover from '../Popover';
import Menu from '../Menu';

import HandleVerticalIcon from 'calcite-ui-icons-react/HandleVerticalIcon';
import CheckCircleIcon from 'calcite-ui-icons-react/CheckCircleIcon';
import ExclamationMarkTriangleIcon from 'calcite-ui-icons-react/ExclamationMarkTriangleIcon';

const AccountTile = ({
  actions,
  user,
  isAuthenticated,
  orgName,
  width,
  expiredText,
  authenticatedText
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => {
    isOpen && setIsOpen(false);
  };

  const toggleIsOpen = event => {
    if (event.key === 'Enter' || event.key == null) {
      setIsOpen(!isOpen);
    }
  };

  const menuItemHandler = (func, event = null) => {
    if (event && event.key) {
      if (event.key === 'Enter') {
        func();
      } else {
        return;
      }
    } else {
      func();
    }
    setIsOpen(!isOpen);
  };

  let avatarLetters_user;
  if (user.firstName && user.lastName) {
    avatarLetters_user = `${user.firstName[0] +
      user.lastName[0]}`.toUpperCase();
  } else {
    avatarLetters_user = user.fullName[0].toUpperCase();
  }

  const avatarLetters_org = orgName ? orgName[0].toUpperCase() : '';

  const menuItems = actions.map(item => (
    <MenuItem
      key={item.label}
      tabIndex="0"
      onClick={() => {
        menuItemHandler(item.onClick);
      }}
      onKeyPress={event => {
        menuItemHandler(item.onClick, event);
      }}
    >
      {item.label}
    </MenuItem>
  ));

  let authStatusIndicator;
  switch (isAuthenticated) {
    case true:
      authStatusIndicator = (
        <Tooltip
          title={authenticatedText}
          placement="top"
          targetWrapperStyle={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <CheckCircleIcon color="green" size={16} alt={authenticatedText} />
        </Tooltip>
      );
      break;
    default:
      authStatusIndicator = (
        <Tooltip
          title={expiredText}
          placement="top"
          targetWrapperStyle={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <ExclamationMarkTriangleIcon size={16} alt={expiredText} />
        </Tooltip>
      );
  }

  return (
    <Popover
      open={isOpen}
      onRequestClose={close}
      targetContainerStyles={{
        width: width,
        display: 'block'
      }}
      placement="bottom-end"
      targetEl={
        // ---------- Account Tile ----------
        <StyledAccountTile
          onClick={toggleIsOpen}
          onKeyPress={toggleIsOpen}
          open={isOpen}
          tabIndex="0"
        >
          <StyledContentWrapper>
            <StyledAvatarContainer>
              <Avatar
                src={user.userThumbnail}
                style={{ width: 60, height: 60 }}
              >
                {!user.userThumbnail && avatarLetters_user}
              </Avatar>
              <Avatar
                src={user.portalThumbnail}
                style={{ width: 30, height: 30 }}
              >
                {!user.portalThumbnail && avatarLetters_org}
              </Avatar>
            </StyledAvatarContainer>
            <StyledTextWrapper>
              <StyledP title={orgName} demi>
                {orgName}
              </StyledP>
              <StyledP title={user.fullName}>{user.fullName}</StyledP>
              <StyledP title={user.username} small>
                {user.username}
              </StyledP>
            </StyledTextWrapper>
          </StyledContentWrapper>
          <StyledIconWrapper>
            {authStatusIndicator}
            {actions.length !== 0 && <HandleVerticalIcon scale={16} />}
          </StyledIconWrapper>
        </StyledAccountTile>
      }
    >
      {/* Account item dropdown menu */}
      <Menu>{actions.length !== 0 && menuItems}</Menu>
    </Popover>
  );
};

AccountTile.propTypes = {
  /** Actions to be included in the dropdown. Each action should be structured: { label: 'Action Label', action: someMethod } */
  actions: PropTypes.array,
  /** The ArcGIS user object.*/
  user: PropTypes.object,
  /** Is the user currently logged in or has their authentication expired? */
  isAuthenticated: PropTypes.bool,
  /** Name of the user's organization */
  orgName: PropTypes.string,
  /** Style prop to define the width of the tile.*/
  width: PropTypes.string,
  /** Text to show when the account is authenticated.*/
  authenticatedText: PropTypes.string,
  /** Text to show when the account has expired (is not authenticated).*/
  expiredText: PropTypes.string
};

AccountTile.defaultProps = {
  actions: [],
  isAuthenticated: false,
  orgName: null,
  width: '100%',
  authenticatedText: 'Account authenticated',
  expiredText: 'Authentication expired'
};

AccountTile.displayName = 'AccountTile';

export default AccountTile;
