import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';
import withRefs from '../utils/withRefs';
import uniqid from 'uniqid';

import { StyledList } from './List-styled';

const ListContext = createContext({
  listContext: {
    nested: undefined,
    open: undefined
  }
});

class List extends Component {
  constructor(props) {
    super(props);
    this.listId = this.props.id || uniqid();
  }

  render() {
    const listContext = {
      nested: this.props.nested,
      open: this.props.open
    };
    const listNode = document.getElementById(this.listId);

    let listMaxHeight = 'none';
    if (this.props.open === false) {
      listMaxHeight = '0px';
    } else if (listNode && this.props.nested) {
      listMaxHeight = 0;
      for (let i = 0; i < listNode.childNodes.length; i++) {
        const child = listNode.childNodes[i];
        listMaxHeight = listMaxHeight + child.clientHeight;
      }
      listMaxHeight = listMaxHeight + 'px';
    }

    return (
      <ListContext.Provider value={{ listContext }}>
        <StyledList
          ref={this.props.forwardedRef}
          id={this.listId}
          maxHeight={listMaxHeight}
          {...this.props}
        >
          {this.props.children}
        </StyledList>
      </ListContext.Provider>
    );
  }
}

const ListWithRefs = withRefs(List);

ListWithRefs.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** Applied when the list is imbedded inside another list */
  nested: PropTypes.bool,
  /** Whether the list should be collapsed or expanded */
  open: PropTypes.bool
};

ListWithRefs.defaultProps = {};

ListWithRefs.displayName = 'List';

export { ListWithRefs as default, ListContext };
