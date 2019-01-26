import * as actionsTypes from 'store/actions/actionsTypes'

import jsonDepartments from 'json/departamentos.json'
import jsonProvincies from 'json/provincias.json'
import jsonDistricts from 'json/distritos.json'

export const getDep = () => {
    const departments = jsonDepartments
    return {
        type: actionsTypes.GET_DEPARTMENTS,
        departments
    }
}

export const getProvincies = (id) => {
    
    const provincies = jsonProvincies[id]

    return {
        type: actionsTypes.GET_PROVINCIES,
        provincies
    }
}

export const getDistricts = (id) => {
    const districts = jsonDistricts[id]

    if(districts.lenght) {
        return {
            type: actionsTypes.NOT_DISTRICTS
        }
    }
    return {
        type: actionsTypes.GET_DISTRICTS,
        districts
    }
}

export const createNewData = (category , arg) => {
    if(category === 'persona') {
        return {
            type: actionsTypes.PERSON_CREATE_REQUEST,
            data: arg,
            category
        }
    } else if (category=== 'empresa') {
        return {
            type: actionsTypes.BUSINESS_CREATE_REQUEST,
            data: arg,
            category
        }
    }
}

export const handleGetAll = (category) => {
    if(category === 'persona') {
        return {
            type: actionsTypes.GET_ALL_PERSONS
        }
    } else if (category === 'empresa') {
        return {
            type: actionsTypes.GET_ALL_BUSINESS
        }
    }
}

export const handleDelete = (category, id) => {
    if(category === 'persona') {
        return {
            type: actionsTypes.DELETE_PERSON,
            data: {
                category,
                id
            }
        }
        
    } else if (category=== 'empresa') {
        return {
            type: actionsTypes.DELETE_BUSINESS,
            data: {
                category,
                id
            }
        }
    }
}

export const handleUpdate = (category, obj, id) => {
    if(category === 'persona') {
        return {
            type: actionsTypes.UPDATE_PERSON,
            obj,
            id
        }
    } else if (category === 'empresa') {
        return {
            type: actionsTypes.UPDATE_BUSINESS,
            obj,
            id
        }
    }
}