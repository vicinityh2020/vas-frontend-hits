import React from 'react';
import MenuBar from './MenuBar';
import TimeBooking from './TimeBooking';
import Listings from './Listings';
import {Grid} from 'react-bootstrap';
import {timeFromInt} from 'time-number';

class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            from: '10:00',
            to: '12:00',
            selected: false
        };

        this.handlePick = this.handlePick.bind(this);
        this.updateSelectedState = this.updateSelectedState.bind(this);
    }

    updateSelectedState(fromTime, toTime) {

        console.log(`FROM: ${this.state.from} v.s. ${fromTime}`);
        console.log(`TO: ${this.state.to} v.s. ${toTime}`);

        if (this.state.from !== fromTime) {
            this.setState({from: fromTime});
        }

        if (this.state.to !== toTime) {
            this.setState({to: toTime});
        }
    }

    handlePick(from, to) {
        this.setState({
            selected: true,
            from: from,
            to: to,
        });
        console.log(`${this.state.from} <--> ${this.state.to}`);
    }

    render() {
        return (
            <Grid>
                <MenuBar/>
                <TimeBooking
                    initTime={this.state.from}
                    endTime={this.state.to}
                    findParking={this.handlePick}
                    updateSelected={this.updateSelectedState}
                />
                {this.state.selected ? <Listings
                    startTime={this.state.from}
                    endTime={this.state.to}
                /> : 'No results found'}
            </Grid>
        );
    }
}

export default Index;