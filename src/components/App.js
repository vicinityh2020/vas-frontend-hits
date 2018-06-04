import React from 'react';
import MenuBar from './MenuBar';
import TimeBooking from './TimeBooking';
import {Grid} from 'react-bootstrap';

class App extends React.Component {
    render() {
        return (
            <Grid>
                <MenuBar/>
                <TimeBooking/>
            </Grid>
        );
    }
}

export default App;