import React, { Component } from 'react';
import Style from './Appstyle';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import { AppBar, Toolbar, Typography, Divider, Drawer, IconButton } from 'material-ui';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import logo from '../../logo.svg';
import Buttons from '../../pages/Button/index'
import SideMenu from './SideMenu'
const drawerWidth = 240;
const styles = (theme) => (Style(theme,drawerWidth));

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: true,
      componentMenu: true
    };
  }

  handleDrawer = () => {
    this.setState({ open: !this.state.open });
  };

  handlecomponentMenu = () => {
    this.setState({ componentMenu: !this.state.componentMenu });
  };


  handleLeftMenuButtonclick = (txt) => {
    debugger;
    if(txt === 'a'){
      <AppBar/>
    }else{
      <Buttons/>
    }
  }

  render() {
    const classes = this.props.classes;
    return (

      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
            <Toolbar disableGutters={!this.state.open}>
              <IconButton
                color="contrast"
                aria-label="open drawer"
                onClick={this.handleDrawer}
                className={classNames(classes.menuButton, this.state.open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography type="title" color="inherit" noWrap>
                {(this.props.location.pathname).slice(1)}
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            type="permanent"
            classes={{
              paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
            }}
            open={this.state.open}
          >
            <div className={classes.drawerInner}>
              <div className={classes.drawerHeader}>
                <img src={logo} className="App-logo" alt="logo" width={50}/>
                <h3>Material UI</h3>
                <IconButton onClick={this.handleDrawer}>
                  <ChevronLeftIcon />
                </IconButton>
              </div>
              <Divider />
              <SideMenu classes={classes}/>
            </div>
          </Drawer>
          <main className={classes.content}>
            {this.props.children}
          </main>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(App);



