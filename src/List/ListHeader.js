import PropTypes from 'prop-types';
import React from 'react';
import withRefs from '../utils/withRefs';

import { StyledListHeader } from './List-styled';

import { ListContext } from './List';

const ListHeader = withRefs(({ children, forwardedRef, ...other }) => {
  return (
    <ListContext.Consumer>
      {({ listContext }) => (
        <StyledListHeader ref={forwardedRef} as="span" {...other}>
          {children}
        </StyledListHeader>
      )}
    </ListContext.Consumer>
  );
});

ListHeader.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

ListHeader.defaultProps = {};

ListHeader.displayName = 'ListHeader';

export default ListHeader;
