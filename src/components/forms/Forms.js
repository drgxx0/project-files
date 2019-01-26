import React from "react";
import { connect } from "react-redux";

import { Form, Segment, Dropdown, TextArea, Button } from "semantic-ui-react";

import * as dataActions from "store/actions/dataActions";
import * as UIActions from "../../store/actions/UIActions";

const Forms = ({
    dep,
    provincies,
    getProvincies,
    getDistricts,
    districts,
    blockDistricts,
    active,
    handleChange,
    nombre,
    dni,
    celular,
    correo,
    direccion,
    comentario,
    razon,
    ruc,
    handleSubmit,
    loading,
    mobile,
    disabled
  }) => {


  const mapDep = dep.map(item => {
    return {
      text: item.nombre_ubigeo,
      value: item.id_ubigeo
    };
  });

  const mapProvicies = provincies.map(item => {
    return {
      text: item.nombre_ubigeo,
      value: item.id_ubigeo
    };
  });

  const mapDistricts = districts.map(item => {
    return {
      text: item.nombre_ubigeo,
      value: item.id_ubigeo
    };
  });

  return (
    <Segment
      padded
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "rgba(255,255,255,0.7)",
        marginTop: "1em"
      }}
      loading={loading}
    >
      <Form>
        <Form.Group style={mobile ? { justifyContent: "center" } : {}}>
          <Form.Input
            name="nombre"
            value={nombre || ""}
            placeholder={
              active === 1 ? "Nombre Completo" : "Nombre del Contacto"
            }
            style={
              mobile ? { width: 200, marginBottom: ".5em" } : { width: 300 }
            }
            onChange={e => handleChange(e.target.name, e.target.value)}
          />
          {mobile ? (
            <span />
          ) : (
            <Dropdown
              additionLabel="departamento"
              placeholder="Departamento"
              selection
              options={mapDep}
              style={{ width: 300, marginLeft: ".5em", marginBottom: ".5em" }}
              onChange={(e, { value, additionLabel }) => {
                blockDistricts();
                handleChange(additionLabel, e.target.textContent);
                getProvincies(value);
              }}
            />
          )}
        </Form.Group>
        <Form.Group style={mobile ? { justifyContent: "center" } : {}}>
          <Form.Input
            name={active === 1 ? "dni" : "ruc"}
            value={active === 1 ? dni || "" : ruc || ""}
            placeholder={active === 1 ? "DNI" : "RUC"}
            style={
              mobile ? { width: 200, marginBottom: ".5em" } : { width: 300 }
            }
            onChange={e => handleChange(e.target.name, e.target.value)}
          />
          {mobile ? (
            <span />
          ) : (
            <Dropdown
              additionLabel="provincia"
              placeholder="Provincia"
              selection
              disabled={!provincies.length}
              options={mapProvicies}
              style={{ width: 300, marginLeft: ".5em", marginBottom: ".5em" }}
              onChange={(e, { value, additionLabel, text }) => {
                handleChange(additionLabel, e.target.textContent);
                getDistricts(value);
              }}
            />
          )}
        </Form.Group>
        <Form.Group style={mobile ? { justifyContent: "center" } : {}}>
          <Form.Input
            name="celular"
            value={celular || ""}
            placeholder={active === 1 ? "Celular" : "Celular de Contacto"}
            onChange={e => handleChange(e.target.name, e.target.value)}
            style={
              mobile ? { width: 200, marginBottom: ".5em" } : { width: 300 }
            }
          />
          {mobile ? (
            <span />
          ) : (
            <Dropdown
              additionLabel="distrito"
              placeholder="Distrito"
              selection
              disabled={!districts.length}
              options={mapDistricts}
              style={{ width: 300, marginLeft: ".5em", marginBottom: ".5em" }}
              onChange={(e, { additionLabel }) =>
                handleChange(additionLabel, e.target.textContent)
              }
            />
          )}
        </Form.Group>
        <Form.Group style={mobile ? { justifyContent: "center" } : {}}>
          <Form.Input
            name="correo"
            value={correo || ""}
            placeholder={active === 1 ? "Correo" : "Correo de Contacto"}
            style={
              mobile ? { width: 200, marginBottom: ".5em" } : { width: 300 }
            }
            onChange={e => handleChange(e.target.name, e.target.value)}
          />
          <Form.Input
            name={active === 1 ? "direccion" : "razon"}
            value={active === 1 ? direccion || "" : razon || ""}
            placeholder={active === 1 ? "Direccion" : "Razon Social"}
            style={
              mobile ? { width: 200, marginBottom: ".5em" } : { width: 300 }
            }
            onChange={e => handleChange(e.target.name, e.target.value)}
          />
        </Form.Group>
        {active === 1 ? (
          <span />
        ) : (
          <Form.Input
            name="direccion"
            placeholder="Dirección"
            value={direccion || ""}
            fluid={mobile ? false : true}
            onChange={e => handleChange(e.target.name, e.target.value)}
          />
        )}
        {mobile ? (
          <React.Fragment>
            <Dropdown
              additionLabel="departamento"
              placeholder="Departamento"
              selection
              options={mapDep}
              style={{ width: 200, marginLeft: ".5em", marginBottom: ".5em" }}
              onChange={(e, { value, additionLabel }) => {
                blockDistricts();
                handleChange(additionLabel, e.target.textContent);
                getProvincies(value);
              }}
            />
            <Dropdown
              additionLabel="provincia"
              placeholder="Provincia"
              selection
              disabled={!provincies.length}
              options={mapProvicies}
              style={{ width: 200, marginLeft: ".5em", marginBottom: ".5em" }}
              onChange={(e, { value, additionLabel, text }) => {
                handleChange(additionLabel, e.target.textContent);
                getDistricts(value);
              }}
            />
            <Dropdown
              additionLabel="provincia"
              placeholder="Provincia"
              selection
              disabled={!provincies.length}
              options={mapProvicies}
              style={{ width: 200, marginLeft: ".5em", marginBottom: ".5em" }}
              onChange={(e, { value, additionLabel, text }) => {
                handleChange(additionLabel, e.target.textContent);
                getDistricts(value);
              }}
            />
          </React.Fragment>
        ) : (
          <span />
        )}
        <TextArea
          name="comentario"
          autoHeight
          value={comentario || ""}
          placeholder="Comentario"
          style={{ minHeight: 100 }}
          onChange={e => handleChange(e.target.name, e.target.value)}
        />
        <Button
          color="google plus"
          disabled={disabled}
          fluid
          style={{ marginTop: "10px" }}
          onClick={handleSubmit}
        >
          Registrar
        </Button>
      </Form>
    </Segment>
  );
};

const mapStateToProps = state => {
  return {
    dep: state.data.departments,
    provincies: state.data.provincies,
    districts: state.data.districts,
    loading: state.ui.loading,
    active: state.ui.buttonActive
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProvincies: id => dispatch(dataActions.getProvincies(id)),
    getDistricts: id => dispatch(dataActions.getDistricts(id)),
    blockDistricts: () => dispatch(UIActions.blockDistricts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Forms);
