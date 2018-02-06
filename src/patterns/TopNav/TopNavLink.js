import PropTypes from 'prop-types';
import React from 'react';
import { a } from '../../utils/elements';
import { fontSize } from '../../utils/helpers';

const TopNavLink = ({ children, href, ...other }) => {
  const StyledTopNavLink = a.extend`
    ${props => fontSize(-1, props.theme)};
    color: ${props => props.theme.palette.offBlack};
    padding-top: 1.1625rem;
    padding-bottom: calc(1.1625rem - 4px);
    border-bottom: 4px solid transparent;
    line-height: 1.5rem;
    display: inline-block;
    vertical-align: top;
    margin-left: .75em;

    &:first-child {
      margin-left: 0;
    }

    &:hover,
    &:focus {
      color: ${props => props.theme.palette.blue};
      border-bottom-color: ${props => props.theme.palette.blue};
      text-decoration: none;
    }

    &:focus {
      outline: none;
    }

    &.is-active {
      border-bottom-color: ${props => props.theme.palette.blue};
    }
  `;

  const panelTitle = (
    <StyledTopNavLink {...other} href={href}>
      {children}
    </StyledTopNavLink>
  );

  return panelTitle;
};

TopNavLink.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string
};

TopNavLink.defaultProps = {};

export default TopNavLink;
