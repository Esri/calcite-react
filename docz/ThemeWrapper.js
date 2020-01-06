import React from 'react';
import CalciteThemeProvider from '../src/CalciteThemeProvider';

const ThemeWrapper = ({ children }) => (
  <CalciteThemeProvider>{children}</CalciteThemeProvider>
);

export default ThemeWrapper;
