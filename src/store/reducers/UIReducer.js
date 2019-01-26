import * as actionsTypes from 'store/actions/actionsTypes'


const initialState = {
    buttonActive: 1,
    loading: false,
    status: false,
    message: '',
    registerError: false,
    admin: false,
    dataView: {
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
}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionsTypes.BUTTON_ACTIVE:
            return {
                ...state,
                buttonActive: action.id,
            }
        case actionsTypes.PERSON_CREATE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionsTypes.BUSINESS_CREATE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionsTypes.FORM_SENT:
            return {
                ...state,
                status: action.result.status,
                message: action.result.message,
                loading: false
            }
        case actionsTypes.REGISTER_ERROR:
            return {
                ...state,
                status: true,
                message: action.message,
                registerError: true,
                loading: false
            }
        case actionsTypes.RESTORE_APP:
            return {
                ...state,
                status: false,
                message: '',
                registerError: false
            }
        case actionsTypes.GET_ALL_PERSONS: 
            return {
                ...state,
                loading: true
            }
        case actionsTypes.GET_ALL_BUSINESS: 
            return {
                ...state,
                loading: true
            }
        case actionsTypes.GET_ALL_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case actionsTypes.SEND_LOGIN_DATA:
            return {
                ...state,
                loading: true
            }
        case actionsTypes.LOGIN_SUCCESS:
            return {
                ...state,
                admin: true,
                loading: false,
                status: false,
                message: '',
            }
        case actionsTypes.LOGIN_FAIL:
            return {
                ...state,
                message: action.message,
                status: true,
                loading: false
            }
        case actionsTypes.LOGOUT:
            return {
                ...state,
                admin: false
            }
        case actionsTypes.DELETE_PERSON:
            return {
                ...state,
                loading: true
            }
        case actionsTypes.VIEW_PERSON_DATA:
            return {
                ...state,
                data: {
                    ...state.data,
                    nombre: action.nombre,
                    dni: action.dni,
                    celular: action.celular,
                    correo: action.correo,
                    direccion: action.direccion,
                    departamento: action.departamento,
                    provincia: action.provincia,
                    distrito: action.distrito,
                    comentario: action.comentario
                }
            }
        case actionsTypes.VIEW_BUSINESS_DATA:
            return {
                ...state,
                data: {
                    ...state.data,
                    nombre: action.nombre,
                    ruc: action.ruc,
                    celular: action.celular,
                    correo: action.correo,
                    direccion: action.direccion,
                    departamento: action.departamento,
                    provincia: action.provincia,
                    distrito: action.distrito,
                    razon: action.razon,
                    comentario: action.comentario
                }
            }
        case actionsTypes.UPDATE_PERSON:
            return {
                ...state,
                loading: true
            }
        case actionsTypes.UPDATE_BUSINESS:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}

export default reducer