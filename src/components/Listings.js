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
        // console.log('componentDidMount');
        // let body = {
        //     'date': '2018-07-04',
        //     'from': 31000,
        //     'to': 61200,
        // };
        // (async () => {
        //     fetch('/api/view/parking-slots/3', {
        //         method: 'POST',
        //         body: JSON.stringify(body),
        //         credentials: 'include',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'Accept': 'application/json',
        //         }
        //     }).then(r => {
        //         if (r.status === 200) {
        //             console.log('/api/view/parking-slots/3 returned 200');
        //             return r.json();
        //         }
        //     }).then(json => {
        //         console.log(json);
        //
        //         for (let obj of json['body']) {
        //             obj['start_time'] = obj['start_time'].slice(0, -3);
        //             obj['end_time'] = obj['end_time'].slice(0, -3);
        //         }
        //
        //         this.setState({listings: json['body']});
        //     });
        // })();
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