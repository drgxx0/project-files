import { call, put, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios'

import * as actionsTypes from 'store/actions/actionsTypes';


function* createNewPerson() {
  yield takeEvery(actionsTypes.PERSON_CREATE_REQUEST, createPerson)
}

function* getAllPersons() {
  yield takeEvery(actionsTypes.GET_ALL_PERSONS, readAllPersons)
}

function* deleteSelectedPerson() {
    yield takeEvery(actionsTypes.DELETE_PERSON, deletePerson)
}

function* updateSelectedPerson() {
    yield takeEvery(actionsTypes.UPDATE_PERSON, updatePerson)
}

const create = (data) => {
    const { nombre, dni, celular, correo, departamento, provincia, distrito, direccion, comentario } = data.data
    return axios({
        method: "post",
        url: `https://servidorproyectodrgxx0.herokuapp.com/persona/`,
        data: {
            category: data.category,
            nombre,
            dni,
            celular,
            correo,
            departamento,
            provincia,
            distrito,
            direccion,
            comentario
        }
    })
}

const readAll = () => {
    return axios({
        method: "get",
        url: 'https://servidorproyectodrgxx0.herokuapp.com/persona/'
    })
}

const deleteP = ({ category, id }) => {
    return axios({
        method: "delete",
        url: `https://servidorproyectodrgxx0.herokuapp.com/${category}/${id}`
    })
}

const updateP = ({obj, id}) => {
    return axios({
        method: 'put',
        url: `https://servidorproyectodrgxx0.herokuapp.com/persona/${id}`,
        data: obj
    })
}

function* createPerson(data) {
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
                    message: "Usuario registrado correctament",
                }   
            })
        }
    } catch (e) {
        console.log(e)
    }
}


function* readAllPersons() {
    try {
        const item = yield call(readAll)
        yield put({
            type: actionsTypes.GET_ALL_SUCCESS,
            data: item.data,
            category: 'allUsers'
        })
    } catch (e) {
        console.log(e)
    }
}

function* deletePerson(data) {
    try {
        const item = yield call(deleteP, data.data)
        if(item.data.deletedCount === 1) {
            yield put({
                type: actionsTypes.DELETE_SUCCESS
            })
        }
    } catch(e) {
        console.log(e)
    }
}

function* updatePerson(data) {
    try {
        const item = yield call(updateP, data)
        if(item.data.message) {
            yield put({
                type: actionsTypes.UPDATE_SUCCESS,
            })
        }
    } catch(e) {
        console.log(e)
    }
}

export default function* person() {
    yield all([
        createNewPerson(),
        getAllPersons(),
        deleteSelectedPerson(),
        updateSelectedPerson()
    ])
}
