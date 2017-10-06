import React, { Component } from 'react'
import {Avatar, Typography} from 'material-ui';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Style from './style';
import avatar1 from '../../images/avatar1.png'
import avatar2 from '../../images/avatar2.png'

const styles = (theme) => (Style);

class Avatars extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.row}>
        <Typography type="display1" gutterBottom>
          Image Avatars
        </Typography>
        <Avatar alt="Remy Sharp" src={avatar1} className={classes.avatar} />
        <Avatar
          alt="Adelle Charles"
          src={avatar2}
          className={classNames(classes.avatar, classes.bigAvatar)}
        />
      </div>
    )
  }
}

export default withStyles(styles)(Avatars);