import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
//import { mailFolderListItems, otherMailFolderListItems } from './tileData';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import classNames from 'classnames';
import Hidden from 'material-ui/Hidden';

const styles = theme => ({
  list: {
    width: 250,
  },
  listFull: {
    width: 'auto',
  },
  root: {
    width: '100%',
    height: 430,
    marginTop: theme.spacing.unit * 3,
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    position: 'absolute',
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: drawerWidth,
  },
  drawerHeader: theme.mixins.toolbar,
  content: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    padding: theme.spacing.unit * 3,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
  content1: {
    width: '100%',
    marginLeft: -drawerWidth,
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      content: {
        height: 'calc(100% - 64px)',
        marginTop: 64,
      },
    },
  },
  appBar1: {
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawerHeader1: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  contentShift: {
    marginLeft: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  //mini
  appBar_mini: {
    position: 'absolute',
    zIndex: theme.zIndex.navDrawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift_mini: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton_mini: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide_mini: {
    display: 'none',
  },
  drawerPaper_mini: {
    position: 'relative',
    height: '100%',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    width: 60,
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  drawerInner: {
    // Make the items inside not wrap when transitioning:
    width: drawerWidth,
  },
  drawerHeader_mini: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content_mini: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: 24,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
  //responsive
  appBar_res: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawerHeader_res: theme.mixins.toolbar,
  drawerPaper_res: {
    width: 250,
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      position: 'relative',
      height: '100%',
    },
  },
  content_res: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    padding: theme.spacing.unit * 3,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },


});
const drawerWidth = 240;
class Drawers extends React.Component{
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
    open:false,
    mobileOpen: false,

  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };


  render(){
    const classes = this.props.classes;
    const sideList = (
      <div className={classes.list}>
        <List>mailFolderListItems</List>
        <Divider />
        <List>otherMailFolderListItems</List>
      </div>
    );
    const fullList = (
      <div className={classes.listFull}>
        <List>mailFolderListItems</List>
        <Divider />
        <List>otherMailFolderListItems</List>
      </div>
    );

    return(
      <div>
        <h3>Drawers</h3>
        <p>The Drawer slides in from the side. It is a common pattern found in Google apps and follows the keylines and metrics for lists.</p>
        <h3>Temporary Drawer</h3>
        <p>The Drawer can be cancelled by clicking the overlay or pressing the Esc key. It closes when an item is selected, handled by controlling the open prop.</p>
        <Button onClick={this.toggleDrawer('left', true)}>Open Left</Button>
        <Button onClick={this.toggleDrawer('right', true)}>Open Right</Button>
        <Button onClick={this.toggleDrawer('top', true)}>Open Top</Button>
        <Button onClick={this.toggleDrawer('bottom', true)}>Open Bottom</Button>
        <Drawer open={this.state.left} onRequestClose={this.toggleDrawer('left', false)}>
          <div tabIndex={0} role="button" onClick={this.toggleDrawer('left', false)}>
            {sideList}
          </div>
        </Drawer>
        <Drawer anchor="top" open={this.state.top} onRequestClose={this.toggleDrawer('top', false)}>
          <div tabIndex={0} role="button" onClick={this.toggleDrawer('top', false)}>
            {fullList}
          </div>
        </Drawer>
        <Drawer
          anchor="bottom"
          open={this.state.bottom}
          onRequestClose={this.toggleDrawer('bottom', false)}
        >
          <div tabIndex={0} role="button" onClick={this.toggleDrawer('bottom', false)}>
            {fullList}
          </div>
        </Drawer>
        <Drawer
          anchor="right"
          open={this.state.right}
          onRequestClose={this.toggleDrawer('right', false)}
        >
          <div tabIndex={0} role="button" onClick={this.toggleDrawer('right', false)}>
            {sideList}
          </div>
        </Drawer>

        <h3>Permanent drawer</h3>
        <p>Permanent navigation drawers are always visible and pinned to the left edge, at the same elevation as the content or background. They cannot be closed.</p>
     <p>Permanent navigation drawers are the recommended default for desktop.</p>

        <div className={classes.root}>
          <div className={classes.appFrame}>
            <AppBar className={classes.appBar}>
              <Toolbar>
                <Typography type="title" color="inherit" noWrap>
                  Permanent drawer
                </Typography>
              </Toolbar>
            </AppBar>
            <Drawer
              type="permanent"
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div className={classes.drawerHeader} />
              <Divider />
              <List>mailFolderListItems</List>
              <Divider />
              <List>otherMailFolderListItems</List>
            </Drawer>
            <main className={classes.content}>
              <Typography type="body1" noWrap>
                {'You think water moves fast? You should see ice.'}
              </Typography>
            </main>
          </div>
        </div>
        <h3>Persistent drawer</h3>
        <p>Persistent navigation drawers can toggle open or closed. The drawer sits on the same surface elevation as the content. It is closed by default and opens by selecting the menu icon, and stays open until closed by the user. The state of the drawer is remembered from action to action and session to session.</p>
     <p>When the drawer is outside of the page grid and opens, the drawer forces other content to change size and adapt to the smaller viewport.</p>
      <p>Persistent navigation drawers are acceptable for all sizes larger than mobile. They are not recommended for apps with multiple levels of hierarchy that require using an up arrow for navigation.</p>
        <div className={classes.root}>
          <div className={classes.appFrame}>
            <AppBar className={classNames(classes.appBar1, this.state.open && classes.appBarShift1)}>
              <Toolbar disableGutters={!this.state.open}>
                <IconButton
                  color="contrast"
                  aria-label="open drawer"
                  onClick={this.handleDrawerOpen}
                  className={classNames(classes.menuButton, this.state.open && classes.hide)}
                >
                  <MenuIcon />
                </IconButton>
                <Typography type="title" color="inherit" noWrap>
                  Persistent drawer
                </Typography>
              </Toolbar>
            </AppBar>
            <Drawer
              type="persistent"
              classes={{
                paper: classes.drawerPaper,
              }}
              open={this.state.open}
            >
              <div className={classes.drawerInner}>
                <div className={classes.drawerHeader1}>
                  <IconButton onClick={this.handleDrawerClose}>
                    <ChevronLeftIcon />
                  </IconButton>
                </div>
                <Divider />
                <List className={classes.list}>mailFolderListItems</List>
                <Divider />
                <List className={classes.list}>otherMailFolderListItems</List>
              </div>
            </Drawer>
            <main className={classNames(classes.content, this.state.open && classes.contentShift)}>
              <Typography type="body1" noWrap>
                {'You think water moves fast? You should see ice.'}
              </Typography>
            </main>
          </div>
        </div>

        <h3>Mini variant drawer</h3>
        <p>In this variation, the persistent navigation drawer changes its width. Its resting state is as a mini-drawer at the same elevation as the content, clipped by the app bar. When expanded, it appears as the standard persistent navigation drawer.</p>
        <p>The mini variant is recommended for apps sections that need quick selection access alongside content.</p>
        <div className={classes.root}>
          <div className={classes.appFrame}>
            <AppBar className={classNames(classes.appBar_mini, this.state.open && classes.appBarShift_mini)}>
              <Toolbar disableGutters={!this.state.open}>
                <IconButton
                  color="contrast"
                  aria-label="open drawer"
                  onClick={this.handleDrawerOpen}
                  className={classNames(classes.menuButton, this.state.open && classes.hide_mini)}
                >
                  <MenuIcon />
                </IconButton>
                <Typography type="title" color="inherit" noWrap>
                  Mini variant drawer
                </Typography>
              </Toolbar>
            </AppBar>
            <Drawer
              type="permanent"
              classes={{
                paper: classNames(classes.drawerPaper_mini, !this.state.open && classes.drawerPaperClose),
              }}
              open={this.state.open}
            >
              <div className={classes.drawerInner}>
                <div className={classes.drawerHeader_mini}>
                  <IconButton onClick={this.handleDrawerClose}>
                    <ChevronLeftIcon />
                  </IconButton>
                </div>
                <Divider />
                <List className={classes.list}>mailFolderListItems</List>
                <Divider />
                <List className={classes.list}>otherMailFolderListItems</List>
              </div>
            </Drawer>
            <main className={classes.content}>
              <Typography type="body1" noWrap>
                {'You think water moves fast? You should see ice.'}
              </Typography>
            </main>
          </div>
        </div>

        <h3>Responsive drawer</h3>
        <p>The Hidden responsive helper component allows showing different types of drawer depending on the screen width. A temporary drawer is shown for small screens while a permanent drawer is shown for wider screens.</p>
        <div className={classes.root}>
          <div className={classes.appFrame}>
            <AppBar className={classes.appBar_res}>
              <Toolbar>
                <IconButton
                  color="contrast"
                  aria-label="open drawer"
                  onClick={this.handleDrawerToggle}
                  className={classes.navIconHide}
                >
                  <MenuIcon />
                </IconButton>
                <Typography type="title" color="inherit" noWrap>
                  Responsive drawer
                </Typography>
              </Toolbar>
            </AppBar>
            <Hidden mdUp>
              <Drawer
                type="temporary"
                open={this.state.mobileOpen}
                classes={{
                  paper: classes.drawerPaper_res,
                }}
                onRequestClose={this.handleDrawerToggle}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
              >
                {/*{this.drawer}*/}
              </Drawer>
            </Hidden>
            <Hidden mdDown implementation="css">
              <Drawer
                type="permanent"
                open
                classes={{
                  paper: classes.drawerPaper_res,
                }}
              >
                {/*{drawer}*/}
              </Drawer>
            </Hidden>
            <main className={classes.content_res}>
              <Typography type="body1" noWrap>
                {'You think water moves fast? You should see ice.'}
              </Typography>
            </main>
          </div>
        </div>

      </div>
    )
  }
}

Drawers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Drawers);