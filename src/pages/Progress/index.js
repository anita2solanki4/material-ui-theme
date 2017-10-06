import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
import green from 'material-ui/colors/green';
import Button from 'material-ui/Button';
import CheckIcon from 'material-ui-icons/Check';
import SaveIcon from 'material-ui-icons/Save';
import { LinearProgress } from 'material-ui/Progress';

const styles = theme => ({
  progress: {
    margin: `0 ${theme.spacing.unit * 2}px`,
  },
  wrapper: {
    position: 'relative',
  },
  successButton: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  progress_interactive: {
    color: green[500],
    position: 'absolute',
    top: -2,
    left: -2,
  },
  progress_determinant: {
    margin: `0 ${theme.spacing.unit * 2}px`,
  },
  root: {
    width: '100%',
    marginTop: 30,
  },
  root_query: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },

});

class Progress extends React.Component{
  state = {
    loading: false,
    success: false,
    completed: 0,
    buffer: 10,

  };
  componentWillUnmount() {
    clearTimeout(this.timer);
    clearInterval(this.timer_LinearDeterminant);
    clearInterval(this.timer_buffer);

  }
  handleButtonClick = () => {
    if (!this.state.loading) {
      this.setState(
        {
          success: false,
          loading: true,
        },
        () => {
          this.timer = setTimeout(() => {
            this.setState({
              loading: false,
              success: true,
            });
          }, 2e3);
        },
      );
    }
  };

  timer = undefined;
  timer_LinearDeterminant: number;
  timer_buffer: number;

  componentDidMount() {
    this.timer_LinearDeterminant = setInterval(this.progress, 500);
    this.timer_buffer = setInterval(this.progress_buffer, 500);

  }
  progress = () => {
    const { completed } = this.state;
    if (completed > 100) {
      this.setState({ completed: 0 });
    } else {
      const diff = Math.random() * 10;
      this.setState({ completed: completed + diff });
    }
  };
  progress_buffer = () => {
    const { completed } = this.state;
    if (completed > 100) {
      this.setState({ completed: 0, buffer: 10 });
    } else {
      const diff = Math.random() * 10;
      const diff2 = Math.random() * 10;
      this.setState({ completed: completed + diff, buffer: completed + diff + diff2 });
    }
  };
  render(){
    const classes = this.props.classes;
    const { loading, success } = this.state;
    const { completed, buffer } = this.state;

    let buttonClass = '';

    if (success) {
      buttonClass = classes.successButton;
    }

    return(
      <div>
        <h3>Progress</h3>
        <p>Progress and activity indicators are visual indications of an app loading content.</p>
        <p>A single visual indicator should be used to represent each type of operation. For example, a refresh operation should display either a refresh bar or an activity circle, but not both.</p>
        <p>Determinate indicators display how long an operation will take.</p>
        <p>Indeterminate indicators visualize an unspecified wait time.</p>
        <h3>Circular</h3>
        <h4>Indeterminate</h4>
        <CircularProgress className={classes.progress} />
        <CircularProgress className={classes.progress} size={50} />
        <CircularProgress color="accent" className={classes.progress} />
        <h4>Interactive Integration</h4>
        <div className={classes.wrapper}>
          <Button fab color="primary" className={buttonClass} onClick={this.handleButtonClick}>
            {success ? <CheckIcon /> : <SaveIcon />}
          </Button>
          {loading && <CircularProgress size={60} className={classes.progress_interactive} />}
        </div>

        <h4>Determinate</h4>
        <div>
          <CircularProgress className={classes.progress_determinant} mode="determinate" value={75} />
          <CircularProgress
            className={classes.progress_determinant}
            size={50}
            mode="determinate"
            value={25}
            min={0}
            max={50}
          />
          <CircularProgress className={classes.progress_determinant} color="accent" mode="determinate" value={75} />
          <CircularProgress
            className={classes.progress_determinant}
            color="accent"
            size={50}
            mode="determinate"
            value={25}
            min={0}
            max={50}
          />
        </div>
        <h3>Linear</h3>
        <h4>Indeterminate</h4>
        <div className={classes.root}>
          <LinearProgress />
          <br />
          <LinearProgress color="accent" />
        </div>
        <h4>Determinate</h4>
        <div className={classes.root}>
          <LinearProgress mode="determinate" value={this.state.completed} />
          <br />
          <LinearProgress color="accent" mode="determinate" value={this.state.completed} />
        </div>
        <h4>Buffer</h4>
        <div className={classes.root}>
          <LinearProgress mode="buffer" value={completed} valueBuffer={buffer} />
          <br />
          <LinearProgress color="accent" mode="buffer" value={completed} valueBuffer={buffer} />
        </div>
        <h4>Query</h4>
        <div className={classes.root_query}>
          <LinearProgress mode="query" />
          <br />
          <LinearProgress color="accent" mode="query" />
        </div>
      </div>
    )
  }
}
Progress.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Progress);