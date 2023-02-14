import React, { Component } from 'react';
import Datas from '../data/footer/footer.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import BackToTop from './common/BackToTop';
import { Styles } from "./styles/footerOne.js";
import Twitterfeed from './common/Twitterfeed';


class Footer extends Component {
    render() {
        return (
            <Styles>
                {/* Footer Area */}
                <footer className="footer1" style={{ backgroundImage: `url(assets/images/${process.env.PUBLIC_URL + Datas.backgroundImage})` }}>
                    <Container>
                        <Row>
                            <Col md="3">
                                <div className="footer-logo-info">
                                    <img src={process.env.PUBLIC_URL + "assets/images/logo.png"} alt="" className="img-fluid" />
                                    <p>Lorem ipsum dolor sit amet, consectet adipisicing elit. Saepe porro neque a nam null quos.  Adipisci eius unde magnam ad, nisi voluptates.</p>
                                    <ul className="list-unstyled">
                                        <li><i className="las la-map-marker"></i>City Vista, Kolte-Patil Downtown, Kharadi, Pune, Maharashtra 411014</li>
                                        <li><i className="las la-envelope"></i>info@inichepro.com</li>
                                        <li><i className="las la-phone"></i>+91 (020) 4863 – 3175</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md="3">
                                <div className="f-links">
                                    <h5>Services</h5>
                                    <ul className="list-unstyled">
                                        <li><Link to={process.env.PUBLIC_URL + "/"}><i className="las la-angle-right"></i>IT Management</Link></li>
                                        <li><Link to={process.env.PUBLIC_URL + "/"}><i className="las la-angle-right"></i>Web Marketing</Link></li>
                                        <li><Link to={process.env.PUBLIC_URL + "/"}><i className="las la-angle-right"></i>SEO Booster</Link></li>
                                        <li><Link to={process.env.PUBLIC_URL + "/"}><i className="las la-angle-right"></i>Privacy Policy</Link></li>
                                        <li><Link to={process.env.PUBLIC_URL + "/"}><i className="las la-angle-right"></i>Cloud Computing</Link></li>
                                    </ul>
                                    </div>
                                    </Col>
                                    <Col md="2">
                                    <div className="f-links">
                                    <h5>Quick Links</h5>
                                    <ul className="list-unstyled">
                                        <li><Link to={process.env.PUBLIC_URL + "/about"}><i className="las la-angle-right"></i>About Us</Link></li>
                                    
                                        <li><Link to={process.env.PUBLIC_URL + "/services"}><i className="las la-angle-right"></i>Our Services</Link></li>
                                        <li><Link to={process.env.PUBLIC_URL + "/"}><i className="las la-angle-right"></i>Privacy Policy</Link></li>
                                        <li><Link to={process.env.PUBLIC_URL + "/"}><i className="las la-angle-right"></i>Case Studies</Link></li>
                                    </ul>
                                    </div>
                                    </Col>
                               
                          
                            <Col md="4">
                                <div className="f-post">
                                  
                                    <Twitterfeed />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </footer>

                {/* Copyright Area */}
                <section className="copyright-area">
                    <Container>
                        <Row>
                            <Col md="6">
                                <div className="copy-text">
                                    <p>Copyright &copy; 2023 | Designed With <i className="las la-heart"></i> by <a href={process.env.PUBLIC_URL + "/"} target="_blank" rel="noopener noreferrer">iNichepro IT Solutions PVT. LTD</a></p>
                                </div>
                            </Col>
                            <Col md="6" className="text-right">
                                <ul className="social list-unstyled list-inline">
                                    <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-facebook-f"></i></a></li>
                                    <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-twitter"></i></a></li>
                                    <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-linkedin-in"></i></a></li>
                                    <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-youtube"></i></a></li>
                                    <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-dribbble"></i></a></li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>

                    {/* Back To Top */}
                    <BackToTop/>
                </section>
            </Styles>
        )
    }
}

export default Footer
