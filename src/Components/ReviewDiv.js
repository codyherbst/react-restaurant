import React from 'react'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

function ReviewDiv() {
    return (
        <React.Fragment>
            <Container fluid className='text-center' id='reviews'>
                <div className='text-center pt-5'>
                        <h1>Testimonials</h1>
                    <Row>
                        <Col sm-12 lg-14>
                            <h3>John Doe</h3>
                            <p>
                            Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, 
                            retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit 
                            butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex 
                            squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate 
                            nisi qui.
                            </p>
                        </Col>
                        <Col sm-12 lg-4>
                            <h3> Eileen Dover</h3>
                            <p>
                            Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore 
                            velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui 
                            photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo 
                            nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna 
                            velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard 
                            ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui 
                            sapiente accusamus tattooed echo park.
                            </p>
                        </Col>
                        <Col sm-12 lg-4>
                            <h3>Joe Shmoe</h3>
                            <p>
                            Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny 
                            pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard 
                            locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 
                            8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro 
                            mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork 
                            sustainable tofu synth chambray yr.
                            </p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </React.Fragment>
    )
}

export default ReviewDiv;