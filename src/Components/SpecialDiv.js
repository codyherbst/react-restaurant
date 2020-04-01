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
            <Container fluid bg='warning'>
                <Container>

                </Container>
            </Container>
        )
    }
}

export default SpecialDiv