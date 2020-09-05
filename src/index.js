import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import "../node_modules/@syncfusion/ej2-base/styles/material.css";
import "../node_modules/@syncfusion/ej2-react-inputs/styles/material.css";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // <React.StrictMode>
    <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();