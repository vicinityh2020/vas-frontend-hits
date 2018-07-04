import React from 'react';
import MenuBar from '../components/MenuBar';
import {Grid} from 'react-bootstrap';
import ConfirmMessage from '../components/ConfirmMessage';
import {timeToInt} from 'time-number';

import '../stylesheets/success.css';

class Confirmation extends React.Component {

    constructor(props) {
        super(props);

        this.reserveSpot = this.reserveSpot.bind(this);

        this.state = {
            reservation_unique: null
        };
    }

    componentDidMount() {
        this.reserveSpot(this.props.location.state.obj.sensorId);
    }

    reserveSpot(parking_spot_id) {
        console.log(parking_spot_id);
        let body = {
            date: '2018-07-05',
            from: timeToInt(this.props.location.state.from),
            to: timeToInt(this.props.location.state.to),
        };

        (async () => {
            fetch(`/api/reserve/parking-slots/${parking_spot_id}`, {
                method: 'POST',
                body: JSON.stringify(body),
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            }).then(r => {
                if (r.status === 200) {
                    console.log('/api/reserve/parking-slots returned 200');
                    return r.json();
                }
            }).then(json => {
                console.log(json);

                this.setState({
                    reservation_unique: json['body']['unique_res_id']
                });

                console.log(`${this.state.from} <--> ${this.state.to}`);
            }).catch(e => {
                console.log('VAS adapter does not seem to be running ...');
            });
        })();
    }

    render() {
        return (
            <Grid>
                <MenuBar title="Reserved"/>
                ${this.state.reservation_unique ? <ConfirmMessage unique={this.state.reservation_unique}/> :
                    <h1>Reserving, please wait ...</h1>}
            </Grid>
        );
    }
}

export default Confirmation;