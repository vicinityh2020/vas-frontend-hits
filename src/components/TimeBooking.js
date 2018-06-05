import React from 'react';
import TimePicker from 'react-bootstrap-time-picker';
import {Col, Row, Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../stylesheets/Time.css';
import {timeFromInt, timeToInt} from 'time-number';

class TimeBooking extends React.Component {
    constructor(props) {
        super(props);

        this.handleFromTime = this.handleFromTime.bind(this);
        this.handleToTime = this.handleToTime.bind(this);
        this.state = { fromTime: props.initTime, toTime: (props.endTime) };
    }

    // static propTypes = {
    //     findParking: PropTypes.object.isFunction,
    // };

    handleFromTime(time) {
        let timeString = timeFromInt(time);
        console.log(`Selected new from time: ${timeString}`);
        this.setState({ fromTime: timeString });
        this.props.updateSelected(timeString, this.state.toTime);
    }

    handleToTime(time) {
        let timeString = timeFromInt(time);
        console.log(`Selected new to time: ${timeString}`);
        this.setState({ toTime: timeString });
        this.props.updateSelected(this.state.fromTime, timeString);
    }

    render() {
        return (
            <Row className="time-booking">
                <Col xs={6}>
                    <h6>From</h6>
                    <TimePicker
                        start="00:00"
                        end="23:00"
                        format={24}
                        step={60}
                        onChange={this.handleFromTime}
                        value={this.state.fromTime}
                    />
                </Col>
                <Col xs={6}>
                    <h6>To</h6>
                    <TimePicker
                        start="00:00"
                        end="23:00"
                        format={24}
                        step={60}
                        onChange={this.handleToTime}
                        value={this.state.toTime}
                    />
                </Col>
                <Col className="text-center find-parking" xs={12}>
                    <Button
                        onClick={() => this.props.findParking(this.state.fromTime, this.state.toTime)}
                        bsStyle="primary">Find Parking
                    </Button>
                </Col>
            </Row>
        );
    }
}

export default TimeBooking;