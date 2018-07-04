import React from 'react';
import {Button, Col, Row} from 'react-bootstrap';
import TimePicker from 'react-bootstrap-time-picker';
import PropTypes from 'prop-types';
import {timeFromInt} from 'time-number';
import {LinkContainer} from 'react-router-bootstrap';

import {Link} from 'react-router-dom';

class FinalBookingTime extends React.Component {

    constructor(props) {
        super(props);

        this.handleFromTime = this.handleFromTime.bind(this);
        this.handleToTime = this.handleToTime.bind(this);
        this.state = { fromTime: props.obj.startTime, toTime: (props.obj.endTime) };
    }

    handleFromTime(time) {
        let timeString = timeFromInt(time);
        console.log(`CONFIRM Selected new from time: ${timeString}`);
        this.setState({ fromTime: timeString });
        this.props.updateTime(timeString, this.state.toTime);
    }

    handleToTime(time) {
        let timeString = timeFromInt(time);
        console.log(`CONFIRM Selected new to time: ${timeString}`);
        this.setState({ toTime: timeString });
        this.props.updateTime(this.state.fromTime, timeString);
    }

    render() {
        return (
            <Row className="time-booking">
                <Col xs={6}>
                    <h6>From</h6>
                    <TimePicker
                        start={this.props.obj.startTime}
                        end={this.props.obj.endTime}
                        format={24}
                        step={1}
                        onChange={this.handleFromTime}
                        value={this.state.fromTime}
                    />
                </Col>
                <Col xs={6}>
                    <h6>To</h6>
                    <TimePicker
                        start={this.props.obj.startTime}
                        end={this.props.obj.endTime}
                        format={24}
                        step={1}
                        onChange={this.handleToTime}
                        value={this.state.toTime}
                    />
                </Col>
                <Col className="text-center find-parking" xs={12}>
                    <Link to={{ pathname: '/success', state: {
                        obj: this.props.obj,        // reservation object
                        from: this.state.fromTime,  // actual from time
                        to: this.state.toTime,      // actual to time
                    }}}>
                        <Button style={{marginTop: 10}}>
                            Confirm booking
                        </Button>
                    </Link>
                </Col>
            </Row>
        );
    }
}

FinalBookingTime.propTypes = {
    obj: PropTypes.object.isRequired,
    updateTime: PropTypes.func.isRequired,
};

export default FinalBookingTime;