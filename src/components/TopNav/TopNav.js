import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { clearfix } from '../../utils/helpers';

const TopNav = ({ children, ...other }) => {
  const StyledTopNav = styled.header`
    display: flex;
    align-items: center;
    position: relative;
    border-bottom: 1px solid ${props => props.theme.palette.lightestGray};
    background-color: ${props => props.theme.palette.white};
    z-index: 100;
    ${clearfix()};
  `;

  const topNav = <StyledTopNav {...other}>{children}</StyledTopNav>;

  return topNav;
};

TopNav.propTypes = {
  children: PropTypes.node
};

TopNav.defaultProps = {};

export default TopNav;
