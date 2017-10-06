import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from './components/App/App';
import AppBar from './pages/AppBar/AppBar';
import TextField from './pages/TextField';
import Typography from './pages/Typography';
import Button from './pages/Button';
import Avatars from './pages/Avatars';
import Badges from './pages/Badges/Badges'
import BottomNavigation from './pages/BottomNavigation';
import Cards from './pages/Cards'
import { browserHistory } from 'react-router';
import Chips from './pages/Chips';
import Dialogs from './pages/Dialogs'
import Dividers from './pages/Dividers'
import Drawers from './pages/Drawers'
import Gridlist from './pages/GridList'
import Lists from './pages/Lists'
import Menus from './pages/Menus'
import Papers from './pages/Paper'
import Pickers from './pages/Pickers'
import Popovers from './pages/Popovers'
import Progress from './pages/Progress'
import Selection_Controls from './pages/Selection_Controls'
import Selects from './pages/Selects'
import Snackbars from './pages/Snackbars'
import Stepper from './pages/Stepper'
import EnhancedTableHead from './pages/Tables'
import Tab1 from './pages/Tabs'
import TextFields from './pages/TextFields'
import Tooltips from './pages/Tooltips'

const Routes = (props) => (
    <Router history = {browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={AppBar} />
        <Route path="/AppBar" component={AppBar} />
        <Route path="/Avatars" component={Avatars} />
        <Route path="/TextField" component={TextField} />
        <Route path="/Typography" component={Typography} />
        <Route path="/Button" component={Button} />
        <Route path="/Badges" component={Badges} />
        <Route path="/BottomNavigation" component={BottomNavigation} />
        <Route path="/Cards" component={Cards} />
        <Route path="/Chips" component={Chips} />
        <Route path="/Dialogs" component={Dialogs} />
        <Route path="/Dividers" component={Dividers} />
        <Route path="/Drawers" component={Drawers} />
        <Route path="/GridList" component={Gridlist} />
        <Route path="/Lists" component={Lists} />
        <Route path="/Menus" component={Menus} />
        <Route path="/Paper" component={Papers} />
        <Route path="/Pickers" component={Pickers} />
        <Route path="/Popovers" component={Popovers} />
        <Route path="/Progress" component={Progress} />
        <Route path="/Selection_Controls" component={Selection_Controls} />
        <Route path="/Selects" component={Selects} />
        <Route path="/Snackbars" component={Snackbars} />
        <Route path="/Stepper" component={Stepper} />
        <Route path="/table" component={EnhancedTableHead} />
        <Route path="/Tabs" component={Tab1} />
        <Route path="/TextFields" component={TextFields} />
        <Route path="/Tooltips" component={Tooltips} />
      </Route>
    </Router>
);

export default Routes;

//drawer,GridList->tileData
//snackbar-> last component
//Tab->unresponsive

