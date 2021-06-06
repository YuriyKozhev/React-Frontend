import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Updater from './components/Updater';
import Viewer from './components/Viewer';

ReactDOM.render(<Updater />, document.getElementById('root'));
ReactDOM.render(<Viewer />, document.getElementById('viewer'));