import PropTypes from 'prop-types';
import React from 'react';
import { a } from '../../utils/elements';

const TopNavTitle = ({ children, href, ...other }) => {
  const StyledTopNavTitle = a.extend`
    font-size: 1.2019rem;
    margin-right: 1.5rem;
    padding-top: 1.125rem;
    padding-bottom: 1.25rem;
    line-height: 1.5rem;
    color: ${props => props.theme.palette.offBlack};

    &:hover {
      text-decoration: none;
    }
  `;

  const panelText = (
    <StyledTopNavTitle {...other} href={href}>
      {children}
    </StyledTopNavTitle>
  );

  return panelText;
};

TopNavTitle.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string
};

TopNavTitle.defaultProps = {
  href: '#'
};

export default TopNavTitle;
