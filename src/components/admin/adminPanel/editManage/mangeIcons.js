import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Icon,  Button, Header, Modal } from 'semantic-ui-react'

import EditForm from '../editForm/editForm'

import * as dataActions from 'store/actions/dataActions'

class ManageIcons extends Component {

    state = {
        modalStatus: false
    }

    handleModal = () => {
        this.setState({
            modalStatus: !this.state.modalStatus
        })
    }

    render() {

        const delay = (time = 500) => {
          return new Promise(resolve => {
            setTimeout(() => {
              resolve(true);
            }, time);
          });
        };

        const { id, category, handleDelete, handleGetAll,  handleChange, submitUpdate } = this.props
        const { modalStatus } = this.state

        return (
            <React.Fragment> 
                <Modal trigger={<Icon name='edit' size='large' color='green' style={{cursor: 'pointer'}} />}>
                  <Modal.Header>Editar persona</Modal.Header>
                  <Modal.Content>
                      <EditForm id={id} category={category} submitUpdate={submitUpdate} handleChange={handleChange} />
                  </Modal.Content>
                </Modal> 
                <Modal trigger={<Icon name='x' size='large' color='red' onClick={ this.handleModal} style={{cursor: 'pointer'}} />} basic size='small' open={modalStatus}>
                  <Header icon='archive' content='¿Esta seguro de querer eliminar este elemento?' />
                  <Modal.Content>
                    <p>
                      Esta a punto de eliminar este elemento permanentemente de la base de datos, ¿Esta seguro?
                    </p>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button basic color='red' inverted onClick={this.handleModal}>
                      <Icon name='remove' /> No
                    </Button>
                    <Button color='green' inverted onClick={async() => {
                        handleDelete(category, id)
                        await delay()
                        handleGetAll(category)
                        }}>
                      <Icon name='checkmark' /> Sí
                    </Button>
                  </Modal.Actions>
                </Modal>
            </React.Fragment>
        )
    }
    } 

const mapDispatchToProps = dispatch => {
    return {
        handleDelete: (category, id) => dispatch(dataActions.handleDelete(category, id)),
        handleGetAll: (category) => dispatch(dataActions.handleGetAll(category)),
    }
}

export default connect(null, mapDispatchToProps)(ManageIcons)