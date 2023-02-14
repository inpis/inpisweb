import React, { Component, useEffect } from 'react';
import Datas from '../../../../../data/service/application/application.json'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Tab, Nav, Table, Breadcrumb } from 'react-bootstrap';
import HeaderTwo from '../../../../../components/HeaderTwo';
import { BreadcrumbBox } from '../../../../../components/common/Breadcrumb';
import Footer from '../../../../../components/Footer';
import { Styles } from '../css/custom.js';
import NumberCounter from '../../../../../components/NumberCounter';
import TeamSlider from '../../../../../components/TeamSlider';
import Appservices from './app-service';
import NewsletterForm from '../../../../../components/NewsletterForm';
import Aos from 'aos'
import 'aos/dist/aos.css'


    const Application = () => {


        
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
   
        return (
            <Styles>
                {/* Main Wrapper */}
                <div className="main-wrapper product-details-page">

                    {/* Header 2 */}
                    <HeaderTwo />

                    {/* Breadcroumb */}
               
                    <section className="breadcrumb-area" style={{ background :url("/assets/images/r-shape.png") }}>
                    <Container>
                        <Row>
                            <Col md="12" className="text-center">
                                <div className="breadcrumb-box">
                                    <h2 className="breadcrumb-title">application-development</h2>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                  
                </section>

                    <div className="bredcrumbinline"> 
                    <Breadcrumb>
                                     
                                        <Breadcrumb.Item>Home</Breadcrumb.Item>   
                                        <li className="breadcrumb-item"> <Link to="/services"> Services </Link></li>
                                        <Breadcrumb.Item active>application-development</Breadcrumb.Item>  
                                    </Breadcrumb>
                    </div>

                    {/* Product Details */}
                    <section className="product-details-area">
                        <Container>
                            <Row>
                                <Col md="5" data-aos="fade-right">
                                    <div className="product-slider">
                                    <div className="slider-item" >
                                                        <img src="assets/images/application.webp"  alt="" className="img-fluid" />
                                                    </div>
                                    </div>
                                </Col>

                                <Col md="7">
                                    <div className="product-information" data-aos="fade-up">
                                        <div className="product-title">
                                            <h4>We apply Product-Centric Value Delivery Model Using Agile and DevOps to Strengthen Customer Centricity and Accelerate Business Outcomes</h4>
                                        </div>
                                       
                                        
                                        <div className="product-desc">
                                        
                                            <p> iNichepro leverages its technical prowess, deep domain knowledge, consulting capabilities, intellectual property assets, and methodologies to deliver next-generation, future-ready applications which help our clients in meeting their strategic priorities.
 </p>
                                        </div>
                                       
                                        {/* <div className="product-cart-wh-com-btn">
                                            <Link to={process.env.PUBLIC_URL + "/product-details"} className="cart-btn">Add To Cart</Link>
                                           
                                        </div> */}
                                    </div>
                                </Col>

                              
                            </Row>
                        </Container>

                        <Appservices />
                    </section>

                                        


                <NumberCounter />


                <TeamSlider />

                <NewsletterForm />

                    {/* Footer 2 */}
                    <Footer />

                </div>
            </Styles>
        )
}

export default Application