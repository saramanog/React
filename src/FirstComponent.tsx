import * as React from 'react';

let logo = "https://logrocket.com/img/logo.png";

export default class FirstComponent extends React.Component<{}> {

    render()  {
        return (
            <div>
                <h1>Trying React with TypeScript</h1>
                <div>
                    <img src= { logo }/>
                </div>

            </div>
        );
    }
}