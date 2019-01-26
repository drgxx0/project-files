import React, { Component } from 'react'
import { connect } from 'react-redux'

import ManageIcons from './editManage/mangeIcons'
import ViewManager from './viewManager/viewManager'

import { Table, Loader, Dimmer } from 'semantic-ui-react'

import * as dataActions from 'store/actions/dataActions'
import * as UIActions from 'store/actions/UIActions'

class Panel extends Component {


    state = {
        nombre: '',
        dni: '',
        celular: '',
        correo: '',
        direccion: '',
        departamento: '',
        provincia: '',
        distrito: '',
        ruc: '',
        razon: '',
        comentario: ''
    }

    componentDidMount = () => {
        if(this.props.admin) {
            this.props.handleGetAll(this.props.category)
        }
    }


    handleChange = (id, value) => {
      this.setState({
        ...this.state,
        [id]: value
      });
    };


    submitUpdate = (category, id) => {
        const obj = this.state
        const filter = Object.keys(obj).filter(item => {
            return obj[item]
        })

        const map = filter.map(item => {
            return {
                [item]: obj[item]
            }
        })

        const reduce = map.reduce((acc, value) => {
            return Object.assign(acc, value)
        }, {}) 

        this.props.handleUpdate(category, reduce, id)
    }

    render() {
        const { allUsers, allBusiness, category, loading, mobile, view, handleView, viewData } = this.props

        const mapAllUsers = allUsers.map(item => {
            return (
                <Table.Row key={item._id} style={{cursor: 'pointer'}}>
                  <Table.Cell onClick={() => {
                      handleView(true)
                      viewData('persona', item)
                      }}>{item.nombre}</Table.Cell>
                  <Table.Cell onClick={() => {
                      handleView(true)
                      viewData('persona', item)
                      }}>{item.dni}</Table.Cell>
                  <Table.Cell textAlign={mobile ? 'right' :'center'}><ManageIcons id={item._id} category={item.category} submitUpdate={this.submitUpdate} handleChange={this.handleChange} /></Table.Cell>
                </Table.Row>
            )
        })
    
        const mapAllBusiness = allBusiness.map(item => {
            return (
                <Table.Row key={item._id} style={{cursor: 'pointer'}}>
                  <Table.Cell onClick={() => {
                      handleView(true)
                      viewData('empresa', item)
                      }}>{item.nombre}</Table.Cell>
                  <Table.Cell onClick={() => {
                      handleView(true)
                      viewData('empresa', item)
                      }}>{item.ruc}</Table.Cell>
                  <Table.Cell textAlign={mobile ? 'right' : 'center'}><ManageIcons id={item._id} category={item.category} submitUpdate={this.submitUpdate} handleChange={this.handleChange} /></Table.Cell>
                </Table.Row>
            )
        })

        return (
            <React.Fragment>
                {loading ? <Dimmer active inverted>
                  <Loader inverted content='Loading' />
                </Dimmer> : view ? <ViewManager  handleView={handleView} mobile={mobile} category={category} /> : 
                <Table celled selectable>
                    {mobile ? null : <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>{category === 'persona' ? 'Nombre': 'Nombre de Contacto'}</Table.HeaderCell>
                            <Table.HeaderCell>{category === 'persona' ? 'DNI' : 'RUC'}</Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>}
                    <Table.Body>
                        {category === 'persona' ? mapAllUsers : mapAllBusiness}
                    </Table.Body>
                </Table>}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        allUsers: state.data.allUsers,
        allBusiness: state.data.allBusiness,
        loading: state.ui.loading,
        admin: state.ui.admin
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleGetAll: (category) => dispatch(dataActions.handleGetAll(category)),
        viewData: (category, item) => dispatch(UIActions.viewData(category, item)),
        handleUpdate: (category, obj, id) => dispatch(dataActions.handleUpdate(category, obj, id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Panel)