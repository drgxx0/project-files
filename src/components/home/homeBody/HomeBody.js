import React, { Component } from "react";
import { connect } from "react-redux";
import { Header, Segment, Grid, Responsive } from "semantic-ui-react"; 

import NavBar from "components/home/navbar/NavBar";
import Button from "components/button/Button";
import Forms from "components/forms/Forms";
import Result from "./Result";

import * as UIActions from "store/actions/UIActions";
import * as dataActions from "store/actions/dataActions";

import img from "components/assets/img/image1.jpg";

class HomeBody extends Component {
  state = {
    type: "persona",
    data: {
      nombre: "",
      dni: "",
      celular: "",
      correo: "",
      direccion: "",
      comentario: "",
      departamento: "",
      provincia: "",
      distrito: "",
      razon: "",
      ruc: ""
    },
    disabled: true
  };

  handleChange = (id, value) => {
    this.setState({
      data: {
        ...this.state.data,
        [id]: value
      }
    });
  };

  changeType = type => {
    this.setState({
      type,
      disabled: true
    });
  };

  clearForms = () => {
    this.setState({
      data: {
        ...this.state.data,
        nombre: "",
        dni: "",
        celular: "",
        correo: "",
        direccion: "",
        comentario: "",
        razon: "",
        ruc: ""
      }
    });
  };

  componentDidUpdate = () => {
    const { nombre, dni, celular, correo, direccion, comentario, ruc } = this.state.data
    if (nombre && (dni||ruc) && celular && correo && direccion && comentario) {
      if(this.state.disabled) {
        this.setState({
          ...this.state,
          disabled: false
        })
      } else {
        return null
      }
    } else {
      return null
  }
}

  handleSubmit = () => {
    if (this.state.type === "persona") {
      this.props.createNewData('persona', this.state.data);
    } else if (this.state.type === "empresa") {
      this.props.createNewData('empresa', this.state.data);
    }
    this.clearForms();
  };


  disabledButton = () => {
    this.setState({
      disabled: true
    })
  }


  render() {
    const { active, handleActiveButton, status, message, mobile, history } = this.props;

    return (
      <Segment
        inverted
        vertical
        style={{
          background: `linear-gradient(to bottom, rgba(62, 62, 62, 0.75) 0%, rgba(62, 62, 62, 0.75) 100%), url(${img}) center center no-repeat`,
          backgroundSize: 'cover',
          minHeight: '100vh'
        }}
      >
        <NavBar history={history} />
        <Grid
          container
          columns={3}
          textAlign="center"
          style={mobile ? {height: 'auto'} : { height: "100vh" }}
        >
          <Grid.Column width={10} />
          <Grid.Column width={16}>
            <Header
              as="h2"
              content="Elese te da la bienvenida a la feria Excon 2018"
              style={{
                color: "#fff",
                fontWeight: "bold"
              }}
            />
            <Header
              as="h3"
              content="Completa el formulario y obtén tu descuento"
              style={{
                color: "#fff",
                fontWeight: "normal",
                marginTop: "0px"
              }}
            />
            <Button
              handleActiveButton={handleActiveButton}
              clearForms={this.clearForms}
              active={active === 1 ? true : false}
              id={1}
              changeType={this.changeType}
            />

            <Button
              handleActiveButton={handleActiveButton}
              clearForms={this.clearForms}
              active={active === 2 ? true : false}
              id={2}
              changeType={this.changeType}
            />

            {status ? (
              <Result message={message} disabledButton={this.disabledButton} />
            ) : (
            <React.Fragment>
                <Responsive maxWidth={767}>
                <Forms
                    mobile
                    disabled={this.state.disabled}
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    {...this.state.data}
                />
                </Responsive>
                <Responsive minWidth={768}>
                <Forms
                    disabled={this.state.disabled}
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    {...this.state.data}
                />
                </Responsive>
            </React.Fragment>
            )}
          </Grid.Column>
          <Grid.Column width={10} />
        </Grid>
      </Segment>
    );
  }
}

const mapStateToProps = state => {
  return {
    active: state.ui.buttonActive,
    status: state.ui.status,
    message: state.ui.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleActiveButton: (id) => dispatch(UIActions.handleActiveButton(id)),
    createNewData: (type, args) => dispatch(dataActions.createNewData(type, args)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeBody);
