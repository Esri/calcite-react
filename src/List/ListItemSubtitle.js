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
  /** Content of the Subtitle. */
  children: PropTypes.node,
  /** Applied when the List is imbedded inside another List. */
  nested: PropTypes.bool
};

ListSubtitle.defaultProps = {};

ListSubtitle.displayName = 'ListSubtitle';

export default ListSubtitle;
