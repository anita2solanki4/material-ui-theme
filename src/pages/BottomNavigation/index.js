import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';
import FolderIcon from 'material-ui-icons/Folder';
import Style from './style';

const styles = (theme) => (Style);

class BottomNavigationComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      open: true,
      componentMenu: true
    };
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render(){
    const classes = this.props.classes;
    const { value } = this.state;
    return(
      <div>
        <h3>Bottom Navigation</h3>
        <p>Bottom navigation bars make it easy to explore and switch between top-level views in a single tap.</p>
        <h3>Bottom Navigation</h3>
        <p>When there are only three actions, display both icons and text labels at all times.</p>
        <BottomNavigation
          value={value}
          onChange={this.handleChange}
          showLabels
          className={classes.root}
        >
          <BottomNavigationButton label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationButton label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationButton label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
        <h3>Bottom Navigation with no label</h3>
        <p>If there are four or five actions, display inactive views as icons only.</p>
        <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
          <BottomNavigationButton label="Recents" value="recents" icon={<RestoreIcon />} />
          <BottomNavigationButton label="Favorites" value="favorites" icon={<FavoriteIcon />} />
          <BottomNavigationButton label="Nearby" value="nearby" icon={<LocationOnIcon />} />
          <BottomNavigationButton label="Folder" value="folder" icon={<FolderIcon />} />
        </BottomNavigation>
      </div>
    )
  }
}
export default withStyles(styles)(BottomNavigationComponent);