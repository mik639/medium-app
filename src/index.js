import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './libs/configureStore';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import './css/_common.scss';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
