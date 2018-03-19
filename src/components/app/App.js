import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from '../home/Home';
import Dashboard from '../dashboard/Dashboard';
//bring in private route if we use it. Add private route file from other lab if use private route
//import PrivateRoute from './PrivateRoute'; 
import { listenForUser } from '../auth/actions';


class App extends PureComponent{

  componentDidMount() {
    this.props.listenForUser();
  }

  render(){
    return (
      <div>
        <Router>
          <Switch>

            <Route exact path='/' component={Home}/> 
            <Route path='/dashboard/' component={Dashboard}/>
            {/* <PrivateRoute exact path='/game' component={Main}/> */}
            <Redirect to='/' /> 
          </Switch>
        </Router>
      </div>
    );
  }
}

export default connect(
  //state might be different. Change as needed
  state => ({ user: state.user }),
  { listenForUser }
)(App);