import React from 'react';
import ReactDOM  from 'react-dom';
import App from './components/App';

import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes';
import createRoutes from './routes';


import 'semantic-ui-css/semantic.min.css';
import { Form } from 'semantic-ui-react';
const routes = createRoutes();


ReactDOM.render(
    <Provider store={store}>
    {routes}
    </Provider>,
    document.querySelector('#root')

)