import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {applyMiddleware, compose, legacy_createStore as createStore} from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducers from './store/reducers';
import sagas from './store/sagas';
import 'react-toastify/dist/ReactToastify.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-phone-number-input/style.css'
import './assets/css/style.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk, sagaMiddleware)));

sagaMiddleware.run(sagas);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <App/>
    </Provider>,
);

reportWebVitals();
