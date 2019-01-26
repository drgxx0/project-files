import React from 'react'
import { connect } from 'react-redux'

import * as authActions from 'store/actions/authActions'

import { Menu, Button, Icon } from 'semantic-ui-react'

const NavBar = ({ history, login, admin, handleLogout }) => {
    return ( 
        <Menu secondary={admin ? false : true} inverted={admin ? true : false } style={admin ? {padding: 5, marginBottom: 0} : login ? {position: 'relative', top: 60, marginTop: -40, marginLeft: 10} : {margin: 0}}>
          <Menu.Menu position={login ? 'left' : 'right'}>
          {login ? <Icon name='home' size='big' style={{cursor: 'pointer'}} onClick={() => history.push('/')} /> : <Button
            inverted
            basic={admin ? true : false}
            color={admin ? 'grey' : null}
            onClick={admin ? handleLogout : () => history.push('/admin')}
            >{admin ? 'Logout' : 'Admin'}</Button>}
          </Menu.Menu>
        </Menu>
    )
}

const mapDispatchToProps = dispatch => {
  return {
    handleLogout: () => dispatch(authActions.handleLogout())
  }
}

export default connect(null, mapDispatchToProps)(NavBar)