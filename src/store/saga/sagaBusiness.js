import { call, put, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios'

import * as actionsTypes from 'store/actions/actionsTypes';

function* createNewBusiness() {
    yield takeEvery(actionsTypes.BUSINESS_CREATE_REQUEST, createBusiness)
}


function* getAllBusiness() {
    yield takeEvery(actionsTypes.GET_ALL_BUSINESS, readAllBusiness)
}

function* deleteBusiness() {
    yield takeEvery(actionsTypes.DELETE_BUSINESS, deleItemBusiness)
}

function* UpdateSelectedBusiness() {
    yield takeEvery(actionsTypes.UPDATE_BUSINESS, updateBusiness)
}




const create = (data) => {
    const { nombre, ruc, razon, celular, correo, departamento, provincia, distrito, direccion, comentario } = data.data
    return axios({
        method: "post",
        url: `https://servidorproyectodrgxx0.herokuapp.com/empresa/`,
        data: {
            nombre,
            ruc,
            razon,
            celular,
            correo,
            departamento,
            provincia,
            distrito,
            direccion,
            comentario,
            category: data.category
        }
    })
}

const readAll = () => {
    return axios({
        method: 'get',
        url: 'https://servidorproyectodrgxx0.herokuapp.com/empresa/'
    })
}

const deleteB = ({category, id}) => {
    return axios({
        method: "delete",
        url: `https://servidorproyectodrgxx0.herokuapp.com/${category}/${id}`
    })
}


const updateB = ({obj, id}) => {
    return axios({
        method: 'put',
        url: `https://servidorproyectodrgxx0.herokuapp.com/empresa/${id}`,
        data: obj
    })
}

function* createBusiness(data) {
    try {
        const item = yield call(create, data);
        if(item.data.error) {
            yield put({
                type: actionsTypes.REGISTER_ERROR,
                message: item.data.message
            })
        } else {
            yield put({
                type: actionsTypes.FORM_SENT,
                result: {
                    status: true,
                    message: "Empresa registrada correctamente",
                }   
            })
        }
    } catch (e) {
        console.log(e)
    }
}

function* readAllBusiness() {
    try {
        const item = yield call(readAll)
        yield put({
            type: actionsTypes.GET_ALL_SUCCESS,
            data: item.data,
            category: 'allBusiness'
        })
    } catch(e) {
        console.log(e)
    }
}

function* deleItemBusiness(data) {
    try {
        const item = yield call(deleteB, data.data)
        if(item.data.deletedCount === 1) {
            yield put({
                type: actionsTypes.DELETE_SUCCESS
            })
        }
    } catch(e) {
        console.log(e)
    }
}

function* updateBusiness(data) {
    try {
        const item = yield call(updateB, data)
        if(item.data.message) {
            yield put({
                type: actionsTypes.UPDATE_SUCCESS,
            })
        }
    } catch(e) {
        console.log(e)
    }
}

export default function* business() {
    yield all([
        createNewBusiness(),
        getAllBusiness(),
        deleteBusiness(),
        UpdateSelectedBusiness()
    ])
}
