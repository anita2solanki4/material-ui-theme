import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import Paper from 'material-ui/Paper';
import PhoneIcon from 'material-ui-icons/Phone';
import FavoriteIcon from 'material-ui-icons/Favorite';
import PersonPinIcon from 'material-ui-icons/PersonPin';
import HelpIcon from 'material-ui-icons/Help';
import ShoppingBasket from 'material-ui-icons/ShoppingBasket';
import ThumbDown from 'material-ui-icons/ThumbDown';
import ThumbUp from 'material-ui-icons/ThumbUp';

function TabContainer(props) {
  return <div style={{ padding: 20 }}>{props.children}</div>;
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 3,
    backgroundColor: theme.palette.background.paper,
  },
  root_fullwidh: {
    backgroundColor: theme.palette.background.paper,
  },
  root_centered: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 3,
  },
  root_scrollable: {
    flexGrow: 1,
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    backgroundColor: theme.palette.background.paper,
  },
});

class Tab1 extends React.Component{
  state = {
    value: 0,
    value_wrapped:'one',
    value_disabled: 2,

  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  handleChange_wrapped = (event, value_wrapped) => {
    this.setState({ value_wrapped });
  };
  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  handleChange_disabled = (event, value_disabled) => {
    this.setState({ value_disabled });
  };

  render(){
    const { classes } = this.props;
    const { value, value_wrapped } = this.state;
    return(
      <div>
      <h3>Tabs</h3>
        <p>Tabs make it easy to explore and switch between different views.</p>
        <h4>Basic Tabs</h4>
        <p>A simple example with no frills.</p>
        <div className={classes.root}>
          <AppBar position="static">
            <Tabs value={value} onChange={this.handleChange}>
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" href="#basic-tabs" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer>{'Item One'}</TabContainer>}
          {value === 1 && <TabContainer>{'Item Two'}</TabContainer>}
          {value === 2 && <TabContainer>{'Item Three'}</TabContainer>}
        </div>
        <h4>Wrapped Labels</h4>
        <p>Long labels will automatically wrap on tabs. If the label is too long for the tab, it will overflow and the text will not be visible.</p>
        <div className={classes.root}>
          <AppBar position="static">
            <Tabs value={value_wrapped} onChange={this.handleChange_wrapped()}>
              <Tab value="one" label="New Arrivals in the Longest Text of Nonfiction" />
              <Tab value="two" label="Item Two" />
              <Tab value="three" label="Item Three" />
            </Tabs>
          </AppBar>
          {value === 'one' && <TabContainer>{'Item One'}</TabContainer>}
          {value === 'two' && <TabContainer>{'Item Two'}</TabContainer>}
          {value === 'three' && <TabContainer>{'Item Three'}</TabContainer>}
        </div>
        <h4>Fixed Tabs</h4>
        <p>Fixed tabs should be used with a limited number of tabs and when consistent placement will aid muscle memory.</p>
        <h5>Full width</h5>
        <p>The fullWidth property should be used for smaller views. This demo also uses react-swipeable-views to animate the Tab transition, and allowing tabs to be swiped on touch devices.</p>
        <div className={classes.root_fullwidth} style={{ width: 500 }}>
          <AppBar position="static" color="default">
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              fullWidth
            >
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
            </Tabs>
          </AppBar>
          <SwipeableViews index={this.state.value} onChangeIndex={this.handleChangeIndex}>
            <TabContainer>{'Item One'}</TabContainer>
            <TabContainer>{'Item Two'}</TabContainer>
            <TabContainer>{'Item Three'}</TabContainer>
          </SwipeableViews>
        </div>
        <h5>Centered</h5>
        <p>The centered property should be used for larger views.</p>
        <Paper className={classes.root_centered}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </Paper>

        <h4>Scrollable Tabs</h4>
        <h5>Automatic Scroll Buttons</h5>
        <p>Left and right scroll buttons will automatically be presented on desktop and hidden on mobile. (based on viewport width)</p>
        <div className={classes.root_}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              scrollable
              scrollButtons="auto"
            >
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
              <Tab label="Item Four" />
              <Tab label="Item Five" />
              <Tab label="Item Six" />
              <Tab label="Item Seven" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer>{'Item One'}</TabContainer>}
          {value === 1 && <TabContainer>{'Item Two'}</TabContainer>}
          {value === 2 && <TabContainer>{'Item Three'}</TabContainer>}
          {value === 3 && <TabContainer>{'Item Four'}</TabContainer>}
          {value === 4 && <TabContainer>{'Item Five'}</TabContainer>}
          {value === 5 && <TabContainer>{'Item Six'}</TabContainer>}
          {value === 6 && <TabContainer>{'Item Seven'}</TabContainer>}
        </div>

        <h5>Forced Scroll Buttons</h5>
        <p>Left and right scroll buttons will be presented regardless of the viewport width.</p>
        <div className={classes.root_scrollable}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={this.handleChange}
              scrollable
              scrollButtons="on"
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab label="Item One" icon={<PhoneIcon />} />
              <Tab label="Item Two" icon={<FavoriteIcon />} />
              <Tab label="Item Three" icon={<PersonPinIcon />} />
              <Tab label="Item Four" icon={<HelpIcon />} />
              <Tab label="Item Five" icon={<ShoppingBasket />} />
              <Tab label="Item Six" icon={<ThumbDown />} />
              <Tab label="Item Seven" icon={<ThumbUp />} />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer>{'Item One'}</TabContainer>}
          {value === 1 && <TabContainer>{'Item Two'}</TabContainer>}
          {value === 2 && <TabContainer>{'Item Three'}</TabContainer>}
          {value === 3 && <TabContainer>{'Item Four'}</TabContainer>}
          {value === 4 && <TabContainer>{'Item Five'}</TabContainer>}
          {value === 5 && <TabContainer>{'Item Six'}</TabContainer>}
          {value === 6 && <TabContainer>{'Item Seven'}</TabContainer>}
        </div>

        <h5>Prevent Scroll Buttons</h5>
        <p>Left and right scroll buttons will never be presented. All scrolling must be initiated through user agent scrolling mechanisms (e.g. left/right swipe, shift-mousewheel, etc.)</p>
        <div className={classes.root_scrollable}>
          <AppBar position="static">
            <Tabs value={value} onChange={this.handleChange} scrollable scrollButtons="off">
              <Tab icon={<PhoneIcon />} />
              <Tab icon={<FavoriteIcon />} />
              <Tab icon={<PersonPinIcon />} />
              <Tab icon={<HelpIcon />} />
              <Tab icon={<ShoppingBasket />} />
              <Tab icon={<ThumbDown />} />
              <Tab icon={<ThumbUp />} />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer>{'Item One'}</TabContainer>}
          {value === 1 && <TabContainer>{'Item Two'}</TabContainer>}
          {value === 2 && <TabContainer>{'Item Three'}</TabContainer>}
          {value === 3 && <TabContainer>{'Item Four'}</TabContainer>}
          {value === 4 && <TabContainer>{'Item Five'}</TabContainer>}
          {value === 5 && <TabContainer>{'Item Six'}</TabContainer>}
          {value === 6 && <TabContainer>{'Item Seven'}</TabContainer>}
        </div>

        <h4>Icon Tabs</h4>
        <p>Tab labels may be either all icons or all text.</p>
        <Paper style={{ width: 500 }}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            fullWidth
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab icon={<PhoneIcon />} />
            <Tab icon={<FavoriteIcon />} />
            <Tab icon={<PersonPinIcon />} />
          </Tabs>
        </Paper>
        <Paper style={{ width: 500 }}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            fullWidth
            indicatorColor="accent"
            textColor="accent"
          >
            <Tab icon={<PhoneIcon />} label="RECENTS" />
            <Tab icon={<FavoriteIcon />} label="FAVORITES" />
            <Tab icon={<PersonPinIcon />} label="NEARBY" />
          </Tabs>
        </Paper>
        <h4>Disabled Tab</h4>
        <p>Tab may be disabled by setting disabled property.</p>
        <Paper>
          <Tabs
            value={this.state.value_disabled}
            indicatorColor="primary"
            textColor="primary"
            onChange={this.handleChange_disabled()}
          >
            <Tab label="Active" />
            <Tab label="Disabled" disabled />
            <Tab label="Active" />
          </Tabs>
        </Paper>

      </div>
    )
  }
}
Tab1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tab1)