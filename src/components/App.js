import React from 'react';
import MenuBar from './MenuBar';
import TimeBooking from './TimeBooking';
import Listings from './Listings';
import {Grid} from 'react-bootstrap';

class App extends React.Component {
    render() {
        return (
            <Grid>
                <MenuBar/>
                <TimeBooking/>
                <Listings/>
            </Grid>
        );
    }
}

export default App;