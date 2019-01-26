import React from 'react'
import { connect } from 'react-redux'
import { Form, Dropdown, TextArea, Button } from 'semantic-ui-react'

import * as UIActions from 'store/actions/UIActions'
import * as dataActions from 'store/actions/dataActions'

const EditForm = ({ dep, provincies, districts, getDistricts, getProvincies,  handleChange, blockDistricts, category, submitUpdate, id, handleGetAll}) => {

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

    const delay = (time = 500) => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(true);
        }, time);
      });
    };

    return (
        <Form>
          <Form.Group widths='equal'>
            <Form.Input
              fluid
              name='nombre'
              id='form-subcomponent-shorthand-input-first-name'
              label='Nombre completo'
              placeholder='Nombre completo'
              onChange={e => handleChange(e.target.name, e.target.value)}
            />
            <Form.Input
              fluid
              name={category === 'persona' ? 'dni' : 'ruc'}
              id='form-subcomponent-shorthand-input-last-name'
              label={category === 'persona' ? 'DNI' : 'RUC'}
              placeholder={category === 'persona' ? 'DNI' : 'RUC'}
              onChange={e => handleChange(e.target.name, e.target.value)}
            />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input
              fluid
              name='celular'
              id='form-subcomponent-shorthand-input-first-name'
              label='Celular'
              placeholder='Celular'
              onChange={e => handleChange(e.target.name, e.target.value)}
            />
            <Form.Input
              fluid
              name='correo'
              id='form-subcomponent-shorthand-input-last-name'
              label='Correo'
              placeholder='Correo'
              onChange={e => handleChange(e.target.name, e.target.value)}
            />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input
              fluid
              name='direccion'
              id='form-subcomponent-shorthand-input-first-name'
              label='Direccion'
              placeholder='Direccion'
              onChange={e => handleChange(e.target.name, e.target.value)}
            />
          </Form.Group>
          <Form.Group widths='equal'>
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
          </Form.Group>
          {category === 'persona' ? null : <Form.Input
            fluid
            name='razon'
            id='form-subcomponent-shorthand-input-first-name'
            label='Razon Social'
            placeholder='Razon Social'
            onChange={e => handleChange(e.target.name, e.target.value)}
          />}
          <TextArea
              name="comentario"
              autoHeight
              placeholder="Comentario"
              style={{ minHeight: 100 }}
              onChange={e => handleChange(e.target.name, e.target.value)}
            />  
            <Button color="google plus"
            fluid onClick={async() => {
                submitUpdate(category, id)
                await delay()
                handleGetAll(category)
                }}>Actualizar</Button>
        </Form>
    )
}

const mapStateToProps = state => {
  return {
    dep: state.data.departments,
    provincies: state.data.provincies,
    districts: state.data.districts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProvincies: id => dispatch(dataActions.getProvincies(id)),
    getDistricts: id => dispatch(dataActions.getDistricts(id)),
    blockDistricts: () => dispatch(UIActions.blockDistricts()),
    handleGetAll: (category) => dispatch(dataActions.handleGetAll(category))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditForm);