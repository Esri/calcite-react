import PropTypes from 'prop-types';
import React from 'react';
import { StyledListSubtitle } from './List-styled';

import { ListContext } from './List';

const ListSubtitle = ({ children, ...other }) => {
  return (
    <ListContext.Consumer>
      {({ listContext }) => (
        <StyledListSubtitle nested={listContext.nested} {...other}>
          {children}
        </StyledListSubtitle>
      )}
    </ListContext.Consumer>
  );
};

ListSubtitle.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

ListSubtitle.defaultProps = {};

export default ListSubtitle;
