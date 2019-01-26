import React from 'react'

import { Button } from 'semantic-ui-react'

const Buttons = ({ active, handleActiveButton, id, clearForms, changeType }) => {
    return (
        <React.Fragment>
            <Button content={id === 1 ? 'Persona Natural' : 'Empresa'} inverted color='grey' active={active} toggle={false} onClick={id === 1 ? () => {
                changeType('persona')
                handleActiveButton(id, true)
                clearForms()
                } : () => {
                    changeType('empresa')
                    handleActiveButton(id, false)
                    clearForms()
                    } } />
        </React.Fragment>
    )
}


export default Buttons