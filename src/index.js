import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import App from 'container/App';
import * as serviceWorker from 'serviceWorker';

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'

import createSagaMiddleware from 'redux-saga'

import UIReducer from 'store/reducers/UIReducer'
import dataReducer from 'store/reducers/dataReducer'

import saga from 'store/saga/saga'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    ui: UIReducer,
    data: dataReducer
})

const sagaMiddleware = createSagaMiddleware()


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(saga)

const app = (
    <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
