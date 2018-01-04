import React, { Component } from 'react';
import styled from 'styled-components';

const GuideExampleContainer = styled.div`
  min-height: 2rem;
  padding: 0.5em;
  border-bottom: 1px solid #efefef;
  border-left: 1px solid #efefef;
  border-right: 1px solid #efefef;
  position: relative;
  clear: both;

  &:last-child {
    border-bottom: none;
  }

  &:first-child {
    border-top: 1px solid #efefef;
    border-radius: 6px 6px 0 0;
  }
`;

const GuideExampleLabel = styled.code`
  border-radius: 0 0 0 3px;
  position: absolute;
  top: -1px;
  right: -1px;
  padding-left: 3px;
  padding-right: 3px;
  z-index: 1;

  *:first-child & {
    border-radius: 0 3px 0 3px;
  }
`;

class GuideExample extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let label;
    if (this.props.label) {
      label = <GuideExampleLabel>{this.props.label}</GuideExampleLabel>;
    }
    return (
      <GuideExampleContainer>
        {this.props.children}
        {label}
      </GuideExampleContainer>
    );
  }
}

export default GuideExample;
