import React from 'react';
import { CalciteThemeProvider } from '../src/theme/CalciteTheme';

const ThemeWrapper = ({ children }) => (
  <CalciteThemeProvider>{children}</CalciteThemeProvider>
);

export default ThemeWrapper;
