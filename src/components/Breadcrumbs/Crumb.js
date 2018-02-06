import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { a } from '../../utils/elements';

const Crumb = ({ children, href, ...other }) => {
  const StyledCrumb = a.extend`
    color: ${props => props.theme.palette.darkerGray};

    &::before {
      content: '/';
      color: ${props => props.theme.palette.darkerGray};
      font-weight: 400;
      display: inline-block;
      padding: 0 0.5rem;
    }

    &:first-child::before {
      display: none;
    }

    &:last-child {
      font-weight: 600;
    }
  `;

  const StyledSpanCrumb = styled.span`
    color: ${props => props.theme.palette.darkerGray};

    &::before {
      content: '/';
      color: ${props => props.theme.palette.darkerGray};
      font-weight: 400;
      display: inline-block;
      padding: 0 0.5rem;
    }

    &:first-child::before {
      display: none;
    }

    &:last-child {
      font-weight: 600;
    }
  `;

  const spanCrumb = <StyledSpanCrumb {...other}>{children}</StyledSpanCrumb>;

  const crumb = (
    <StyledCrumb {...other} href={href}>
      {children}
    </StyledCrumb>
  );

  return href ? crumb : spanCrumb;
};

Crumb.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string
};

Crumb.defaultProps = {};

export default Crumb;
