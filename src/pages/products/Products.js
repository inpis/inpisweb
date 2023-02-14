import React, { Component, useEffect } from 'react';
import { Styles } from './css/product.js';
import HeaderTwo from '../../components/HeaderTwo';
import FooterTwo from '../../components/FooterTwo';
import { Container, Row, Col } from 'react-bootstrap';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import { Link } from 'react-router-dom';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Accordion, Card } from "react-bootstrap";
import Footer from '../../components/Footer.js';
import NewsletterForm from '../../components/NewsletterForm.js';
import TestimonialSlider from '../../components/TestimonialSlider.js';

const Products = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])


    return (
        <>

            <HeaderTwo />

            {/* Breadcroumb */}
            <BreadcrumbBox title="Products" />

            <Styles>
                <section className="about-us">
                    <Container>
                        <Row>
                            <Col md="6">
                                <div className="about-image" data-aos="fade-down">
                                    <img src="assets/images/screens.png" className="img-responsive w-100" />
                                </div>
                            </Col>
                            <Col md="6">
                                <div className="about-content" data-aos="fade-down">
                                    <h4 className="about-title">Oracle Site Hub  Mobile App Features</h4>

                                    <ul>
                                        <li> Various search options(Region, Purpose , Rented Sites, site code, location, coordinates etc.  </li>
                                        <li> Viewing Site Attributes and Details </li>
                                        <li> Get directions from your current location </li>
                                        <li> Get directions between sites </li>
                                        <li> Share the site information to any other site hub user using any other App</li>
                                        <li>   Share Site Location on Google Map to every one using any other App</li>
                                        <li> Search for Sites around the specific location</li>
                                        <li> Review the attachments for sites</li>
                                        <li> Review site hub statistics reports ( Land Value, Land Area and
                                            Number of sites)</li>

                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="faqSection mb-5">
                    <Container>
                        <Row>
                            <Col md="12">
                                <div>
                                    <div class="pagetitle text-center mb-4"><h2> Frequently Asked Questions </h2></div>
                                    <Accordion>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                            Is this app free ?
                                            </Accordion.Toggle>

                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body> Internal audit is an independent, objective assurance and consulting activity designed to add value and improve an organization. </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>

                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                               How can i download update.
                                            </Accordion.Toggle>

                                            <Accordion.Collapse eventKey="1">
                                                <Card.Body> Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi Aenean. </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

            </Styles>
            
            <TestimonialSlider />
            <NewsletterForm />
            <Footer />
        </>
    )
}

export default Products