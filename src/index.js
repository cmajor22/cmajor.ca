import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CustomThemeProvider from './themes/ThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline'

ReactDOM.render(
  <CustomThemeProvider>
    <CssBaseline />
      <App />
  </CustomThemeProvider>,
  document.getElementById('root')
);
