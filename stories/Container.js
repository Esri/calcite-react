import React, { Component } from 'react';
import CalciteThemeProvider from '../src/CalciteThemeProvider';

import './stories.css';

//
// This is the wrapper for all our stories
//

export default class Container extends Component {
  render() {
    const { story } = this.props;

    return <CalciteThemeProvider>{story()}</CalciteThemeProvider>;
  }
}
