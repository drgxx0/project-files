import React from 'react'
import { connect } from 'react-redux'

import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'

import back from 'components/assets/img/back.jpg'

const Login = ({ email, contraseña, handleLoginChange, handleLoginData, status, message, loading }) => {
      return (
      <Grid textAlign='center' verticalAlign='middle' style={window.innerWidth < 767 ? { height: '106vh', background: `url(${back}) center center`, backgroundSize: 'cover' } : { height: '100vh', background: `url(${back}) center center`, backgroundSize: 'cover' }}>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='black' textAlign='center'>
          Admin Panel
        </Header>
        <Form size='large'>
          <Segment stacked loading={loading}>
            <Form.Input name='email' fluid icon='user' iconPosition='left' placeholder='E-mail' onChange={(e) => handleLoginChange(e.target.name, e.target.value)} value={email} />
            <Form.Input
              fluid
              name='contraseña'
              icon='lock'
              iconPosition='left'
              placeholder='Contraseña'
              type='password'
              value={contraseña}
              onChange={(e) => handleLoginChange(e.target.name, e.target.value)}
            />

            <Button color='black' fluid size='large' onClick={() => handleLoginData(email, contraseña)}
              >
              Entrar
            </Button>
            {status ? <p style={{color: 'red'}}>{message}</p> : null}
          </Segment>
        </Form>
      </Grid.Column>
      </Grid>
      )}

const mapStateToProps = state => {
  return {
    status: state.ui.status,
    message: state.ui.message,
    loading: state.ui.loading
  }
}

export default connect(mapStateToProps, null)(Login)