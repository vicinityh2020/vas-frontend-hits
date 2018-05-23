import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import App from './components/App';
import Picker from './components/Picker';
import ResultTable from './components/ResultTable';

ReactDOM.render(
    <div>
        <div style={{backgroundColor: '#3366d6', paddingBottom: 5}}>
            <App/>
            <Picker/>
        </div>
        <div>
            <ResultTable/>
        </div>
    </div>, document.getElementById('root'));