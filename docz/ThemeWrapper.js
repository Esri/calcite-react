import React from 'react';
import CalciteThemeProvider from '../src/CalciteThemeProvider';
import { ToastContainer } from '../src/Toaster';

const ThemeWrapper = ({ children }) => (
  <CalciteThemeProvider>
    <ToastContainer />
    {children}
  </CalciteThemeProvider>
);

export default ThemeWrapper;
