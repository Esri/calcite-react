// Copyright 2019 Esri
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.​

import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

import { StyledList } from './List-styled';

const ListContext = createContext({
  listContext: {
    nested: undefined,
    open: undefined,
    minmal: undefined
  }
});

class List extends Component {
  constructor(props) {
    super(props);
    this.listId = this.props.id || uniqid();
  }

  render() {
    const {
      children,
      nested,
      open,
      minimal,
      selectable,
      ...other
    } = this.props;

    const listContext = {
      nested,
      open,
      minimal,
      selectable
    };
    const listNode = document.getElementById(this.listId);

    let listMaxHeight = 'none';
    if (open === false) {
      listMaxHeight = '0px';
    } else if (listNode && nested) {
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
          id={this.listId}
          maxHeight={listMaxHeight}
          nested={nested}
          open={open}
          minimal={minimal}
          selectable={selectable}
          {...other}
        >
          {children}
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
  open: PropTypes.bool,
  /** Minimal styling for the List */
  minimal: PropTypes.bool,
  /** Selectable styling for the List */
  selectable: PropTypes.bool
};

List.defaultProps = {};

List.displayName = 'List';

export { List as default, ListContext };
