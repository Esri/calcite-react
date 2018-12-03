import { css } from 'docz-plugin-css';
import DoczCalcitetheme from './docz/DoczCalcitetheme';

export default {
  plugins: [
    // Enable CSS in mdx files (necessary for Toastify external CSS)
    css()
  ],

  htmlContext: {
    favicon: 'public/favicon.png'
  },

  // Public folder where static assets can be referenced
  public: '/docz/public',

  // Wrapper component for each mdx file, used to wrap everything in CalciteThemeProvider
  wrapper: __dirname + '/docz/ThemeWrapper',

  // Ordering of the side menu, used here to put "Getting Started" first
  menu: ['Getting Started'],

  // Custom theme configuration
  themeConfig: DoczCalcitetheme,

  // Disable support for CodeSandbox for now, all our components just throw this
  // error in the build:
  // `Could not create Open in CodeSandbox { key: 'tooManyModules' }`
  codeSandbox: false
};
