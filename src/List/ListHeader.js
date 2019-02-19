import PropTypes from 'prop-types';
import React from 'react';

import { StyledListHeader } from './List-styled';

import { ListContext } from './List';

const ListHeader = ({ children, ...other }) => {
  return (
    <ListContext.Consumer>
      {({ listContext }) => (
        <StyledListHeader
          as="span"
          minimal={listContext.minimal}
          selectable={listContext.selectable}
          {...other}
        >
          {children}
        </StyledListHeader>
      )}
    </ListContext.Consumer>
  );
};

ListHeader.propTypes = {
  /** The content of the component. */
  children: PropTypes.node
};

ListHeader.defaultProps = {};

ListHeader.displayName = 'ListHeader';

export default ListHeader;
