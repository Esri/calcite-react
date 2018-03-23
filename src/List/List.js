import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StyledList } from './List-styled';
import { ListHeader, ListItem } from './';

class List extends Component {
  render() {
    const childArray = React.Children.toArray(this.props.children);
    const childrenWithProps = childArray.map((child, i) => {
      switch (child.type) {
        case ListHeader:
          return React.cloneElement(child, {
            nested: this.props.nested,
            open: this.props.open
          });
        case ListItem:
          return React.cloneElement(child, {
            nested: this.props.nested,
            open: this.props.open
          });
        default:
          return React.cloneElement(child, {
            nested: true
          });
      }
    });

    let listMaxHeight = 'none';
    if (this.props.open === false) {
      listMaxHeight = '0px';
    } else if (this.listNode && this.props.nested) {
      listMaxHeight = 0;
      this.listNode.childNodes.forEach(child => {
        listMaxHeight = listMaxHeight + child.clientHeight;
      });
      listMaxHeight = listMaxHeight + 'px';
    }

    const list = (
      <StyledList
        nested={this.props.nested}
        open={this.props.open}
        innerRef={el => {
          this.listNode = el;
        }}
        maxHeight={listMaxHeight}
        {...this.props}
      >
        {childrenWithProps}
      </StyledList>
    );

    return list;
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

export default List;
