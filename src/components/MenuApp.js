import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import '../stylesheets/Menu.css';

class MenuApp extends Component {
    render() {
        return (
            <Button variant={'raised'} color={'primary'}> Hello </Button>
        );
    }
}

export default MenuApp;
