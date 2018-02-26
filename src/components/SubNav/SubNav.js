import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

const SubNav = ({ children, ...other }) => {
  const StyledSubNav = styled.header`
    background-color: ${props => props.theme.palette.lightestGray};

    ${props =>
      props.blue &&
      css`
        background-color: ${props.theme.palette.darkerBlue};
      `};
  `;

  const subNav = <StyledSubNav {...other}>{children}</StyledSubNav>;

  return subNav;
};

SubNav.propTypes = {
  children: PropTypes.node
};

SubNav.defaultProps = {};

export default SubNav;
