import React from 'react'
import { connect } from 'react-redux'

import { Segment, Label, Grid, Button, Header } from 'semantic-ui-react'

const ViewManager = ({ nombre, dni, celular, correo, direccion, departamento, provincia, distrito, comentario, ruc, razon, mobile, handleView, category }) => {
    return (
        <React.Fragment>
           <Grid container celled columns={mobile ? 2 :3} >
                <Grid.Row>
                    <Grid.Column>
                        <Label>Nombre</Label>
                        <Header as='h5'>{nombre}</Header>
                    </Grid.Column>
                    <Grid.Column>
                        <Label>{category === 'persona' ? 'DNI' : 'RUC'}</Label>
                        {mobile ? <Header as='h5' style={{wordBreak: 'break-all'}} >{category === 'persona' ? dni : ruc}</Header> : <Segment style={{wordBreak: 'break-all'}}>{category === 'persona' ? dni: ruc}</Segment>}
                    </Grid.Column>
                    <Grid.Column>
                        <Label>Celular</Label>
                        {mobile ? <Header as='h5'>{celular}</Header> :<Segment>{celular}</Segment>}
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Label>Correo</Label>
                        {mobile ? <Header as='h5' style={{wordBreak: 'break-all'}}>{correo}</Header> :<Segment>{correo}</Segment>}
                    </Grid.Column>
                    <Grid.Column>
                        <Label>Dirección</Label>
                        {mobile ? <Header as='h5'>{direccion}</Header> :<Segment>{direccion}</Segment>}
                    </Grid.Column>
                    <Grid.Column>
                        <Label>Departamento</Label>
                        {mobile ? <Header as='h5'>{departamento}</Header> :<Segment>{departamento}</Segment>}
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Label>Provincia</Label>
                        {mobile ? <Header as='h5'>{provincia}</Header> : <Segment>{provincia}</Segment>}
                    </Grid.Column>
                    <Grid.Column>
                        <Label>Distrito</Label>
                        {mobile ? <Header as='h5'>{distrito}</Header> : <Segment>{distrito}</Segment>}
                    </Grid.Column>
                    <Grid.Column>
                        <Label>{category === 'empresa' ? 'Razon' : 'Comentario'}</Label>
                        {mobile ? <Header as='h5' style={{wordBreak: 'break-all'}}>{comentario}</Header> : <Segment style={{wordBreak: 'break-all'}}    >{category==='empresa' ? razon : comentario}</Segment>}
                    </Grid.Column>
                </Grid.Row>
                    {category==='empresa' ?<Grid.Column>
                        <Label>Comentario</Label>
                        {mobile ? <Header as='h5' style={{wordBreak: 'break-all'}}>{comentario}</Header> :<Segment style={{wordBreak: 'break-all'}}>{comentario}</Segment>}
                    </Grid.Column> : <span></span>}
            </Grid>
            <Grid.Row>
                <Grid.Column style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Button secondary onClick={() =>  handleView(false)}>Atras</Button>
                </Grid.Column>
            </Grid.Row>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        nombre: state.ui.data.nombre,
        dni: state.ui.data.dni,
        celular: state.ui.data.celular,
        correo: state.ui.data.correo,
        direccion: state.ui.data.direccion,
        departamento: state.ui.data.departamento,
        provincia: state.ui.data.provincia,
        distrito: state.ui.data.distrito,
        comentario: state.ui.data.comentario,
        ruc: state.ui.data.ruc,
        razon: state.ui.data.razon
    }
} 

export default connect(mapStateToProps, null)(ViewManager)