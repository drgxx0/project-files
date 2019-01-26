import * as actionsTypes from './actionsTypes'


export const handleActiveButton = (id) => {
    return {
        type: actionsTypes.BUTTON_ACTIVE,
        id
    }
}


export const sendingData = () => {
    return {
        type: actionsTypes.SENDING_DATA
    }
}

export const viewData = (category, {nombre, dni, celular, correo, direccion, departamento, provincia, distrito, ruc, razon, comentario}) => {
    if(category === 'persona') {
        return {
            type: actionsTypes.VIEW_PERSON_DATA,
            nombre, 
            dni, 
            celular, 
            correo, 
            direccion, 
            departamento,
            provincia, 
            distrito, 
            comentario
        }
    } else if (category === 'empresa') {
        return {
            type: actionsTypes.VIEW_BUSINESS_DATA,
            nombre,
            celular, 
            correo, 
            direccion, 
            departamento, 
            provincia, 
            distrito, 
            ruc, 
            razon, 
            comentario
        }
    }
    
}

export const restoreApp = () => {
    return {
        type: actionsTypes.RESTORE_APP
    }
}

export const blockDistricts = () => {
    return {
        type: actionsTypes.NOT_DISTRICTS
    }
}