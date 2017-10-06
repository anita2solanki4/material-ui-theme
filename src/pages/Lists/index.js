import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemSecondaryAction,  ListItemText,
  ListSubheader, ListItemAvatar} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import Avatar from 'material-ui/Avatar';
import FolderIcon from 'material-ui-icons/Folder';
import Collapse from 'material-ui/transitions/Collapse';
import SendIcon from 'material-ui-icons/Send';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import StarBorder from 'material-ui-icons/StarBorder';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import CommentIcon from 'material-ui-icons/Comment';
import Switch from 'material-ui/Switch';
import WifiIcon from 'material-ui-icons/Wifi';
import BluetoothIcon from 'material-ui-icons/Bluetooth';
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import DeleteIcon from 'material-ui-icons/Delete';
import StarIcon from 'material-ui-icons/Star';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  rootpin: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
  },
  listSection: {
    background: 'inherit',
  },
  rooti: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    background: theme.palette.background.paper,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
});


function generate(element) {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

class Lists extends React.Component{

 state = { open: true,    checked: [0],    checked1: [1],    checked2: ['wifi'], dense: false,
  secondary: false,};

 handleClick = () => {
  this.setState({ open: !this.state.open });
};
 handleToggle = value => () => {
   const { checked } = this.state;
  const currentIndex = checked.indexOf(value);
  const newChecked = [...checked];

  if (currentIndex === -1) {
    newChecked.push(value);
  } else {
    newChecked.splice(currentIndex, 1);
  }

  this.setState({
    checked: newChecked,
  });
};
 handleToggle1 = value => () => {
  const { checked1 } = this.state;
  const currentIndex = checked1.indexOf(value);
  const newChecked = [...checked1];

  if (currentIndex === -1) {
    newChecked.push(value);
  } else {
    newChecked.splice(currentIndex, 1);
  }
  this.setState({
    checked1: newChecked,
  });
};
 handleToggle2 = value => () => {
  const { checked2 } = this.state;
  const currentIndex = checked2.indexOf(value);
  const newChecked = [...checked2];
  if (currentIndex === -1) {
    newChecked.push(value);
  } else {
    newChecked.splice(currentIndex, 1);
  }
  this.setState({
    checked2: newChecked,
  });
};
  render(){
    const classes = this.props.classes;
    const { dense, secondary } = this.state;

  return(
      <div>
      <h3>Lists</h3>
        <p>Lists present multiple line items vertically as a single continuous element.</p>
        <p>Lists are made up of a continuous column of rows. Each row contains a tile. Primary actions fill the tile, and supplemental actions are represented by icons and text.</p>
        <p>Lists are best suited for similar data types.</p>
        <h3>Simple List</h3>
        <div className={classes.root}>
          <List>
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button>
              <ListItemText primary="Trash" />
            </ListItem>
            <ListItem button component="a" href="#simple-list">
              <ListItemText primary="Spam" />
            </ListItem>
          </List>
        </div>
        <h3>Folder List</h3>
        <div className={classes.root}>
          <List>
            <ListItem button>
              <Avatar>
                <FolderIcon />
              </Avatar>
              <ListItemText primary="Photos" secondary="Jan 9, 2016" />
            </ListItem>
            <ListItem button>
              <Avatar>
                <FolderIcon />
              </Avatar>
              <ListItemText primary="Work" secondary="Jan 7, 2016" />
            </ListItem>
          </List>
        </div>

        <h3>Inset List</h3>
        <List className={classes.root}>
          <ListItem button>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText inset primary="Chelsea Otakan" />
          </ListItem>
          <ListItem button>
            <ListItemText inset primary="Eric Hoffman" />
          </ListItem>
        </List>c
        <h3>Nested List</h3>
        <List className={classes.root} subheader={<ListSubheader>Nested List Items</ListSubheader>}>
          <ListItem button>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText inset primary="Sent mail" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText inset primary="Drafts" />
          </ListItem>
          <ListItem button onClick={this.handleClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText inset primary="Inbox" />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open} transitionDuration="auto" unmountOnExit>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText inset primary="Starred" />
            </ListItem>
          </Collapse>
        </List>

        <h3>Pinned Subheader List</h3>
        <p>Upon scrolling, subheaders remain pinned to the top of the screen until pushed off screen by the next subheader</p>
        <p>This feature is relying on the CSS sticky positioning. Unfortunately it's not implemented by all the browsers we are supporting. We default to disableSticky when not supported.</p>
        <List className={classes.rootpin} subheader>
          {[0, 1, 2, 3, 4].map(sectionId => (
            <div key={`section-${sectionId}`} className={classes.listSection}>
              <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>
              {[0, 1, 2].map(item => (
                <ListItem button key={`item-${sectionId}-${item}`}>
                  <ListItemText primary={`Item ${item}`} />
                </ListItem>
              ))}
            </div>
          ))}
        </List>


        <h3>List Controls</h3>
        <h4>Checkbox</h4>
        <p>A checkbox can either be a primary action or a secondary action.</p>
        <p>The checkbox is the primary action and the state indicator for the list item. The comment button is a secondary action and a separate target.</p>
        <div className={classes.root}>
          <List>
            {[0, 1, 2, 3].map(value => (
              <ListItem
                key={value}
                dense
                button
                onClick={this.handleToggle(value)}
                className={classes.listItem}
              >
                <Checkbox
                  checked={this.state.checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                />
                <ListItemText primary={`Line item ${value + 1}`} />
                <ListItemSecondaryAction>
                  <IconButton aria-label="Comments">
                    <CommentIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </div>

        <p>  The checkbox is the secondary action for the list item and a separate target.</p>

        <div className={classes.root}>
          <List>
            {[0, 1, 2, 3].map(value => (
              <ListItem key={value} dense button className={classes.listItem}>
                <Avatar alt="Remy Sharp" src="/static/images/remy.jpg" />
                <ListItemText primary={`Line item ${value + 1}`} />
                <ListItemSecondaryAction>
                  <Checkbox
                    onClick={this.handleToggle1(value)}
                    checked={this.state.checked1.indexOf(value) !== -1}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </div>

        <h3>Switch</h3>
        <p>The switch is the secondary action and a separate target.</p>

        <div className={classes.root}>
          <List subheader={<ListSubheader>Settings</ListSubheader>}>
            <ListItem>
              <ListItemIcon>
                <WifiIcon />
              </ListItemIcon>
              <ListItemText primary="Wi-Fi" />
              <ListItemSecondaryAction>
                <Switch
                  onClick={this.handleToggle2('wifi')}
                  checked={this.state.checked2.indexOf('wifi') !== -1}
                />
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <BluetoothIcon />
              </ListItemIcon>
              <ListItemText primary="Bluetooth" />
              <ListItemSecondaryAction>
                <Switch
                  onClick={this.handleToggle2('bluetooth')}
                  checked={this.state.checked2.indexOf('bluetooth') !== -1}
                />
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </div>
        <h3>Interactive</h3>
        <p>Below is an interactive demo that lets you explore the visual results of the different settings:</p>

        <div className={classes.rooti}>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={dense}
                  onChange={(event, checked) => this.setState({ dense: checked })}
                  value="dense"
                />
              }
              label="Enable dense"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={secondary}
                  onChange={(event, checked) => this.setState({ secondary: checked })}
                  value="secondary"
                />
              }
              label="Enable secondary text"
            />
          </FormGroup>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Typography type="title" className={classes.title}>
                Text only
              </Typography>
              <div className={classes.demo}>
                <List dense={dense}>
                  {generate(
                    <ListItem button>
                      <ListItemText
                        primary="Single-line item"
                        secondary={secondary ? 'Secondary text' : null}
                      />
                    </ListItem>,
                  )}
                </List>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography type="title" className={classes.title}>
                Icon with text
              </Typography>
              <div className={classes.demo}>
                <List dense={dense}>
                  {generate(
                    <ListItem button>
                      <ListItemIcon>
                        <FolderIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Single-line item"
                        secondary={secondary ? 'Secondary text' : null}
                      />
                    </ListItem>,
                  )}
                </List>
              </div>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Typography type="title" className={classes.title}>
                Avatar with text
              </Typography>
              <div className={classes.demo}>
                <List dense={dense}>
                  {generate(
                    <ListItem button>
                      <ListItemAvatar>
                        <Avatar>
                          <FolderIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Single-line item"
                        secondary={secondary ? 'Secondary text' : null}
                      />
                    </ListItem>,
                  )}
                </List>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography type="title" className={classes.title}>
                Avatar with text and icon
              </Typography>
              <div className={classes.demo}>
                <List dense={dense}>
                  {generate(
                    <ListItem button>
                      <ListItemAvatar>
                        <Avatar>
                          <FolderIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Single-line item"
                        secondary={secondary ? 'Secondary text' : null}
                      />
                      <ListItemSecondaryAction>
                        <IconButton aria-label="Delete">
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>,
                  )}
                </List>
              </div>
            </Grid>
          </Grid>
        </div>

      </div>
    )}
}
Lists.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Lists);

