import React from 'react';
import MenuBar from '../components/MenuBar';
import {Grid} from 'react-bootstrap';
import PropTypes from 'prop-types';
import SingleItem from '../components/SingleItem';
import FinalBookingTime from '../components/FinalBookingTime';

class Single extends React.Component {

    constructor(props) {
        super(props);

        const sensorId = parseInt(this.props.match.params.id);
        this.parkingSpot = this.listings.find((element) => {
            return element.sensorId === sensorId;
        });

        this.state = {
            from: this.parkingSpot.startTime,
            to: this.parkingSpot.endTime,
        };

        this.updateTime = this.updateTime.bind(this);
    }

    updateTime(fromTime, toTime) {

        console.log(`CONFIRM FROM: ${this.state.from} v.s. ${fromTime}`);
        console.log(`CONFIRM TO: ${this.state.to} v.s. ${toTime}`);

        if (this.state.from !== fromTime) {
            this.setState({from: fromTime});
        }

        if (this.state.to !== toTime) {
            this.setState({to: toTime});
        }
    }

    listings = [
        {
            sensorId: 12,
            startTime: '11:00',
            endTime: '18:00',
            streetAddress: 'Mossveien 18 A',
            pricePerMinute: 0.11,
            distanceInKm: 0.6
        },

        {
            sensorId: 5,
            startTime: '09:00',
            endTime: '21:00',
            streetAddress: 'Mossveien 18 A',
            pricePerMinute: 0.08,
            distanceInKm: 20.4
        },

        {
            sensorId: 70,
            startTime: '15:00',
            endTime: '16:00',
            streetAddress: 'Mossveien 18 A',
            pricePerMinute: 0.09,
            distanceInKm: 20.4
        },

        {
            sensorId: 31,
            startTime: '17:00',
            endTime: '23:40',
            streetAddress: 'Mossveien 18 A',
            pricePerMinute: 0.15,
            distanceInKm: 20.4
        },

        {
            sensorId: 25,
            startTime: '14:00',
            endTime: '16:00',
            streetAddress: 'Mossveien 18 A',
            pricePerMinute: 0.17,
            distanceInKm: 20.4
        },

        {
            sensorId: 48,
            startTime: '07:00',
            endTime: '23:00',
            streetAddress: 'Mossveien 18 A',
            pricePerMinute: 0.14,
            distanceInKm: 20.4
        }
    ];

    render() {
        return (
            <Grid>
                <MenuBar title="Parking Spot"/>
                <SingleItem obj={this.parkingSpot}/>
                <FinalBookingTime updateTime={this.updateTime} obj={this.parkingSpot}/>
            </Grid>
        );
    }
}

Single.propTypes = {
    match: PropTypes.object.isRequired
};

export default Single;