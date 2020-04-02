import React from 'react'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

class SpecialDiv extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container fluid className='bg-danger text-light py-5' id='special'>
                <Container>
                    <div className='text-center'><h1>Special</h1></div>
                    <Row className='py-5'>
                        <Col sm='12' lg='6'>
                            <img
                                src={process.env.PUBLIC_URL + '/Images/grill_image.jpg'}
                                className='mr-5 d-block w-100'
                            />
                        </Col>
                        <Col sm='12' lg='6' className='my-auto pl-5'>
                            <h2>The special</h2>
                            <h4>{this.props.specialItem.map(item => item.description)}</h4>
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}

export default SpecialDiv