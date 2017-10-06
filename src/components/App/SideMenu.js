import React from 'react'
import List, { ListItem, ListItemText,ListItemIcon } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import StarIcon from 'material-ui-icons/Star';
import {ExpandLess, ExpandMore} from 'material-ui-icons';
import CodeIcon from 'material-ui-icons/Code';
import { browserHistory } from 'react-router';

const subComponents = ['AppBar','Autocomplete','Avatars','Badges','BottomNavigation','Button','Cards',
  'Chips','Dialogs','Dividers','Drawers','Grid List','Lists','Menus','Paper','Pickers','Popovers',
  'Progress','Selection Controls','Selects','Snackbars','Stepper','Tables','Tabs','TextField','Tooltips']


export default class SideMenu extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      open: true,
    };
  }
  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  handleItemClick = (item) =>{
      const value = '/' + item['number']
      browserHistory.push(value)
  }

  render() {
    const classes = this.props.classes;
    return (
      <List>
        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
            <CodeIcon />
          </ListItemIcon>
          <ListItemText primary="Components" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} transitionDuration="auto" unmountOnExit>          {
            subComponents.map((number) =>
              <ListItem button className={classes.nested}>
                <ListItemText button onClick={() =>   this.handleItemClick({number})} primary={number} />
              </ListItem>
            )
          }
        </Collapse>
      </List>
    )
  }
}
