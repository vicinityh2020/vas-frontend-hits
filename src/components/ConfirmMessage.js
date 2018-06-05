import React from 'react';
import {Col, Row, Button, Glyphicon} from 'react-bootstrap';


class ConfirmMessage extends React.Component {
    constructor(props) {
        super(props);
    }

    static handleBack() {
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
                        <Button onClick={ConfirmMessage.handleBack} bsStyle="success">
                            Back To Index
                        </Button>
                    </Col>
                </div>
            </Row>
        );
    }
}

export default ConfirmMessage;