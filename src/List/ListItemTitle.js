import PropTypes from 'prop-types';
import React from 'react';
import { StyledListTitle } from './List-styled';

const ListTitle = ({ children, ...other }) => {
  const listTitle = <StyledListTitle {...other}>{children}</StyledListTitle>;

  return listTitle;
};

ListTitle.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

ListTitle.defaultProps = {};

export default ListTitle;
