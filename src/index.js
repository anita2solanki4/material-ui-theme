import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import Theme from './theme'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import registerServiceWorker from './registerServiceWorker';

const Customizetheme = createMuiTheme(Theme);

ReactDOM.render(
  <MuiThemeProvider theme={ Customizetheme }><Routes /></MuiThemeProvider>
  , document.getElementById('root'));
registerServiceWorker();


