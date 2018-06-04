import React from 'react';
import {Row, Col, Glyphicon} from 'react-bootstrap';
import { timeToInt } from 'time-number';
import ListItem from './ListItem';

import '../stylesheets/Listings.css';

class Listings extends React.Component {

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
            <Row className="listings">
                {
                    this.listings.map((obj, i) => {
                        return (
                            <Col key={i} xs={12}>
                                <ListItem
                                    sensorId={obj.sensorId}
                                    startTime={obj.startTime}
                                    endTime={obj.endTime}
                                    streetAddress={obj.streetAddress}
                                    pricePerMinute={obj.pricePerMinute}
                                    distanceInKm={obj.distanceInKm}
                                />
                            </Col>
                        );
                    })
                }
            </Row>
        );
    }
}

export default Listings;