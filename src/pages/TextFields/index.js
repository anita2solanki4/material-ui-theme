import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import MaskedInput from 'react-text-mask';
import NumberFormat from 'react-number-format';
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
  menu: {
    width: 200,
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  input: {
    margin: theme.spacing.unit,
  },
});

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];
//*****
function TextMaskCustom(props) {
  return (
    <MaskedInput
      {...props}
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

function NumberFormatCustom(props) {
  return (
    <NumberFormat
      {...props}
      onChange={(event, values) => {
        props.onChange({
          target: {
            value: values.value,
          },
        });
      }}
      thousandSeparator
      prefix="$"
    />
  );
}

//****
class TextFields extends React.Component{
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
    name1: 'Composed TextField',
    textmask: '(1  )    -    ',
    numberformat: '1320',

  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,

    });
  };
  handleChange_name1 = name1 => event => {
    this.setState({
      [name1]: event.target.value,

    });
  };

  render(){
    const { classes } = this.props;
    return(
      <div>

        <h3>Text Fields</h3>
        <p>Text fields allow users to input text and usually appear in forms. Users may enter text, numbers, or mixed-format types of input.</p>
        <h4>TextField</h4>
        <p>The TextField wrapper component is a complete form control including a label, input and help text.</p>

        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="name"
            label="Name"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
          />
          <TextField
            id="uncontrolled"
            label="Uncontrolled"
            defaultValue="foo"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            required
            id="required"
            label="Required"
            defaultValue="Hello World"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            error
            id="error"
            label="Error"
            defaultValue="Hello World"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="password"
            label="Password"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            margin="normal"
          />
          <TextField
            id="multiline-flexible"
            label="Multiline"
            multiline
            rowsMax="4"
            value={this.state.multiline}
            onChange={this.handleChange('multiline')}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="multiline-static"
            label="Multiline"
            multiline
            rows="4"
            defaultValue="Default Value"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="helperText"
            label="Helper text"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            margin="normal"
          />
          <TextField
            label="With placeholder"
            placeholder="Placeholder"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            label="With placeholder multiline"
            placeholder="Placeholder"
            multiline
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="number"
            label="Number"
            value={this.state.age}
            onChange={this.handleChange('age')}
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />
          <TextField
            id="search"
            label="Search field"
            type="search"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="select-currency"
            select
            label="Select"
            className={classes.textField}
            value={this.state.currency}
            onChange={this.handleChange('currency')}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            helperText="Please select your currency"
            margin="normal"
          >
            {currencies.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="select-currency-native"
            select
            label="Native select"
            className={classes.textField}
            value={this.state.currency}
            onChange={this.handleChange('currency')}
            SelectProps={{
              native: true,
              MenuProps: {
                className: classes.menu,
              },
            }}
            helperText="Please select your currency"
            margin="normal"
          >
            {currencies.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          <TextField
            id="full-width"
            label="Label"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="Placeholder"
            helperText="Full width!"
            fullWidth
            margin="normal"
          />
        </form>
        <h3>Components</h3>
        <p>TextField is composed of smaller components (FormControl, InputLabel, Input, and FormHelperText) that you can leverage directly to significantly customize your form inputs.</p>
        <p>You might also have noticed that some native HTML input properties are missing from the TextField component. This is on purpose. The component takes care of the most used properties, then it's up to the user to use the underlying component shown in the following demo. Still, you can use inputProps (and InputProps, InputLabelProps properties) if you want to avoid some boilerplate.</p>
        <div className={classes.container}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="name-simple">Name</InputLabel>
            <Input id="name-simple" value={this.state.name1} onChange={this.handleChange_name1} />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="name-helper">Name</InputLabel>
            <Input id="name-helper" value={this.state.name1} onChange={this.handleChange_name1} />
            <FormHelperText>Some important helper text</FormHelperText>
          </FormControl>
          <FormControl className={classes.formControl} disabled>
            <InputLabel htmlFor="name-disabled">Name</InputLabel>
            <Input id="name-disabled" value={this.state.name1} onChange={this.handleChange_name1} />
            <FormHelperText>Disabled</FormHelperText>
          </FormControl>
          <FormControl className={classes.formControl} error>
            <InputLabel htmlFor="name-error">Name</InputLabel>
            <Input id="name-error" value={this.state.name1} onChange={this.handleChange_name1} />
            <FormHelperText>Error</FormHelperText>
          </FormControl>
        </div>
        <h3>Layout</h3>
        <p>TextField, FormControl allow the specification of margin to alter the vertical spacing of inputs. Using none (default) will not apply margins to the FormControl, whereas dense and normal will as well as alter other styles to meet the specification.</p>
        <div className={classes.container}>
          <TextField
            label="None"
            id="margin-none"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
          />
          <TextField
            label="Dense"
            id="margin-dense"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            margin="dense"
          />
          <TextField
            label="Normal"
            id="margin-normal"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            margin="normal"
          />
        </div>

        <h3>Inputs</h3>
        <div className={classes.container}>
          <Input
            defaultValue="Hello world"
            className={classes.input}
            inputProps={{
              'aria-label': 'Description',
            }}
          />
          <Input
            placeholder="Placeholder"
            className={classes.input}
            inputProps={{
              'aria-label': 'Description',
            }}
          />
          <Input
            value="Disabled"
            className={classes.input}
            disabled
            inputProps={{
              'aria-label': 'Description',
            }}
          />
          <Input
            defaultValue="Error"
            className={classes.input}
            error
            inputProps={{
              'aria-label': 'Description',
            }}
          />
        </div>
        <h3>Formatted inputs</h3>
        <p>We demonstrate how you could be using third-party libraries to format your input. Here, we are using react-text-mask and react-number-format.</p>
        <div className={classes.container}>
          <Input
            value={this.state.textmask}
            inputComponent={TextMaskCustom}
            onChange={this.handleChange('textmask')}
            className={classes.input}
            inputProps={{
              'aria-label': 'Description',
            }}
          />
          <Input
            value={this.state.numberformat}
            onChange={this.handleChange('numberformat')}
            inputComponent={NumberFormatCustom}
            className={classes.input}
            inputProps={{
              'aria-label': 'Description',
            }}
          />
        </div>
      </div>
    )
  }
}
TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,

};
NumberFormatCustom.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(TextFields);