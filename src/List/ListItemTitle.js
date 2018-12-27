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
  /** Content of the ItemTitle. */
  children: PropTypes.node,
  /** Applied when the List is imbedded inside another List. */
  nested: PropTypes.bool
};

ListTitle.defaultProps = {};

ListTitle.displayName = 'ListTitle';

export default ListTitle;
