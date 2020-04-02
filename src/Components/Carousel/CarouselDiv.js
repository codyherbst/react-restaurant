import React from 'react'
import { Carousel } from 'react-bootstrap'

class CarouselDiv extends React.Component {

    render() {
        return (
            <Carousel id='home'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + '/Images/food_image1.jpg'}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + '/Images/food_image2.jpg'}
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + '/Images/food_image3.jpg'}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default CarouselDiv