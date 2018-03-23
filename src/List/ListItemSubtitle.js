import PropTypes from 'prop-types';
import React from 'react';
import { StyledListSubtitle } from './List-styled';

const ListSubtitle = ({ children, ...other }) => {
  const listSubtitle = (
    <StyledListSubtitle {...other}>{children}</StyledListSubtitle>
  );

  return listSubtitle;
};

ListSubtitle.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

ListSubtitle.defaultProps = {};

export default ListSubtitle;
