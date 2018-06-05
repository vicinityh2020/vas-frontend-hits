import React from 'react';
import MenuBar from '../components/MenuBar';
import {Grid} from 'react-bootstrap';
import ConfirmMessage from '../components/ConfirmMessage';

import '../stylesheets/success.css';

class Confirmation extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid>
                <MenuBar/>
                <ConfirmMessage/>
            </Grid>
        );
    }
}

export default Confirmation;