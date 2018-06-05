import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './Index';
import Confirmation from './Confirmation';

export default class BasicRouter extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/success" exact component={Confirmation} />
                </Switch>
            </BrowserRouter>
        );
    }
}