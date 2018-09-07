import PropTypes from 'prop-types';
import React from 'react';
import { StyledListHeader } from './List-styled';

import { ListContext } from './List';

const ListHeader = ({ children, ...other }) => {
  return (
    <ListContext.Consumer>
      {({ listContext }) => (
        <StyledListHeader as="span" {...other}>
          {children}
        </StyledListHeader>
      )}
    </ListContext.Consumer>
  );
};

ListHeader.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

ListHeader.defaultProps = {};

export default ListHeader;
