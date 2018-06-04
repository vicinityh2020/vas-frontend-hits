import React from 'react';
import TimePicker from 'react-bootstrap-time-picker';
import {Col, Row, Button} from 'react-bootstrap';
import '../stylesheets/Time.css';

class TimeBooking extends React.Component {
    constructor() {
        super();

        this.handleFromTime = this.handleFromTime.bind(this);
        this.handleToTime = this.handleToTime.bind(this);
        this.state = { fromTime: 0, toTime: 0 };
    }

    handleFromTime(time) {
        console.log(time);     // <- prints "3600" if "01:00" is picked
        this.setState({ fromTime: time });
    }

    handleToTime(time) {
        console.log(time);     // <- prints "3600" if "01:00" is picked
        this.setState({ toTime: time });
    }

    render() {
        return (
            <Row className="time-booking">
                <Col xs={6}>
                    <h6>From</h6>
                    <TimePicker
                        start="10:00"
                        end="17:00"
                        format={24}
                        step={15}
                        onChange={this.handleFromTime}
                        value={this.state.fromTime}
                    />
                </Col>
                <Col xs={6}>
                    <h6>To</h6>
                    <TimePicker
                        start="13:00"
                        end="17:00"
                        format={24}
                        step={15}
                        onChange={this.handleToTime}
                        value={this.state.toTime}
                    />
                </Col>
                <Col className="text-center find-parking" xs={12}>
                    <Button bsStyle="primary">Find Parking</Button>
                </Col>
            </Row>
        );
    }
}

export default TimeBooking;