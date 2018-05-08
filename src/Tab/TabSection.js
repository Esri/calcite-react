import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledTabChildContainer } from './Tab-styled';

class TabSection extends Component {
  render() {
    return (
      <StyledTabChildContainer>{this.props.children}</StyledTabChildContainer>
    );
  }
}

TabSection.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

export default TabSection;
