import React from 'react';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui-icons/MoreVert';
const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
  },
});

const options = [
  'Show all notification content',
  'Hide sensitive notification content',
  'Hide all notification content',
];

const options1 = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel',
];

const ITEM_HEIGHT = 48;
class Menus extends  React.Component{
  state = {
    anchorEl: null,
    open: false,
    selectedIndex: 1,
  };

  handleClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  button = undefined;

  handleClickListItem = event => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  handleMenuItemClick = (event, index) => {
    this.setState({ selectedIndex: index, open: false });
  };


  render(){
    const classes = this.props.classes;
    return(
      <div>

        <h3>Menus</h3>
        <p>Menus display a list of choices on a transient sheet of material.</p>
        <p>Menus appear upon interaction with a button, action, or other control. They display a list of choices, with one choice per line.</p>
         <p>Menu items may be disabled if not applicable to a certain context. Contextual menus dynamically change their available menu items based on the current state of the app.</p>
         <p>Menus should not be used as a primary method for navigation within an app.</p>
          <h3>Simple menus</h3>
        <p>Simple menus open over the anchor element by default (this option can be changed via props). When close to a screen edge, simple menus vertically realign to make all menu items are completely visible.</p>
        <p>Choosing an option should immediately ideally commit the option and close the menu.</p>
        <p>Disambiguation: In contrast to simple menus, simple dialogs can present additional detail related to the options available for a list item or provide navigational or orthogonal actions related to the primary task. Although they can display the same content, simple menus are preferred over simple dialogs because simple menus are less disruptive to the user’s current context.</p>
        <Button
          aria-owns={this.state.open ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Open Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
        >
          <MenuItem onClick={this.handleRequestClose}>Profile</MenuItem>
          <MenuItem onClick={this.handleRequestClose}>My account</MenuItem>
          <MenuItem onClick={this.handleRequestClose}>Logout</MenuItem>
        </Menu>

        <h3>Selected menus</h3>
          <p>If used for item selection, when opened, simple menus attempt to vertically align the currently selected menu item with the anchor element. The currently selected menu item is set using the selected prop.</p>
        <div className={classes.root}>
          <List>
            <ListItem
              button
              aria-haspopup="true"
              aria-controls="lock-menu"
              aria-label="When device is locked"
              onClick={this.handleClickListItem}
            >
              <ListItemText
                primary="When device is locked"
                secondary={options[this.state.selectedIndex]}
              />
            </ListItem>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={this.state.anchorEl}
            open={this.state.open}
            onRequestClose={this.handleRequestClose}
          >
            {options.map((option, index) => (
              <MenuItem
                key={option}
                selected={index === this.state.selectedIndex}
                onClick={event => this.handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
        <p>If text in a simple menu wraps to a second line, use a simple dialog instead. Simple dialogs can have rows with varying heights.
        <h3>Max height menus</h3>
          <p>If the height of a menu prevents all menu items from being displayed, the menu can scroll internally.</p></p>
          <IconButton
            aria-label="More"
            aria-owns={this.state.open ? 'long-menu' : null}
            aria-haspopup="true"
            onClick={this.handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={this.state.anchorEl}
            open={this.state.open}
            onRequestClose={this.handleRequestClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: 200,
              },
            }}
          >
            {options1.map(option => (
              <MenuItem key={option} selected={option === 'Pyxis'} onClick={this.handleRequestClose}>
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
    )
  }
}

Menus.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Menus);