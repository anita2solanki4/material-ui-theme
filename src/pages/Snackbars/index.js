import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import { SnackbarContent } from 'material-ui/Snackbar';
import Slide from 'material-ui/transitions/Slide';
import Fade from 'material-ui/transitions/Fade';

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
    root: {
      marginTop: theme.spacing.unit * 3,
    },
    snackbar: {
      margin: theme.spacing.unit,
    },
  },
});
const action = (
  <Button color="accent" dense>
    lorem ipsum dolorem
  </Button>
);

class Snackbars extends React.Component{

  state = {
    open: false,
    message: null,
    vertical: null,
    horizontal: null,
    direction: null,
  };

  handleClick = () => {
    this.setState({ open: true });
  };

  handleRequestClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };
  handleClick_positioned = state => () => {
    this.setState({ open: true, ...state });
  };

  handleRequestClose_positioned = () => {
    this.setState({ open: false });
  };
  handleClick_controldirection = direction => () => {
    this.setState({ open: true, direction });
  };

  render(){
    const { classes } = this.props;
    const { vertical, horizontal, open } = this.state;

    return(
      <div>
        <h3>Snackbars</h3>
        <p>Snackbars provide brief feedback about an operation through a message - typically at the bottom of the screen.</p>
        <p>Snackbars contain a single line of text directly related to the operation performed. They may contain a text action, but no icons.</p>
        <p>Only one snackbar may be displayed at a time.</p>
        <h3>Simple</h3>
        <p>A basic snackbar that aims to reproduce Google Keep's snackbar behavior.</p>
        <div>
          <Button onClick={this.handleClick}>Open simple snackbar</Button>
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={this.state.open}
            autoHideDuration={6000}
            onRequestClose={this.handleRequestClose}
            SnackbarContentProps={{
              'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">Note archived</span>}
            action={[
              <Button key="undo" color="accent" dense onClick={this.handleRequestClose}>
                UNDO
              </Button>,
              <IconButton
                key="close"
                aria-label="Close"
                color="inherit"
                className={classes.close}
                onClick={this.handleRequestClose}
              >
                <CloseIcon />
              </IconButton>,
            ]}
          />
        </div>
        <h3>Message Length</h3>
        <p>Some snackbars with varying message length.</p>
        <div className={classes.root}>
          <SnackbarContent className={classes.snackbar} message="I love snacks." action={action} />
          <SnackbarContent
            className={classes.snackbar}
            message={
              'I love candy. I love cookies. I love cupcakes. \
              I love cheesecake. I love chocolate.'
            }
          />
          <SnackbarContent
            className={classes.snackbar}
            message="I love candy. I love cookies. I love cupcakes."
            action={action}
          />
          <SnackbarContent
            className={classes.snackbar}
            message={
              'I love candy. I love cookies. I love cupcakes. \
              I love cheesecake. I love chocolate.'
            }
            action={action}
          />
        </div>
        <h3>Positioned</h3>
        <p>There may be circumstances when the placement of the snackbar needs to be more flexible.</p>
        <div>
          <Button onClick={this.handleClick_positioned({ vertical: 'top', horizontal: 'center' })}>
            Top-Center
          </Button>
          <Button onClick={this.handleClick_positioned({ vertical: 'top', horizontal: 'right' })}>
            Top-Right
          </Button>
          <Button onClick={this.handleClick_positioned({ vertical: 'bottom', horizontal: 'right' })}>
            Bottom-Right
          </Button>
          <Button onClick={this.handleClick_positioned({ vertical: 'bottom', horizontal: 'center' })}>
            Bottom-Center
          </Button>
          <Button onClick={this.handleClick_positioned({ vertical: 'bottom', horizontal: 'left' })}>
            Bottom-Left
          </Button>
          <Button onClick={this.handleClick_positioned({ vertical: 'top', horizontal: 'left' })}>
            Top-Left
          </Button>
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onRequestClose={this.handleRequestClose_positioned}
            SnackbarContentProps={{
              'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">I love snacks</span>}
          />
        </div>
        <h3>Transitions</h3>
        <h4>Control Direction</h4>
        <p>Change the direction of the transition. Slide is the default transition.</p>
        <div>
          <Button onClick={this.handleClick_controldirection('left')}>Right</Button>
          <Button onClick={this.handleClick_controldirection('up')}>Up</Button>
          <Button onClick={this.handleClick_controldirection('right')}>Left</Button>
          <Button onClick={this.handleClick_controldirection('down')}>Down</Button>
          <Snackbar
            open={this.state.open}
            onRequestClose={this.handleRequestClose_positioned}
            transition={<Slide direction={this.state.direction} />}
            SnackbarContentProps={{
              'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">I love snacks</span>}
          />
        </div>

        <h4>Change Transition</h4>
        <p>Use a different transition all together.</p>
        <Button onClick={this.handleClick}>Open with Fade Transition</Button>
        <Snackbar
          open={this.state.open}
          onRequestClose={this.handleRequestClose_positioned}
          transition={Fade}
          SnackbarContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">I love snacks</span>}
        />

      </div>
    )
  }
}
Snackbars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Snackbars);