import { fork, all } from 'redux-saga/effects';

import createNewPerson from './sagaPerson'
import createNewBusiness from './sagaBusiness'
import sagaLogin from './sagaLogin'

export default function* saga() {
    yield all([
        fork(createNewPerson),
        fork(createNewBusiness),
        fork(sagaLogin)
        
    ])
}