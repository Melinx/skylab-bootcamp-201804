import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import TaskApp from './components/TaskApp';

// ReactDOM.render(<App />, document.getElementById('root'));


ReactDOM.render(<TaskApp /> , document.getElementById('root'));

/// to be completed with "operation"


registerServiceWorker();