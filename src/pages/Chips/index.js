import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import FaceIcon from 'material-ui-icons/Face';
import Done from 'material-ui-icons/Done';
import grey from 'material-ui/colors/grey';

const styles = theme => ({
  chip: {
    margin: theme.spacing.unit,
  },
  svgIcon: {
    color: grey[800],
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});

function handleRequestDelete() {
  alert('You clicked the delete icon.'); // eslint-disable-line no-alert
}

function handleClick() {
  alert('You clicked the Chip.'); // eslint-disable-line no-alert
}


class Chips extends React.Component{
  state = {
    chipData: [
      { key: 0, label: 'Angular' },
      { key: 1, label: 'JQuery' },
      { key: 2, label: 'Polymer' },
      { key: 3, label: 'ReactJS' },
      { key: 4, label: 'Vue.js' },
    ],
  };

  handleRequestDelete = data => () => {
    if (data.label === 'ReactJS') {
      alert('Why would you want to delete React?! :)'); // eslint-disable-line no-alert
      return;
    }

    const chipData = [...this.state.chipData];
    const chipToDelete = chipData.indexOf(data);
    chipData.splice(chipToDelete, 1);
    this.setState({ chipData });
  };
  render(){
    const classes = this.props.classes;
    return(
      <div>
        <h3>Chips</h3>
        <p>Chips represent complex entities in small blocks, such as a contact.</p>
        <p>While included here as a standalone component, the most common use will be in some form of input, so some of the behaviour demonstrated here is not shown in context.</p>
        <h3>Chip</h3>
        <p>Examples of Chips, using an image Avatar, SVG Icon Avatar, "Letter" and (string) Avatar.

          Chips with the onClick property defined change appearance on focus, hover, and click.
          Chips with the onRequestDelete property defined will display a delete icon which changes appearance on hover.</p>
        <div className={classes.row}>
        <Chip label="Basic Chip" className={classes.chip} />
        <Chip
          avatar={<Avatar>MB</Avatar>}
          label="Clickable Chip"
          onClick={handleClick}
          className={classes.chip}
        />
        <Chip
          avatar={<Avatar src="/static/images/uxceo-128.jpg" />}
          label="Deletable Chip"
          onRequestDelete={handleRequestDelete}
          className={classes.chip}
        />
        <Chip

          avatar={
            <Avatar>
              <FaceIcon className={classes.svgIcon} />
            </Avatar>
          }
          label="Clickable Deletable Chip"
          onClick={handleClick}
          onRequestDelete={handleRequestDelete}
          className={classes.chip}
        />
        <Chip
          label="Custom delete icon Chip"
          onClick={handleClick}
          onRequestDelete={handleRequestDelete}
          className={classes.chip}
          deleteIcon={<Done />}
        />
        </div>
        <h3>Chip array</h3>
        <p>An example of rendering multiple Chips from an array of values. Deleting a chip removes it from the array. Note that since no onClick property is defined, the Chip can be focused, but does not gain depth while clicked or touched.</p>
        <div className={classes.row}>
          {this.state.chipData.map(data => {
            return (
              <Chip
                label={data.label}
                key={data.key}
                onRequestDelete={this.handleRequestDelete(data)}
                className={classes.chip}
              />
            );
          })}
        </div>
      </div>
    )
  }
}
export default withStyles(styles)(Chips)