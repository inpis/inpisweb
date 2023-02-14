import React, { Component } from 'react';
import Datas from '../data/about-us/about-us.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ModalVideo from 'react-modal-video';
import CountUp from 'react-countup';
import { Styles } from "./styles/aboutUs.js";

class AboutUs extends Component {



    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }

    openModal() {
        this.setState({ isOpen: true })
    }

    render() {
        return (
            <Styles>
                {/* About Us */}
                <section className="about-us">
                    <Container>
                        <Row>
                            <Col md="6">
                                <div className="about-image" data-aos="fade-down">
                                    <img src={process.env.PUBLIC_URL + `/assets/images/${Datas.mainImage}`} className="main-img" alt="" />
                                    <img src={process.env.PUBLIC_URL + "/assets/images/pattern.png"} className="pattern-img" alt="" />
                                  
                                </div>
                            </Col>
                            <Col md="6">
                                <div className="about-content" data-aos="fade-down">
                                    <h4 className="about-title">{Datas.title}</h4>
                                    <p className="about-para">{Datas.desc1}<span>{Datas.desc2}</span></p>
                              
                                    <Link className="readmore-btn" to={process.env.PUBLIC_URL + "/about"}>Read More</Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Styles>
        )
    }
}

export default AboutUs
