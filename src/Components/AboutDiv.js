import React from 'react'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Container } from 'react-bootstrap'

function AboutDiv() {
    return (
        <Container className='my-5' id='about'>
            <Row>
                <Col className='text-center'>
                    <h2 className='mt-5 display-4'>Welcome to -Restaurant Name-!</h2>
                    <h4 class>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </h4>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutDiv;