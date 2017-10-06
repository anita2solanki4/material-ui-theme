import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import List, { ListItem, ListItemAvatar, ListItemText } from 'material-ui/List';
import Dialog, { DialogTitle, DialogActions, DialogContent, DialogContentText} from 'material-ui/Dialog';
import PersonIcon from 'material-ui-icons/Person';
import AddIcon from 'material-ui-icons/Add';
import Typography from 'material-ui/Typography';
import blue from 'material-ui/colors/blue';
import Slide from 'material-ui/transitions/Slide';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormControlLabel } from 'material-ui/Form';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import TextField from 'material-ui/TextField';

const emails = ['username@gmail.com', 'user02@gmail.com'];
const styles = {
  avatar: {
    background: blue[100],
    color: blue[600],
  },
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
}

class Dialogs extends React.Component{

state = {
  open: false,
  selectedValue: emails[1],    value: undefined,

};
handleRequestClose = () => {
  this.props.onRequestClose(this.props.selectedValue);
};
handleListItemClick = value => {
  this.props.onRequestClose(value);
};
handleClickOpen = () => {
  this.setState({
    open: true,
  });
};
// const handleRequestClose1 = value => {
//   this.setState({ selectedValue: value, open: false });
// };
handleRequestClose_full = () => {
  this.setState({ open: false });
};
 options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel',
];

componentWillMount=()=> {
  this.setState({ value: this.props.value });
}

componentWillUpdate=(nextProps)=> {
  if (nextProps.value !== this.props.value) {
    // eslint-disable-next-line react/no-will-update-set-state
    this.setState({ value: nextProps.value });
  }
}

radioGroup = null;

handleEntering = () => {
  this.radioGroup.focus();
};

handleCancel = () => {
  this.props.onRequestClose(this.props.value);
};

handleOk = () => {
  this.props.onRequestClose(this.state.value);
};

handleChange = (event, value) => {
  this.setState({ value });
};

  render(){
    const { classes, value, onRequestClose, selectedValue, ...other } = this.props;

    return(
      <div>
        <h3>Dialogs</h3>
        <p>Dialogs inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks.</p>
        <p>Dialogs contain text and UI controls. They retain focus until dismissed or a required action has been taken. Use dialogs sparingly because they are interruptive.</p>
        <h3>Simple Dialogs</h3>
        <p>Simple dialogs can provide additional details or actions about a list item. For example, they can display avatars, icons, clarifying subtext, or orthogonal actions (such as adding an account).</p>
        <h1>Touch mechanics:</h1>
        <li>Choosing an option immediately commits the option and closes the menu</li>
        <li>Touching outside of the dialog, or pressing Back, cancels the action and closes the dialog</li>

        <Dialog onRequestClose={this.handleRequestClose} {...other}>
        <DialogTitle>Set backup account</DialogTitle>
        <div>
          <List>
            {emails.map(email => (
              <ListItem button onClick={() => this.handleListItemClick(email)} key={email}>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={email} />
              </ListItem>
            ))}
            <ListItem button onClick={() => this.handleListItemClick('addAccount')}>
              <ListItemAvatar>
                <Avatar>
                  <AddIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="add account" />
            </ListItem>
          </List>
        </div>
      </Dialog>
        <div>
          <Typography type="subheading">Selected: {this.state.selectedValue}</Typography>
          <br />
          <Button onClick={this.handleClickOpen}>Open simple dialog</Button>
          {/*<SimpleDialogWrapped*/}
            {/*selectedValue={this.state.selectedValue}*/}
            {/*open={this.state.open}*/}
            {/*onRequestClose={this.handleRequestClose}*/}
          {/*/>*/}
        </div>
        <h3>Alerts</h3>
        <p>Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation.</p>
        <p>Most alerts don't need titles. They summarize a decision in a sentence or two by either:</p>
        <li>Asking a question (e.g. "Delete this conversation?")</li>
        <li>Making a statement related to the action buttons</li>
        <p>Use title bar alerts only for high-risk situations, such as the potential loss of connectivity. Users should be able to understand the choices based on the title and button text alone.</p>
        <p>If a title is required:</p>
        <li>Use a clear question or statement with an explanation in the content area, such as "Erase USB storage?".</li>
      <li>Avoid apologies, ambiguity, or questions, such as “Warning!” or “Are you sure?”</li>

        <Button onClick={this.handleClickOpen}>Open alert dialog</Button>
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Let Google help apps determine location. This means sending anonymous location data to
              Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleRequestClose} color="primary">
              Disagree
            </Button>
            <Button onClick={this.handleRequestClose} color="primary">
              Agree
            </Button>
          </DialogActions>
        </Dialog>
        <p>You can also swap out the transition, the next example uses Slide.</p>

        <Button onClick={this.handleClickOpen}>Slide in alert dialog</Button>
        <Dialog open={this.state.open} transition={Slide} onRequestClose={this.handleRequestClose}>
          <DialogTitle>{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Let Google help apps determine location. This means sending anonymous location data to
              Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleRequestClose} color="primary">
              Disagree
            </Button>
            <Button onClick={this.handleRequestClose} color="primary">
              Agree
            </Button>
          </DialogActions>
        </Dialog>

        <h3>Confirmation dialogs</h3>
        <p>Confirmation dialogs require users to explicitly confirm their choice before an option is committed. For example, users can listen to multiple ringtones but only make a final selection upon touching “OK.”</p>
        <p>Touching “Cancel” in a confirmation dialog, or pressing Back, cancels the action, discards any changes, and closes the dialog.</p>
        <Dialog
          ignoreBackdropClick
          ignoreEscapeKeyUp
          maxWidth="xs"
          onEntering={this.handleEntering}
          {...other}
        >
          <DialogTitle>Phone Ringtone</DialogTitle>
          <DialogContent>
            <RadioGroup
              innerRef={node => {
                this.radioGroup = node;
              }}
              aria-label="ringtone"
              name="ringtone"
              value={this.state.value}
              onChange={this.handleChange}
            >
              {this.options.map(option => (
                <FormControlLabel value={option} key={option} control={<Radio />} label={option} />
              ))}
            </RadioGroup>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCancel} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleOk} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
        <h3>Full-screen dialogs</h3>

        <Button onClick={this.handleClickOpen}>Open full-screen dialog</Button>
        <Dialog
          fullScreen
          open={this.state.open}
          onRequestClose={this.handleRequestClose_full}
          transition={<Slide direction="up" />}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="contrast" onClick={this.handleRequestClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography type="title" color="inherit" className={classes.flex}>
                Sound
              </Typography>
              <Button color="contrast" onClick={this.handleRequestClose}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <List>
            <ListItem button>
              <ListItemText primary="Phone ringtone" secondary="Titania" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Default notification ringtone" secondary="Tethys" />
            </ListItem>
          </List>
        </Dialog>
        <h3>Form dialogs</h3>
        <p>Form dialogs allow users to fill out form fields within a dialog. For example, if your site prompts for potential subscribers to fill in their email address, they can fill out the email field and touch 'Submit'</p>

        <Button onClick={this.handleClickOpen}>Open form dialog</Button>
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>{'Subscribe'}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send
              updates occationally.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleRequestClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleRequestClose} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>

        <h3>Responsive full-screen</h3>
        <p>You may make a Dialog responsively full screen the dialog using withResponsiveFullScreen. By default, withResponsiveFullScreen()(Dialog) responsively full screens at or below the sm screen size.</p>
      </div>

    )
  }
}

Dialogs.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

 export default withStyles(styles)(Dialogs);

