import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';
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
        <StyledList id={this.listId} maxHeight={listMaxHeight} {...this.props}>
          {this.props.children}
        </StyledList>
      </ListContext.Provider>
    );
  }
}

List.propTypes = {
  /** The content of the component; can contain ListHeader, ListItem, and even another List. */
  children: PropTypes.node,
  /** Applied when the List is imbedded inside another List. */
  nested: PropTypes.bool,
  /** Whether the List should be collapsed or expanded. */
  open: PropTypes.bool
};

List.defaultProps = {};

List.displayName = 'List';

export { List as default, ListContext };
