import PropTypes from 'prop-types';
import React from 'react';
import { StyledListTitle } from './List-styled';

import { ListContext } from './List';

const ListTitle = ({ children, ...other }) => {
  return (
    <ListContext.Consumer>
      {({ listContext }) => (
        <StyledListTitle nested={listContext.nested} {...other}>
          {children}
        </StyledListTitle>
      )}
    </ListContext.Consumer>
  );
};

ListTitle.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

ListTitle.defaultProps = {};

export default ListTitle;
