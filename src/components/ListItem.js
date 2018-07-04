import React from 'react';
import {Row, Col, Glyphicon} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import '../stylesheets/Listings.css';
import {LinkContainer} from 'react-router-bootstrap';

class ListItem extends React.Component {

    render() {
        return (
            <Link to={{ pathname: `parking-booking/${this.props.sensorId}`, state: { parkingSpot: this.props} }}>
                <Row className="list-item">
                    <Col xs={3}>
                        <div className="distance">
                            {this.props.distanceInKm} km
                        </div>

                    </Col>
                    <Col xs={5}>
                        <div className="heading">
                            {this.props.startTime} <Glyphicon glyph="resize-horizontal"/> {this.props.endTime}
                        </div>
                        <div>
                            {this.props.streetAddress}
                        </div>
                    </Col>
                    <Col xs={4}>
                        <div className="price">EUR {(this.props.pricePerMinute * 60.0).toFixed(2)}/hr</div>
                        <div>{this.props.pricePerMinute} per minute</div>
                    </Col>
                </Row>
            </Link>
        );
    }
}

export default ListItem;