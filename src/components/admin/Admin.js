import React, { Component } from "react";
import { connect } from "react-redux";

import { Responsive } from "semantic-ui-react";

import Login from "./login/Login";
import AdminPanel from "./adminPanel/adminPanel";
import NavBar from "components/home/navbar/NavBar";

import * as authActions from "store/actions/authActions";
import * as dataActions from 'store/actions/dataActions'

class Admin extends Component {
  state = {
    category: "persona",
    login: {
      email: "",
      contraseña: ""
    },
    view: false
  };

  handleLoginChange = (name, value) => {
    this.setState({
      ...this.state,
      login: {
        ...this.state.login,
        [name]: value
      }
    });
  };

  handleSideBarItems = category => {
    this.setState({
      category
    });
    this.props.handleGetAll(category);
  };

  handleLoginData = (email, contraseña) => {
    this.setState({
      login: {
        email: "",
        contraseña: ""
      }
    });
    this.props.handleSendLogin(email, contraseña);
  };

  handleView = (status) => {
      this.setState({
          view: status
      })
  }


  render() {
    const { admin, history } = this.props;
    const { category, view } = this.state;
    const { email, contraseña } = this.state.login;
    return (
      <React.Fragment>
        <NavBar login={admin ? false : true} admin={admin} history={history} />
        {admin ? (
          <React.Fragment>
            <Responsive maxWidth={767}>
              <AdminPanel
                mobile
                handleSideBarItems={this.handleSideBarItems}
                category={category}
                view={view}
                handleView={this.handleView}
              />
            </Responsive>
            <Responsive minWidth={768}>
              <AdminPanel
                handleSideBarItems={this.handleSideBarItems}
                category={category}
                view={view}
                handleView={this.handleView}
              />
            </Responsive>
          </React.Fragment>
        ) : (
          <Login
            email={email}
            contraseña={contraseña}
            handleLoginChange={this.handleLoginChange}
            handleLoginData={this.handleLoginData}
          />
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    admin: state.ui.admin
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSendLogin: (email, contraseña) =>
      dispatch(authActions.handleSendLogin(email, contraseña)),
      handleGetAll: (category) => dispatch(dataActions.handleGetAll(category)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);
