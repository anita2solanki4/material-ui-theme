import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

function Papers(props) {
  const classes = props.classes;
  return (
    <div>
      <h3>Paper</h3>
      <p>In material design, the physical properties of paper are translated to the screen. The background of an application resembles the flat, opaque texture of a sheet of paper, and an application’s behavior mimics paper’s ability to be re-sized, shuffled, and bound together in multiple sheets.</p>
      <Paper className={classes.root} elevation={4}>
        <Typography type="headline" component="h3">
          This is a sheet of paper.
        </Typography>
        <Typography type="body1" component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography>
      </Paper>
    </div>
  );
}

Papers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Papers);