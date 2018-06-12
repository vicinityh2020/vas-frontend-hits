import React from 'react';
import { Row, Col, Glyphicon, Button } from 'react-bootstrap';
import '../stylesheets/Menu.css';
import PropTypes from 'prop-types';

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
                    <h4 className="menu-title">{this.props.title}</h4>
                </Col>
            </Row>
        );
    }
}

MenuBar.propTypes = {
    title: PropTypes.string.isRequired
};

export default MenuBar;