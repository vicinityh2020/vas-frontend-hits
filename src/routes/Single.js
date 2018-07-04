import React from 'react';
import MenuBar from '../components/MenuBar';
import {Grid} from 'react-bootstrap';
import PropTypes from 'prop-types';
import SingleItem from '../components/SingleItem';
import FinalBookingTime from '../components/FinalBookingTime';

class Single extends React.Component {

    constructor(props) {
        super(props);

        this.parkingSpot = this.props.location.state.parkingSpot;

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