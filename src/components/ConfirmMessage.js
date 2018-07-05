import React from 'react';
import {Col, Row, Button, Glyphicon} from 'react-bootstrap';


class ConfirmMessage extends React.Component {
    constructor(props) {
        super(props);

        this.handleBack = this.handleBack.bind(this);
        this.cancelReservation = this.cancelReservation.bind(this);

        this.state = {
            cancelled: false
        };
    }

    handleBack() {
        window.location = '/';
    }

    cancelReservation() {
        (async () => {
            fetch(`/api/cancel/parking-res/${this.props.unique}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json'
                }
            }).then(r => {
                if (r.status === 200) {
                    this.setState(
                        {cancelled: true}
                    );
                }
            }).catch(
                (error) => {
                    console.log(error);
                }
            );
        })();
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
                            <h4>Your reservation id: {this.props.unique}</h4>
                        </div>
                        <Button onClick={this.handleBack} bsStyle="success">
                            Back To Index
                        </Button>
                        <Button onClick={this.cancelReservation} bsStyle="success">
                            Cancel Reservation
                        </Button>
                    </Col>
                </div>
            </Row>
        );
    }
}

export default ConfirmMessage;