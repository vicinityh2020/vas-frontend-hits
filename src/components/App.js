import React from 'react';
import Index from './Index';
import {Button} from 'react-bootstrap';

class App extends React.Component {
    render() {
        return (
            <div>
                <Index/>
                <Button onClick={() => {
                    fetch('http://localhost:8080/rest/items/LightColor', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'text/plain',
                        },
                        body: 'ON'
                    });
                }}>
                    Turn
                </Button>
            </div>
        );
    }
}

export default App;