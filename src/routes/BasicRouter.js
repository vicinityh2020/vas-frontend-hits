import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './Index';
import Confirmation from './Confirmation';
import Single from './Single';

export default class BasicRouter extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/parking-booking/:id" exact component={Single} />
                    <Route path="/success" exact component={Confirmation} />
                </Switch>
            </BrowserRouter>
        );
    }
}