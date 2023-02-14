import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import Search from './common/Search';
import Sidebar from './common/Sidebar';
import StickyMenu from './common/StickyMenu';
import MobileMenu from './common/MobileMenu';
import { Styles } from "./styles/headerTwo.js";

class HeaderTwo extends Component {
    render() {
        return (
            <Styles>
                {/* Topbar 2 */}
                <section className="top-bar2">
                    <Container>
                        <Row>
                            <Col lg="7" md="9">
                                <div className="bar-left">
                                    <ul className="list-unstyled list-inline">
                                        <li className="list-inline-item"><i className="las la-phone"></i>+91 (020) 4863 – 3175</li>
                                        <li className="list-inline-item"><i className="las la-envelope"></i>info@inichepro.com</li>

                                    </ul>
                                </div>
                            </Col>
                            <Col lg="5" md="3">
                                <div className="bar-right d-flex justify-content-end">

                                    <ul className="list-unstyled list-inline bar-social">
                                        <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-facebook-f"></i></a></li>
                                        <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-twitter"></i></a></li>
                                        <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-linkedin-in"></i></a></li>
                                        <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-instagram"></i></a></li>
                                    </ul>

                                   
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Logo Area 2 */}
                <section className="logo-area2">
                    <Container>
                        <Row>
                            <Col md="3">
                                <div className="logo">
                                    <Link to={process.env.PUBLIC_URL + "/"}><img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="" /></Link>
                                </div>
                            </Col>
                            <Col md="9">
                                <div className="menu-box d-flex justify-content-end">
                                    <ul className="nav menu-nav">
                                        <li className="nav-item dropdown active">
                                            <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown">Home </Link>

                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/about"} data-toggle="dropdown">About Us </Link>

                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/services"} data-toggle="dropdown">Services <i className="las la-angle-down"></i></Link>
                                            <ul className="dropdown list-unstyled">
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/application-development"}>Application Development{' &'} Maintenance</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>Business Process Management</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>Consulting Services</Link></li>

                                                <li className="nav-item dropdown navItem_unpos" >
                                                    <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to={process.env.PUBLIC_URL + "/"}>Experience</Link>

                                                    <ul className="dropdown_Last  list-unstyled">
                                                        <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>Digital Marketing</Link></li>
                                                        <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>Digital Commerce</Link></li>
                                                        <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>Digital Work Place</Link></li>
                                                    </ul>


                                                </li>

                                                <li className="nav-item dropdown navItem_unpos" >
                                                    <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to={process.env.PUBLIC_URL + "/"}>Insight</Link>

                                                    <ul className="dropdown_Last  list-unstyled">
                                                        <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>Applied AI</Link></li>
                                                        <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>Data Analytics</Link></li>
                                                      
                                                    </ul>


                                                </li>

                                                <li className="nav-item dropdown navItem_unpos" >
                                                    <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to={process.env.PUBLIC_URL + "/"}>Innovate</Link>

                                                    <ul className="dropdown_Last  list-unstyled">
                                                        <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>Blockchain</Link></li>
                                                        <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>Engineering Services</Link></li>
                                                        <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>IoT</Link></li>
                                                    </ul>


                                                </li>


                                                <li className="nav-item dropdown navItem_unpos" >
                                                    <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to={process.env.PUBLIC_URL + "/"}>Accelerate</Link>

                                                    <ul className="dropdown_Last  list-unstyled">
                                                        <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>Enterprise Agile DevOps</Link></li>
                                                        <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>API {'&'} Micro Services</Link></li>
                                                        <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>Digital Process Automation </Link></li>
                                                    </ul>


                                                </li>
                                                <li className="nav-item dropdown navItem_unpos" >
                                                    <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to={process.env.PUBLIC_URL + "/"}>Automation</Link>

                                                    <ul className="dropdown_Last  list-unstyled">
                                                        <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>Cyber Security</Link></li>
                                                        <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>API {'&'} Testing</Link></li>
                                                      
                                                    </ul>


                                                </li>


                                            </ul>
                                        </li>
                                     
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/projects"} data-toggle="dropdown">Projects </Link>

                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/products"} data-toggle="dropdown">Products </Link>

                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/career"} data-toggle="dropdown">Careers </Link>

                                        </li>
                                     

                                    </ul>

                                    <div className="apply-btn">
                                        <Link to={process.env.PUBLIC_URL + "/contact"}>Contact Us</Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Sticky Menu */}
                <StickyMenu />

                {/* Mobile Menu */}
                <MobileMenu />
            </Styles>
        )
    }
}

export default HeaderTwo
