import React from 'react';
import Index from './Index';
import {Button} from 'react-bootstrap';

class App extends React.Component {
    render() {
        return (
            <div>
                <Index/>
                <Button onClick={() => {
                    fetch('http://192.168.1.41:8080/rest/items/LightColor', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'text/plain',
                            'Origin': '192.168.1.41'
                        },
                        body: 'ON'
                    }).catch(
                        (error) => {
                            console.log(error);
                        }
                    );
                }}>
                    Turn ON
                </Button>

                <Button onClick={() => {
                    fetch('http://192.168.1.41:8080/rest/items/LightColor', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'text/plain',
                            'Origin': '192.168.1.41',
                        },
                        body: 'OFF'
                    }).catch(
                        (error) => {
                            console.log(error);
                        }
                    );
                }}>
                    Turn OFF
                </Button>
            </div>
        );
    }
}

export default App;