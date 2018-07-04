import React from 'react';
import MenuBar from '../components/MenuBar';
import TimeBooking from '../components/TimeBooking';
import Listings from '../components/Listings';
import {Grid} from 'react-bootstrap';
import {timeFromInt, timeToInt} from 'time-number';

class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            from: '10:00',
            to: '12:00',
            selected: false,
            listings: null,
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

        let body = {
            'date': '2018-07-04',
            'from': timeToInt(from),
            'to': timeToInt(to),
        };

        (async () => {
            fetch('/api/view/parking-slots/3', {
                method: 'POST',
                body: JSON.stringify(body),
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            }).then(r => {
                if (r.status === 200) {
                    console.log('/api/view/parking-slots/3 returned 200');
                    return r.json();
                }
            }).then(json => {
                console.log(json);

                for (let obj of json['body']) {
                    obj['start_time'] = obj['start_time'].slice(0, -3);
                    obj['end_time'] = obj['end_time'].slice(0, -3);
                }

                this.setState({
                    listings: json['body'],
                    selected: true,
                    from: from,
                    to: to,
                });

                console.log(`${this.state.from} <--> ${this.state.to}`);
            });
        })();
    }

    render() {
        return (
            <Grid>
                <MenuBar title="Parking Selection"/>
                <TimeBooking
                    initTime={this.state.from}
                    endTime={this.state.to}
                    findParking={this.handlePick}
                    updateSelected={this.updateSelectedState}
                />
                {this.state.selected ? <Listings
                    listings={this.state.listings}
                    startTime={this.state.from}
                    endTime={this.state.to}
                /> : 'No results found'}
            </Grid>
        );
    }
}

export default Index;