import * as actionsTypes from 'store/actions/actionsTypes'

const initialState = {
    departments: [],
    provincies: [],
    districts: [],
    allUsers: [],
    allBusiness: [],
    user: {},
    business: {}
}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionsTypes.GET_PROVINCIES:
            return {
                ...state,
                provincies: action.provincies
            }
        case actionsTypes.GET_DEPARTMENTS:
            return {
                ...state,
                departments: action.departments
            }
        case actionsTypes.GET_DISTRICTS:
            return {
                ...state,
                districts: action.districts
            }
        case actionsTypes.NOT_DISTRICTS:
            return {
                ...state,
                districts: []
            }
        case actionsTypes.GET_ALL_SUCCESS:
            return {
                ...state,
                [action.category]: action.data
            }
        default:
            return state
    }
}

export default reducer