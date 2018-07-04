import React from 'react';
import {Row, Col, Glyphicon} from 'react-bootstrap';
import {timeToInt} from 'time-number';
import ListItem from './ListItem';

import '../stylesheets/Listings.css';

class Listings extends React.Component {

    constructor (props){
        super(props);
        this.state = {
            listings: null
        };
    }

    componentDidMount(){
    }

    render() {
        return <Row className="listings">
            {this.props.listings ? this.props.listings.map((obj, i) => {
                return (
                    <Col key={i} xs={12}>
                        <ListItem
                            sensorId={obj['sensor_id']}
                            startTime={obj['start_time']}
                            endTime={obj['end_time']}
                            streetAddress={obj['street_address']}
                            pricePerMinute={obj['price_per_minute']}
                            distanceInKm={obj['distance_in_km']}
                        />
                    </Col>
                );
            }): (<Col xs={12}><h3>Loading...</h3></Col>)}
        </Row>;
    }
}

export default Listings;