import PropTypes from 'prop-types';
import React from 'react';
import withRefs from '../utils/withRefs';

import { StyledListTitle } from './List-styled';

import { ListContext } from './List';

const ListTitle = ({ children, forwardedRef, ...other }) => {
  return (
    <ListContext.Consumer>
      {({ listContext }) => (
        <StyledListTitle
          ref={forwardedRef}
          nested={listContext.nested}
          {...other}
        >
          {children}
        </StyledListTitle>
      )}
    </ListContext.Consumer>
  );
};

ListTitle.propTypes = {
  /** Content of the ItemTitle */
  children: PropTypes.node,
  /** Applied when the list is imbedded inside another list */
  nested: PropTypes.bool
};

ListTitle.defaultProps = {};

ListTitle.displayName = 'ListTitle';

export default withRefs(ListTitle);
