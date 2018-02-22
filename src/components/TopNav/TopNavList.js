import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

const TopNavList = ({ children, ...other }) => {
  const StyledTopNavList = styled.nav`
    padding: 0;
    flex: 1 0 auto;

    ${props =>
      props.right &&
      css`
        float: right;
      `};
  `;

  const topNavList = <StyledTopNavList {...other}>{children}</StyledTopNavList>;

  return topNavList;
};

TopNavList.propTypes = {
  children: PropTypes.node
};

TopNavList.defaultProps = {};

export default TopNavList;
