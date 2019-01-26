import React from 'react'
import { connect } from 'react-redux'

import { Segment, Button, Icon, Header } from 'semantic-ui-react'

import * as UIActions from 'store/actions/UIActions'

const Success = ({ message, registerError, restoreApp }) => {
    return (
        <Segment style={{backgroundColor: 'rgba(255,255,255,0.7)', width: '50%', marginLeft: '25%'}} >
            <Icon name={registerError ? 'x' : 'check circle'} size='massive' color={registerError ? 'red' : 'green'} />
            <Header as='h4'>{message}</Header>
            <Button color='black' onClick={restoreApp}>Atras</Button>
        </Segment>
    )
}

const mapStateToProps = state => {
    return {
        registerError: state.ui.registerError
    }
}

const mapDispatchToProps = dispatch => {
    return {
        restoreApp: () => dispatch(UIActions.restoreApp())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Success)