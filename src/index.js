import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import App from './App';
import {indicator_1} from './Reducers/indicator_1';
import {indicator_2} from './Reducers/indicator_2';
import {enterText} from './Reducers/enterText';
import {products} from './Reducers/products';
import thunk from 'redux-thunk';

const storeFactory = () =>
    applyMiddleware(thunk)(createStore)(combineReducers(
            {
                indicator_1,
                indicator_2,
                enterText,
                products
            }));

const store = storeFactory(true);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
