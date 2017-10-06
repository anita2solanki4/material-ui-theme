import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MobileStepper from 'material-ui/MobileStepper';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import KeyboardArrowLeft from 'material-ui-icons/KeyboardArrowLeft';
import KeyboardArrowRight from 'material-ui-icons/KeyboardArrowRight';

const styles = theme => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    marginBottom: 20,
    background: theme.palette.background.default,
  },
});

class Stepper extends React.Component{
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState({
      activeStep: this.state.activeStep + 1,
    });
  };

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1,
    });
  };
  render(){
    const classes = this.props.classes;

    return(
      <div>
        <h3>Stepper</h3>
        <p>Steppers convey progress through numbered steps.</p>
        <h4>Mobile Stepper</h4>
        <p>This component implements a compact stepper suitable for a mobile device. See mobile steps for it's inspiration.</p>
        <h5>Mobile Stepper - Text</h5>
        <p>This is essentially a back/next button positioned correctly. You must implement the textual description yourself however an example is provided below for reference.</p>
        <div className={classes.root}>
          <Paper square elevation={0} className={classes.header}>
            <Typography>Step {this.state.activeStep + 1} of 6</Typography>
          </Paper>
          <MobileStepper
            type="text"
            steps={6}
            position="static"
            activeStep={this.state.activeStep}
            className={classes.mobileStepper}
            nextButton={
              <Button dense onClick={this.handleNext} disabled={this.state.activeStep === 5}>
                Next
                <KeyboardArrowRight />
              </Button>
            }
            backButton={
              <Button dense onClick={this.handleBack} disabled={this.state.activeStep === 0}>
                <KeyboardArrowLeft />
                Back
              </Button>
            }
          />
        </div>
        <h5>Mobile Stepper - Dots</h5>
        <p>Use dots when the number of steps isn’t large.</p>
        <MobileStepper
          type="dots"
          steps={6}
          position="static"
          activeStep={this.state.activeStep}
          className={classes.root}
          nextButton={
            <Button dense onClick={this.handleNext} disabled={this.state.activeStep === 5}>
              Next
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button dense onClick={this.handleBack} disabled={this.state.activeStep === 0}>
              <KeyboardArrowLeft />
              Back
            </Button>
          }
        />
        <h5>Mobile Stepper - Progress</h5>
        <p>Use a progress bar when there are many steps, or if there are steps that need to be inserted during the process (based on responses to earlier steps).</p>
        <MobileStepper
          type="progress"
          steps={6}
          position="static"
          activeStep={this.state.activeStep}
          className={classes.root}
          nextButton={
            <Button dense onClick={this.handleNext} disabled={this.state.activeStep === 5}>
              Next
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button dense onClick={this.handleBack} disabled={this.state.activeStep === 0}>
              <KeyboardArrowLeft />
              Back
            </Button>
          }
        />
      </div>
    )
  }
}
Stepper.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Stepper);