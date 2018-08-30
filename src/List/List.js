import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';

import { StyledList } from './List-styled';

const ListContext = createContext({
  listContext: {
    nested: undefined,
    open: undefined
  }
});

class List extends Component {
  render() {
    const listContext = {
      nested: this.props.nested,
      open: this.props.open
    };

    let listMaxHeight = 'none';
    if (this.props.open === false) {
      listMaxHeight = '0px';
    } else if (this.listNode && this.props.nested) {
      listMaxHeight = 0;
      for (let i = 0; i < this.listNode.childNodes.length; i++) {
        const child = this.listNode.childNodes[i];
        listMaxHeight = listMaxHeight + child.clientHeight;
      }
      listMaxHeight = listMaxHeight + 'px';
    }

    return (
      <ListContext.Provider value={{ listContext }}>
        <StyledList
          nested={this.props.nested}
          open={this.props.open}
          innerRef={el => {
            this.listNode = el;
          }}
          maxHeight={listMaxHeight}
          {...this.props}
        >
          {this.props.children}
        </StyledList>
      </ListContext.Provider>
    );
  }
}

List.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** Applied when the list is imbedded inside another list */
  nested: PropTypes.bool,
  /** Whether the list should be collapsed or expanded */
  open: PropTypes.bool
};

List.defaultProps = {};

export { List as default, ListContext };
