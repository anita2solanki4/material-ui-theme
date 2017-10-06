import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Button} from 'material-ui';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

class Appbar extends Component {

  render() {

    return (
      <div>

        <h3> Simple App Bar</h3>
        <AppBar position="static"  color="default">
          <Toolbar>
            <Typography type="title" color="inherit">
              Title
            </Typography>
          </Toolbar>
        </AppBar>

        <h3>App bar with buttons</h3>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="contrast" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography color="inherit" type="title">
              Title
            </Typography>
            <Button color="contrast">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default(Appbar);



