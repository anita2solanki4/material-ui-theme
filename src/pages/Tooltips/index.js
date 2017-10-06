import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AddIcon from 'material-ui-icons/Add';
import Button from 'material-ui/Button';
import DeleteIcon from 'material-ui-icons/Delete';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import Tooltip from 'material-ui/Tooltip';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit * 2,
  },
  absolute: {
    position: 'absolute',
    bottom: 32,
    right: 32,
  },
  root: {
    width: 500,
  },
});

class Tooltips extends React.Component{
  state = {
    placement: 'bottom',
    open: false,

  };

  handlePlacementChange = (event, placement) => {
    this.setState({ placement });
  };
  handleIconButtonRequestClose = () => {
    this.setState({ open: false });
  };

  handleIconButtonRequestOpen = () => {
    this.setState({ open: true });
  };

  render(){
    const classes = this.props.classes;

    return(
      <div>
        <h3>Tooltips</h3>
        <p>The tooltips are text labels that appear when the user hovers over, focuses on, or touches an element.</p>
        <h4>Simple Tooltips</h4>
        <div>
          <Tooltip id="tooltip-icon" title="Delete" placement="bottom">
            <IconButton aria-label="Delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
          <Tooltip id="tooltip-fab" className={classes.fab} title="Add" placement="bottom">
            <Button fab color="primary" aria-label="Add">
              <AddIcon />
            </Button>
          </Tooltip>
          <br />
          <br />
          <Typography>{'The fab on the right is absolutly positionned:'}</Typography>
          <Tooltip placement="bottom" title="Position absolute">
            <Button fab color="accent" className={this.props.classes.absolute}>
              <AddIcon />
            </Button>
          </Tooltip>
        </div>
        <h4>Positioned Tooltips</h4>
        <p>The Tooltip has 12 placements choice. They don’t have directional arrows; instead, they rely on motion emanating from the source to convey direction.</p>
        <div className={classes.root}>
          <Grid container justify="center">
            <Grid item>
              <Tooltip
                id="tooltip-top-start"
                className={classes.fab}
                title="Add"
                placement="top-start"
              >
                <Button>top-start</Button>
              </Tooltip>
              <Tooltip id="tooltip-top" className={classes.fab} title="Add" placement="top">
                <Button>top</Button>
              </Tooltip>
              <Tooltip id="tooltip-top-end" className={classes.fab} title="Add" placement="top-end">
                <Button>top-end</Button>
              </Tooltip>
            </Grid>
          </Grid>
          <Grid container justify="center">
            <Grid item xs={6}>
              <Tooltip
                id="tooltip-left-start"
                className={classes.fab}
                title="Add"
                placement="left-start"
              >
                <Button>left-start</Button>
              </Tooltip>
              <br />
              <Tooltip id="tooltip-left" className={classes.fab} title="Add" placement="left">
                <Button>left</Button>
              </Tooltip>
              <br />
              <Tooltip id="tooltip-left-end" className={classes.fab} title="Add" placement="left-end">
                <Button>left-end</Button>
              </Tooltip>
            </Grid>
            <Grid item container xs={6} align="flex-end" direction="column" spacing={0}>
              <Grid item>
                <Tooltip
                  id="tooltip-right-start"
                  className={classes.fab}
                  title="Add"
                  placement="right-start"
                >
                  <Button>right-start</Button>
                </Tooltip>
              </Grid>
              <Grid item>
                <Tooltip id="tooltip-right" className={classes.fab} title="Add" placement="right">
                  <Button>right</Button>
                </Tooltip>
              </Grid>
              <Grid item>
                <Tooltip
                  id="tooltip-right-end"
                  className={classes.fab}
                  title="Add"
                  placement="right-end"
                >
                  <Button>right-end</Button>
                </Tooltip>
              </Grid>
            </Grid>
          </Grid>
          <Grid container justify="center">
            <Grid item>
              <Tooltip
                id="tooltip-bottom-start"
                className={classes.fab}
                title="Add"
                placement="bottom-start"
              >
                <Button>bottom-start</Button>
              </Tooltip>
              <Tooltip id="tooltip-bottom" className={classes.fab} title="Add" placement="bottom">
                <Button>bottom</Button>
              </Tooltip>
              <Tooltip
                id="tooltip-bottom-end"
                className={classes.fab}
                title="Add"
                placement="bottom-end"
              >
                <Button>bottom-end</Button>
              </Tooltip>
            </Grid>
          </Grid>
        </div>
        <h4>Controlled Tooltips</h4>
        <Tooltip
          id="tooltip-controlled"
          title="Delete"
          onRequestClose={this.handleIconButtonRequestClose}
          enterDelay={300}
          leaveDelay={300}
          onRequestOpen={this.handleIconButtonRequestOpen}
          open={this.state.open}
          placement="bottom"
        >
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <h4>Showing and hiding</h4>
        <p>The tooltip is immediately shown when the user's mouse hovers over the element and immediately hides when the user's mouse leaves. A delay in showing or hiding the tooltip can be added through the properties enterDelay and leaveDelay.</p>
        <p>On mobile, the tooltip is displayed when the user longpresses the element and hides after a delay of 1500ms. You can disable this feature with the disableTriggerTouch property.</p>
      </div>
    )
  }
}
Tooltips.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tooltips);