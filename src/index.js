import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import storeConfig from './store/index';

const history = createHistory();
const store = storeConfig();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root'),
);

serviceWorker.unregister();
