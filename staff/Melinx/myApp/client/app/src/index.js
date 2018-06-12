import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import api from 'api'
import registerServiceWorker from './registerServiceWorker';
import HashRouter from 'react-router-dom/HashRouter';

api.token = function(token) {
    if (token) {
        return sessionStorage.setItem('token', token)
    }
    return sessionStorage.getItem('token')
}

ReactDOM.render(
   <HashRouter>
<App />
</ HashRouter>, document.getElementById('root'));
registerServiceWorker();
