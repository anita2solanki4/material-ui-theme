import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';
import Button from 'material-ui/Button';
import Dialog, { DialogActions, DialogContent, DialogTitle } from 'material-ui/Dialog'
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    maxWidth: 300,
  },
});
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];
class Selects extends React.Component{
  state = {
    age: '',
    name: 'hai',
    name_multiple: [],
    open: false,

  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
    this.setState({ [name]: Number(event.target.value) });

  };
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };
  render(){
    const classes = this.props.classes;

    return(
      <div>
        <h3>Selects</h3>
        <h4>Simple select</h4>
        <p>Menus are positioned over their emitting elements such that the currently selected menu item appears on top of the emitting element.</p>
        <form className={classes.container} autoComplete="off">
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-simple">Age</InputLabel>
            <Select
              value={this.state.age}
              onChange={this.handleChange('age')}
              input={<Input id="age-simple" />}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-helper">Age</InputLabel>
            <Select
              value={this.state.age}
              onChange={this.handleChange('age')}
              input={<Input id="age-helper" />}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <FormHelperText>Some important helper text</FormHelperText>
          </FormControl>
          <FormControl className={classes.formControl} disabled>
            <InputLabel htmlFor="name-disabled">Name</InputLabel>
            <Select
              value={this.state.name}
              onChange={this.handleChange('name')}
              input={<Input id="name-disabled" />}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="hai">Hai</MenuItem>
              <MenuItem value="olivier">Olivier</MenuItem>
              <MenuItem value="kevin">Kevin</MenuItem>
            </Select>
            <FormHelperText>Disabled</FormHelperText>
          </FormControl>
          <FormControl className={classes.formControl} error>
            <InputLabel htmlFor="name-error">Name</InputLabel>
            <Select
              value={this.state.name}
              onChange={this.handleChange('name')}
              renderValue={value => `⚠️  - ${value}`}
              input={<Input id="name-error" />}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="hai">Hai</MenuItem>
              <MenuItem value="olivier">Olivier</MenuItem>
              <MenuItem value="kevin">Kevin</MenuItem>
            </Select>
            <FormHelperText>Error</FormHelperText>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="name-input">Name</InputLabel>
            <Input id="name-input" />
            <FormHelperText>Alignment with an input</FormHelperText>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="name-readonly">Name</InputLabel>
            <Select
              value={this.state.name}
              onChange={this.handleChange('name')}
              input={<Input id="name-readonly" readOnly />}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="hai">Hai</MenuItem>
              <MenuItem value="olivier">Olivier</MenuItem>
              <MenuItem value="kevin">Kevin</MenuItem>
            </Select>
            <FormHelperText>Read only</FormHelperText>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-simple">Age</InputLabel>
            <Select
              value={this.state.age}
              onChange={this.handleChange('age')}
              input={<Input id="age-simple" />}
              autoWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <FormHelperText>Auto width</FormHelperText>
          </FormControl>
        </form>
        <h3>Native Select</h3>
        <p>As the user experience can be improved on mobile using the native select of the platform, we allow such pattern.</p>
        <div className={classes.container}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-native-simple">Age</InputLabel>
            <Select
              native
              value={this.state.age}
              onChange={this.handleChange('age')}
              input={<Input id="age-native-simple" />}
            >
              <option value="" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-native-helper">Age</InputLabel>
            <Select
              native
              value={this.state.age}
              onChange={this.handleChange('age')}
              input={<Input id="age-native-helper" />}
            >
              <option value="" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Select>
            <FormHelperText>Some important helper text</FormHelperText>
          </FormControl>
          <FormControl className={classes.formControl} disabled>
            <InputLabel htmlFor="name-native-disabled">Name</InputLabel>
            <Select
              native
              value={this.state.name}
              onChange={this.handleChange('name')}
              input={<Input id="name-native-disabled" />}
            >
              <option value="" />
              <optgroup label="Author">
                <option value="hai">Hai</option>
              </optgroup>
              <optgroup label="Contributors">
                <option value="olivier">Olivier</option>
                <option value="kevin">Kevin</option>
              </optgroup>
            </Select>
            <FormHelperText>Disabled</FormHelperText>
          </FormControl>
          <FormControl className={classes.formControl} error>
            <InputLabel htmlFor="name-native-error">Name</InputLabel>
            <Select
              native
              value={this.state.name}
              onChange={this.handleChange('name')}
              input={<Input id="name-native-error" />}
            >
              <option value="" />
              <optgroup label="Author">
                <option value="hai">Hai</option>
              </optgroup>
              <optgroup label="Contributors">
                <option value="olivier">Olivier</option>
                <option value="kevin">Kevin</option>
              </optgroup>
            </Select>
            <FormHelperText>Error</FormHelperText>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="name-input">Name</InputLabel>
            <Input id="name-input" />
            <FormHelperText>Alignment with an input</FormHelperText>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="uncontrolled-native">Name</InputLabel>
            <Select native defaultValue={30} input={<Input id="uncontrolled-native" />}>
              <option value="" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Select>
            <FormHelperText>Uncontrolled</FormHelperText>
          </FormControl>
        </div>
        <h3>Multiple Select</h3>
        <p>The Select component can handle multiple selections. It's enabled with the multiple property.</p>
        <div className={classes.container}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="name-multiple">Name</InputLabel>
            <Select
              multiple
              value={this.state.name_multiple}
              onChange={this.handleChange}
              input={<Input id="name-multiple" />}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                    width: 200,
                  },
                },
              }}
            >
              {names.map(name => (
                <MenuItem
                  key={name}
                  value={name}
                  style={{
                    fontWeight: this.state.name.indexOf(name) !== -1 ? '500' : '400',
                  }}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <h3>With a Dialog</h3>
        <p>While it's not encouraged by the Material Design specification, you can use a select inside a dialog.</p>
        <div>
          <Button onClick={this.handleClickOpen}>Open select dialog</Button>
          <Dialog
            ignoreBackdropClick
            ignoreEscapeKeyUp
            open={this.state.open}
            onRequestClose={this.handleRequestClose}
          >
            <DialogTitle>{'Fill the form'}</DialogTitle>
            <DialogContent>
              <form className={classes.container}>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="age-native-simple">Age</InputLabel>
                  <Select
                    native
                    value={this.state.age}
                    onChange={this.handleChange('age')}
                    input={<Input id="age-native-simple" />}
                  >
                    <option value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="age-simple">Age</InputLabel>
                  <Select
                    value={this.state.age}
                    onChange={this.handleChange('age')}
                    input={<Input id="age-simple" />}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleRequestClose} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleRequestClose} color="primary">
                Ok
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        <h3>Text Fields</h3>
        <p>The TextField wrapper component is a complete form control including a label, input and help text. You can find an example with the select mode in this section.</p>


      </div>
    )
  }
}
Selects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Selects);