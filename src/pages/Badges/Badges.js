import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Badge from 'material-ui/Badge';
import MailIcon from 'material-ui-icons/Mail';
import FolderIcon from 'material-ui-icons/Folder';
import Style from './style';

const styles = (theme) => (Style);

 class Badges extends React.Component{
  render(){
    const classes = this.props.classes;
    return (
      <div>
        <h3>Badge</h3>
        <p>Badge generates a small badge to the top-right of its child(ren).</p>
        <h3>Simple examples</h3>
        <p>Two examples of badges containing text, using primary and accent colors. The badge is applied to its <children className=""></children></p>
        <div>
        <Badge className={classes.badge} badgeContent={4} color="primary">
          <MailIcon />
        </Badge>
        <Badge className={classes.badge} badgeContent={10} color="accent">
          <FolderIcon />
        </Badge>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Badges);