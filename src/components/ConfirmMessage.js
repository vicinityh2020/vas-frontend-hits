import React from 'react';
import {Col, Row, Button, Glyphicon} from 'react-bootstrap';


class ConfirmMessage extends React.Component {
    constructor(props) {
        super(props);

        this.controlLight = this.controlLight.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }

    controlLight(status) {
        // return fetch('http://192.168.1.49:8080/rest/items/LightColor', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'text/plain',
        //         'Origin': '192.168.1.49'
        //     },
        //     body: status
        // }).catch(
        //     (error) => {
        //         console.log(error);
        //     }
        // );
        return true;
    }

    componentDidMount() {
        this.controlLight('ON');
    }

    handleBack() {
        this.controlLight('OFF');
        window.location = '/';
    }

    render() {
        return (
            <Row style={{textAlign: 'center'}} className="time-booking">
                <div className="success-box clearfix">
                    <Col xs={12}>
                        <Glyphicon className="checkmark-ok" style={{fontSize: 30, fontWeight: 300}} glyph="ok"/>
                        <h4 className="success-heading" style={{color: '#3367d6'}}>
                            Parking reserved,
                        </h4>
                        <div className="success-message">
                            Here we will present the user with more details about his parking
                            And the light should have been turned on!
                        </div>
                        <Button onClick={this.handleBack} bsStyle="success">
                            Back To Index
                        </Button>
                    </Col>
                </div>
            </Row>
        );
    }
}

export default ConfirmMessage;