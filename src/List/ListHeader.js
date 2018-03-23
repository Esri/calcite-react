import PropTypes from 'prop-types';
import React from 'react';
import { StyledListHeader } from './List-styled';

const ListHeader = ({ children, ...other }) => {
  const listHeader = <StyledListHeader {...other}>{children}</StyledListHeader>;

  return listHeader;
};

ListHeader.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

ListHeader.defaultProps = {};

export default ListHeader;
