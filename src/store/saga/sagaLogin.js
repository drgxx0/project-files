import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios'

import * as actionsTypes from 'store/actions/actionsTypes';


function* sendDataLogin() {
  yield takeEvery(actionsTypes.SEND_LOGIN_DATA, sendLogin)
}

const loginData = ({ email, contraseña}) => {
    return axios({
        method: 'post',
        url: 'https://servidorproyectodrgxx0.herokuapp.com/login/',
        data: {
            email,
            contraseña
        }
    })
}

function* sendLogin(user) {
    try {
        const item = yield call(loginData, user.user)
        if(item.data.status) {
            yield put({
                type: actionsTypes.LOGIN_FAIL,
                message: item.data.message
            })
        } else {
            yield put({
                type: actionsTypes.LOGIN_SUCCESS
            })
        }
    } catch (e) {
        console.log(e)
    }
}

export default function* login() {
    yield sendDataLogin()
}
