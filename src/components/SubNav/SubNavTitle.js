import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'styled-components';
import { h1 } from '../../utils/elements';
import { unitCalc } from '../../utils/helpers';

const SubNavTitle = ({ children, ...other }) => {
  const StyledSubNavTitle = h1.extend`
    font-size: 1.9994rem;
    line-height: 2.325rem;
    margin-top: ${props => unitCalc(props.theme.baseline, 2, '/')};
    margin-bottom: ${props => unitCalc(props.theme.baseline, 2, '/')};
    display: inline-block;
    line-height: 1.25;

    ${props =>
      props.blue &&
      css`
        color: ${props.theme.palette.white};
      `};
  `;

  const subNavTitle = (
    <StyledSubNavTitle {...other}>{children}</StyledSubNavTitle>
  );

  return subNavTitle;
};

SubNavTitle.propTypes = {
  children: PropTypes.node
};

SubNavTitle.defaultProps = {};

export default SubNavTitle;
