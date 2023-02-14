import React, { Component } from 'react';
import Datas from '../data/testimonial/testimonial-slider.json';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from "./styles/testimonialSlider.js";
import Slider from "react-slick";


class TestimonialSlider extends Component {
    render() {


        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 1,
                  }
                },]

        };


        return (
            <Styles>
                {/* Testimonial Slider */}
                <section className="testimonial-area" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${Datas.backgroundImage})` }}>
                    <Container>
                        <Row>
                            <Col md="12">
                                <div className="sec-title text-center">
                                    <h4>{Datas.secTitle}</h4>
                                </div>
                            </Col>
                            <Col md="12" className="testimonial-slider">
                              
                                <Slider {...settings}>
                                   
                                    {
                                            Datas.dataList.map((data, i) => (

                                                <div className="slider-item col-12" key={i}>
                                                    <div className="desc">
                                                        <h5>{data.testimonialTitle}</h5>
                                                        <p>{data.testimonialDesc}</p>
                                                    </div>
                                                    <div className="writer">
                                                        <img src={process.env.PUBLIC_URL + `/assets/images/${data.authorImg}`} className="slider-image" alt={data.authorImg} />
                                                        <h6>{data.authorName}</h6>
                                                        <p>{data.authorTitle}</p>
                                                    </div>
                                                </div>

                                            ))
                                        }
                                    

                                

                                </Slider>


                            </Col>
                        </Row>
                    </Container>
                </section>
            </Styles>
        )
    }
}

export default TestimonialSlider
