import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});
function Pickers(props) {
  const { classes } = props;

    return(
      <div>
        <h3>Pickers</h3>
        <p>Pickers provide a simple way to select a single value from a pre-determined set.</p>
        <li>On mobile, pickers are best suited for display in confirmation dialog.</li>
        <li>For inline display, such as on a form, consider using compact controls such as segmented dropdown buttons.</li>
        <h4>Notice</h4>
        <p>We are currently falling back to native input controls. If you are interested in implementing or have implemented a rich Material Design Picker with an awesome UX, please, let us know on #4787 and #4796! We could add a link to or a demo of your project in the documentation.</p>
        <h3>Date pickers</h3>
        <form className={classes.container} noValidate>
          <TextField
            id="date"
            label="Birthday"
            type="date"
            defaultValue="2017-05-24"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
        <h3>Time pickers</h3>
        <form className={classes.container} noValidate>
          <TextField
            id="time"
            label="Alarm clock"
            type="time"
            defaultValue="07:30"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />
        </form>
        <h3>Date & Time pickers</h3>
        <form className={classes.container} noValidate>
          <TextField
            id="datetime-local"
            label="Next appointment"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      </div>
    )
}

Pickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Pickers);