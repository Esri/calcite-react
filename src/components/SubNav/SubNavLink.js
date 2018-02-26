import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'styled-components';
import { a } from '../../utils/elements';
import { subNavUnderline } from '../../utils/helpers';

const SubNavLink = ({ children, active, ...other }) => {
  const StyledSubNavLink = a.extend`
    padding: .25em .75em;
    margin: 0 .25em 0 0;
    font-family: ${props => props.theme.avenirFamily};
    color: ${props => props.theme.palette.offWhite};
    font-size: 0.9375rem;
    line-height: 1.55rem;
    background-color: ${props => props.theme.palette.transparentOffBlack};
    box-sizing: border-box;
    transition: background-color 150ms linear, color 150ms 150ms linear;
    display: inline-block;

    &:hover,
    &:focus {
      background-color: ${props => props.theme.palette.transparentDarkerGray};
      color: ${props => props.theme.palette.white};
      text-decoration: none;
      ${props => subNavUnderline(props)};
    }

    ${props =>
      active &&
      css`
        &,
        &:hover,
        &:focus {
          background-color: ${props.theme.palette.white};
          color: ${props.theme.palette.offBlack};
        }
      `}
  `;

  const subNavLink = <StyledSubNavLink {...other}>{children}</StyledSubNavLink>;

  return subNavLink;
};

SubNavLink.propTypes = {
  children: PropTypes.node
};

SubNavLink.defaultProps = {};

export default SubNavLink;
