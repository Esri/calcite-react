import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import CalciteTheme from '../src/theme/CalciteTheme';

import './stories.css';

//
// This is the wrapper for all our stories
//

export default class Container extends Component {
  render() {
    const { story } = this.props;

    return (
      <div>
        <ThemeProvider theme={CalciteTheme}>{story()}</ThemeProvider>
      </div>
    );
  }
}
