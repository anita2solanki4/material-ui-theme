import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import FolderIcon from 'material-ui-icons/Folder';
import ImageIcon from 'material-ui-icons/Image';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: '360px',
    background: theme.palette.background.paper,
  },
});

function Dividers(props) {

  const classes = props.classes;

    return(
      <div>
      <h3>Dividers</h3>
        <p>Dividers group and separate content within lists and page layouts. The divider is a thin rule, lightweight yet sufficient to distinguish content visually and spatially.</p>
        <h3>List Dividers</h3>
        <List className={classes.root}>
          <ListItem button>
            <ListItemText primary="Inbox" />
          </ListItem>
          <Divider light />
          <ListItem button>
            <ListItemText primary="Drafts" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Trash" />
          </ListItem>
        </List>
        <h3>Inset Dividers</h3>
        <List className={classes.root}>
          <ListItem button>
            <Avatar>
              <FolderIcon />
            </Avatar>
            <ListItemText primary="Work" secondary="Jan 28, 2014" />
          </ListItem>
          <Divider inset />
          <ListItem button>
            <Avatar>
              <ImageIcon />
            </Avatar>
            <ListItemText primary="Vacation" secondary="Jan 20, 2014" />
          </ListItem>
        </List>

      </div>
    )
}
Dividers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dividers);
