import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const TopNav = ({ children, ...other }) => {
  const StyledTopNavActions = styled.div`
    display: flex;
    align-items: center;

    > * {
      margin-left: 0.75em;

      &:first-child {
        margin-left: 0;
      }
    }
  `;

  const alert = (
    <StyledTopNavActions {...other}>{children}</StyledTopNavActions>
  );

  return alert;
};

TopNav.propTypes = {
  children: PropTypes.node
};

TopNav.defaultProps = {};

export default TopNav;
