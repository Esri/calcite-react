import PropTypes from 'prop-types';
import React from 'react';
import withRefs from '../utils/withRefs';

import { StyledListSubtitle } from './List-styled';

import { ListContext } from './List';

const ListSubtitle = ({ children, forwardedRef, ...other }) => {
  return (
    <ListContext.Consumer>
      {({ listContext }) => (
        <StyledListSubtitle
          ref={forwardedRef}
          nested={listContext.nested}
          {...other}
        >
          {children}
        </StyledListSubtitle>
      )}
    </ListContext.Consumer>
  );
};

ListSubtitle.propTypes = {
  /** Content of the SubTitle */
  children: PropTypes.node,
  /** Applied when the list is imbedded inside another list */
  nested: PropTypes.bool
};

ListSubtitle.defaultProps = {};

ListSubtitle.displayName = 'ListSubtitle';

export default withRefs(ListSubtitle);
