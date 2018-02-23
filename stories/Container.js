import React, { Component } from 'react';
import './stories.css';

export default class Container extends Component {
  render() {
    const { story } = this.props;

    return <div>{story()}</div>;
  }
}
