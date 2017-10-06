import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Checkbox from 'material-ui/Checkbox';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormGroup, FormControlLabel, FormHelperText} from 'material-ui/Form';
import green from 'material-ui/colors/green';
import Switch from 'material-ui/Switch';

const styles = theme =>({
  checked: {
    color: green[500],
  },
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
  bar: {},
  checked_switches: {
    color: green[500],
    '& + $bar': {
      backgroundColor: green[500],
    },
  },
});

class Selection_Controls extends React.Component{
  state = {
    checkedA: true,
    checkedB: false,
    checkedF: true,
    checkedG: true,
    gilad: true,
    jason: false,
    antoine: true,
    value: '',
    selectedValue: undefined,
    checkedE: true,

  };

  handleChange = name => (event, checked) => {
    this.setState({ [name]: checked });
  };
   handleChange_value = (event, value) => {
  this.setState({ value });

};
  handleChange_Radio = event => {
    this.setState({ selectedValue: event.currentTarget.value });
  };

  render(){
    const { classes } = this.props;

    return(
      <div>
        <h3>Selection Controls</h3>
        <p>Selection controls allow the user to select options.</p>
        <p>Three types of selection controls are covered in this guidance:</p>
        <li>Checkboxes allow the selection of multiple options from a set.</li>
        <li>Radio buttons allow the selection of a single option from a set.</li>
        <li>Switches allow a selection to be turned on or off.</li>
        <h4>Checkboxes</h4>
        <p>Checkboxes allow the user to select multiple options from a set.</p>
        <p>If you have multiple options appearing in a list, you can preserve space by using checkboxes instead of on/off switches.</p>
        <p>If you have a single option, avoid using a checkbox and use an on/off switch instead.</p>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.checkedA}
                onChange={this.handleChange('checkedA')}
                value="checkedA"
              />
            }
            label="Option A"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.checkedB}
                onChange={this.handleChange('checkedB')}
                value="checkedB"
              />
            }
            label="Option B"
          />
          <FormControlLabel control={<Checkbox value="checkedC" />} label="Option C" />
          <FormControlLabel disabled control={<Checkbox value="checkedD" />} label="Disabled" />
          <FormControlLabel
            disabled
            control={<Checkbox checked value="checkedE" />}
            label="Disabled"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.checkedF}
                onChange={this.handleChange('checkedF')}
                value="checkedF"
                indeterminate
              />
            }
            label="Indeterminate"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.checkedG}
                onChange={this.handleChange('checkedG')}
                classes={{
                  checked: classes.checked,
                }}
                value="checkedG"
              />
            }
            label="Custom color"
          />
        </FormGroup>
        <p>FormGroup is a helpful wrapper used to group selection controls components that provides an easier API.</p>
        <FormControl component="fieldset">
          <FormLabel component="legend">Assign responsibility</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.gilad}
                  onChange={this.handleChange('gilad')}
                  value="gilad"
                />
              }
              label="Gilad Gray"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.jason}
                  onChange={this.handleChange('jason')}
                  value="jason"
                />
              }
              label="Jason Killian"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.antoine}
                  onChange={this.handleChange('antoine')}
                  value="antoine"
                />
              }
              label="Antoine Llorca"
            />
          </FormGroup>
          <FormHelperText>Be careful</FormHelperText>
        </FormControl>

        <h3> Radio Buttons</h3>
        <p>Radio buttons allow the user to select one option from a set. Use radio buttons for exclusive selection if you think that the user needs to see all available options side-by-side.</p>
        <p>Otherwise, consider a dropdown, which uses less space than displaying all options.</p>
        <p>RadioGroup is a helpful wrapper used to group Radio components that provides an easier API, and proper keyboard accessibility to the group.</p>
        <div className={classes.root}>
          <FormControl component="fieldset" required className={classes.formControl}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender"
              className={classes.group}
              value={this.state.value}
              onChange={this.handleChange_value}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
              <FormControlLabel value="disabled" disabled control={<Radio />} label="Disabled" />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset" required error className={classes.formControl}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender"
              className={classes.group}
              value={this.state.value}
              onChange={this.handleChange_value}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
              <FormControlLabel value="disabled" disabled control={<Radio />} label="Disabled" />
            </RadioGroup>
            <FormHelperText>You can display an error</FormHelperText>
          </FormControl>
        </div>
        <p>Radio can also be used standalone, without the wrapper.</p>
        <div>
        <Radio
          checked={this.state.selectedValue === 'a'}
          onChange={this.handleChange_Radio}
          value="a"
          name="radio button demo"
          aria-label="A"
        />
        <Radio
          checked={this.state.selectedValue === 'b'}
          onChange={this.handleChange_Radio}
          value="b"
          name="radio button demo"
          aria-label="B"
        />
        <Radio
          checked={this.state.selectedValue === 'c'}
          onChange={this.handleChange_Radio}
          value="c"
          name="radio button demo"
          aria-label="C"
        />
        </div>
        <h3>Switches</h3>
        <p>On/off switches toggle the state of a single settings option. The option that the switch controls, as well as the state it’s in, should be made clear from the corresponding inline label.</p>
       <div>
        <Switch
          checked={this.state.checkedA}
          onChange={this.handleChange('checkedA')}
          aria-label="checkedA"
        />
        <Switch
          checked={this.state.checkedB}
          onChange={this.handleChange('checkedB')}
          aria-label="checkedB"
        />
        <Switch checked={false} aria-label="checkedC" disabled />
        <Switch checked aria-label="checkedD" disabled />
        <Switch
          classes={{
            checked_switches: classes.checked_switches,
            bar: classes.bar,
          }}
          checked={this.state.checkedE}
          onChange={this.handleChange('checkedE')}
          aria-label="checkedD"
        />
       </div>
      <p>Switch can also be used with a label description thanks to the FormControlLabel component.</p>
       <div>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={this.state.checkedA}
                onChange={(event, checked) => this.setState({ checkedA: checked })}
              />
            }
            label="A"
          />
          <FormControlLabel
            control={
              <Switch
                checked={this.state.checkedB}
                onChange={(event, checked) => this.setState({ checkedB: checked })}
              />
            }
            label="B"
          />
          <FormControlLabel control={<Switch />} disabled label="C" />
        </FormGroup>
       </div>
      </div>
    )
  }
}
Selection_Controls.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Selection_Controls);