import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

import './index.css';

export const theme = createMuiTheme({
  typography: {
    button: {
      textTransform: "none"
    }
  },
  palette: {
    primary: {
      main: "#b0c4de",
    },
    secondary: {
      main: "#696969",
    },
  },
})

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
      <Router>
        <App/>
      </Router>
    </MuiThemeProvider>
  , document.getElementById('root'));
serviceWorker.unregister();
