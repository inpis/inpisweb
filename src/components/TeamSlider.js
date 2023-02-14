import React, { Component } from 'react';
import Datas from '../data/team/team-slider.json';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from "react-slick";
import { Styles } from "./styles/teamSlider.js";

class TeamSlider extends Component {
    
    render() {
        const settings = {
            dots: false,
            infinite: true,
            arrows: true,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 1000,
            slidesToShow:5,
            slidesToScroll: 1,
            breakpoints: {
                0: {
                    slidesPerView: 1
                },
                576: {
                    slidesPerView: 2
                },
                768: {
                    slidesPerView: 3
                },
                992: {
                    slidesPerView: 4
                } 
            }
        };

        return (
            <Styles>
                {/* Team Slider */}
                <section className="team-member-area">
                    <Container>
                        <Row>
                            <Col md="12">
                                <div className="sec-title text-center" data-aos="fade-up">
                                    <h4>{Datas.secTitle}</h4>
                                </div>
                            </Col>
                            <Col md="12" className="team-slider">
                                <Slider {...settings}>
                                    {
                                        Datas.dataList.map((data, i) => (
                                            <div className="team-item" data-aos="fade-down" key={i}>
                                                <img src={process.env.PUBLIC_URL + `assets/images/${data.personImage}`} alt="" className="img-fluid" />
                                                <div className="img-content text-center">
                                                    <h5>{data.personName}</h5>
                                                    <p>{data.personTitle}</p>
                                                    {/* <ul className="list-unstyled list-inline">
                                                        <li className="list-inline-item"><a href={process.env.PUBLIC_URL + data.socialLinks.facebook}><i className="fab fa-facebook-f"></i></a></li>
                                                        <li className="list-inline-item"><a href={process.env.PUBLIC_URL + data.socialLinks.twitter}><i className="fab fa-twitter"></i></a></li>
                                                        <li className="list-inline-item"><a href={process.env.PUBLIC_URL + data.socialLinks.youtube}><i className="fab fa-youtube"></i></a></li>
                                                    </ul> */}
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

export default TeamSlider
