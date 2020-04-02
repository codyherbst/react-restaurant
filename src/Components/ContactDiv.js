import React, { Component } from 'react'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

class ContactDiv extends Component {
    render() {
        return (
            <Container fluid className='bg-dark mt-5 py-5 pl-5' id='contact'>
                <Row className='text-light'>
                    <Col sm='12' md='4'>
                        <h2>Sign up for our Newsletter!</h2>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="name" placeholder="Name" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col sm='12' md='4' className='text-center my-auto'>
                        <h2>Hours</h2>
                            <p>Monday - Thursday:   11:00AM - 10:00PM</p>
                            <p>Friday and Saturday: 11:00AM - 12:00AM</p>
                            <p>Close on Sunday</p>
                    </Col>
                    <Col sm='12' md='4' className='text-center my-auto'>
                        <h2>Contact Us!</h2>
                        <p>Location:      348 E Main St, Lexington</p>
                        <p>Phone Number:  (859) 867 - 5309</p>
                        <p>Email:         owner@restaurantname.com</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ContactDiv