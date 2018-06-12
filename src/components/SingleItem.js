import React from 'react';
import {Row, Col, Glyphicon} from 'react-bootstrap';
import PropTypes from 'prop-types';

import '../stylesheets/Single.css';
import '../stylesheets/Listings.css';
import {LinkContainer} from 'react-router-bootstrap';

class SingleItem extends React.Component {

    constructor(props) {
        super(props);

        this.displayParkingInfo = this.displayParkingInfo.bind(this);
    }

    displayParkingInfo() {
        return (
            <Row className="single-info">
                <Col style={{textAlign: 'right', fontWeight: 500}} xs={6}>
                    Parking ID:
                </Col>
                <Col xs={6}>
                    {this.props.obj.sensorId}
                </Col>

                <Col style={{textAlign: 'right', fontWeight: 500}} xs={6}>
                    Start Time:
                </Col>
                <Col xs={6}>
                    {this.props.obj.startTime}
                </Col>

                <Col style={{textAlign: 'right', fontWeight: 500}} xs={6}>
                    End Time:
                </Col>
                <Col xs={6}>
                    {this.props.obj.endTime}
                </Col>

                <Col style={{textAlign: 'right', fontWeight: 500}} xs={6}>
                    Street Address:
                </Col>
                <Col xs={6}>
                    {this.props.obj.streetAddress}
                </Col>

                <Col style={{textAlign: 'right', fontWeight: 500}} xs={6}>
                    Price Per Minute:
                </Col>
                <Col xs={6}>
                    €{this.props.obj.pricePerMinute}
                </Col>
            </Row>
        );
    }

    render() {
        console.log(this.props.obj);
        return (
            <Row className="single-wrapper">
                <Col xs={12} md={6}>
                    <img alt="parking-spot" src="../img/parking-demo.png"/>
                </Col>
                <Col md={6} xs={12}>
                    {this.displayParkingInfo()}
                </Col>
            </Row>
        );
    }
}

SingleItem.propTypes = {
    obj: PropTypes.object.isRequired
};

export default SingleItem;