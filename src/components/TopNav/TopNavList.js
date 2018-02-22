import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

const TopNavList = ({ children, ...other }) => {
  const StyledTopNavList = styled.nav`
    float: left;
    padding: 0;

    ${props =>
      props.right &&
      css`
        float: right;
      `};
  `;

  const panelTitle = <StyledTopNavList {...other}>{children}</StyledTopNavList>;

  return panelTitle;
};

TopNavList.propTypes = {
  children: PropTypes.node
};

TopNavList.defaultProps = {};

export default TopNavList;
