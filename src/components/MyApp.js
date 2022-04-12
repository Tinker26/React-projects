import React from 'react';
import { Container, Row, Col, Alert } from 'reactstrap';

class MyApp extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1 className='firstText'>Hello React</h1>
                <p>Lorem ipsum</p>
                <Container>
                    <Row>
                        <Col sm="4">
                            <Alert color="primary">
                                This is a primary alert — check it out!
                            </Alert>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default MyApp;