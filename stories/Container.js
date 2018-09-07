import React, { Component, Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import CalciteTheme, {
  CalciteReactGlobalStyles
} from '../src/theme/CalciteTheme';

import './stories.css';

//
// This is the wrapper for all our stories
//

export default class Container extends Component {
  render() {
    const { story } = this.props;

    return (
      <div>
        <ThemeProvider theme={CalciteTheme}>
          <Fragment>
            <CalciteReactGlobalStyles />
            {story()}
          </Fragment>
        </ThemeProvider>
      </div>
    );
  }
}
