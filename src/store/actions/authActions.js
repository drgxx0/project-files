import * as actionsTypes from 'store/actions/actionsTypes'


export const handleSendLogin = (email, contraseña) => {
    return {
        type: actionsTypes.SEND_LOGIN_DATA,
        user: {
            email,
            contraseña
        }
    }
}

export const handleLogout = () => {
    return {
        type: actionsTypes.LOGOUT
    }
}
