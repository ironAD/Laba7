import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Btn from './Btn';
import Timer from './Timer';
import Roll from './Roll';
import List from './List';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Roll />, document.getElementById("roll"));
ReactDOM.render(<Btn />, document.getElementById("btn"));
ReactDOM.render(<Timer />, document.getElementById("timer"));
ReactDOM.render(<List />, document.getElementById("list"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
