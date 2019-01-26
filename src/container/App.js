import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import Home from 'components/home/Home'
import Admin from 'components/admin/Admin'

import * as dataActions from 'store/actions/dataActions'

import './App.css';

class App extends Component {

  state = {
    active: 1
  }


  handleActive = (id) => {
    this.setState({
      active: id
    })
  }

  componentDidMount = () => {
    this.props.getDep()
  }


  render() {
    return (
      <div className="App">
      <Switch>
        <Route exact path='/' render={(props) => <Home {...props} />} />
        <Route exact path='/admin' render={(props) => <Admin admin {...props} />} />
      </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getDep: () => dispatch(dataActions.getDep())
  }
}

export default withRouter(connect(null,mapDispatchToProps)(App));
