import React from 'react';
import { Row, Col, Glyphicon, Button } from 'react-bootstrap';
import '../stylesheets/Menu.css';

class MenuBar extends React.Component {
    render() {
        return (
            <Row className="menu-bar">
                <Col xs={2}>
                    <Button className="menu-hamburger-button" bsSize="small">
                        <Glyphicon glyph="menu-hamburger"/>
                    </Button>
                </Col>
                <Col xs={10}>
                    <h4 className="menu-title">Parking Selection</h4>
                </Col>
            </Row>
        );
    }
}

export default MenuBar;