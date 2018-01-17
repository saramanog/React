import * as React from 'react';
import * as ReactDOM from 'react-dom';
import  FirstComponent from './src/FirstComponent'

ReactDOM.render(
    <div>
        <h1>Hello React</h1>
        <FirstComponent/>
    </div>, document.getElementById("root")
)