import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ModalImage from "react-modal-image";
import { Styles } from "./styles/campusTour.js";
import { Link } from 'react-router-dom';
import Aos from 'aos'
import 'aos/dist/aos.css'

class CampusTour extends Component {
    

    render() {
        return (
            <Styles>
                {/* Campus Tour */}
                <section className="campus-tour bg-light">
                    <Container>
                       
                    <div className="row g-5 mt--25">
                    <Col md="12" data-aos="fade-down">
                                <div className="sec-title text-center">
                                    <h4>What Service We Offer</h4>
                                </div>
                            </Col>

<div className="col-lg-3 col-md-6 col-sm-6 col-12 sal-animate">
    <div className="service-card service-card-4" data-aos="fade-down">
        <div className="inner">
            <div className="icon">
                <i className="icon-student-read"></i>
            </div>
            <div className="content">
                <h6 className="title"><Link to="/services/application-development">IT Management</Link></h6>
                <p className="description">Lore Ipsum a simply dummy text of the printing</p>
            </div>
        </div>
    </div>
</div>

<div className="col-lg-3 col-md-6 col-sm-6 col-12 sal-animate" >
    <div className="service-card service-card-4" data-aos="fade-up">
        <div className="inner">
            <div className="icon">
                <i className="icon-lab"></i>
            </div>
            <div className="content">
                <h6 className="title"><Link to="/application-development">Web Marketing</Link></h6>
                <p className="description">Lore Ipsum a simply dummy text of the printing</p>
            </div>
        </div>
    </div>
</div>

<div className="col-lg-3 col-md-6 col-sm-6 col-12 sal-animate">
    <div className="service-card service-card-4" data-aos="fade-up">
        <div className="inner">
            <div className="icon">
                <i className="icon-compass"></i>
            </div>
            <div className="content">
                <h6 className="title"><Link to="/application-development">Software Developee</Link></h6>
                <p className="description">Lore Ipsum a simply dummy text of the printing</p>
            </div>
        </div>
    </div>
</div>

<div className="col-lg-3 col-md-6 col-sm-6 col-12 sal-animate">
    <div className="service-card service-card-4" data-aos="fade-up">
        <div className="inner">
            <div className="icon">
                <i className="icon-calculator"></i>
            </div>
            <div className="content">
                <h6 className="title"><Link to="/application-development">SEO Booster</Link></h6>
                <p className="description">Lore Ipsum a simply dummy text of the printing</p>
            </div>
        </div>
    </div>
</div>

<div className="col-lg-3 col-md-6 col-sm-6 col-12 sal-animate">
    <div className="service-card service-card-4" data-aos="fade-up">
        <div className="inner">
            <div className="icon">
                <i className="icon-microscopes"></i>
            </div>
            <div className="content">
                <h6 className="title"><Link to="/application-development">Data Security</Link></h6>
                <p className="description">Lore Ipsum a simply dummy text of the printing</p>
            </div>
        </div>
    </div>
</div>

<div className="col-lg-3 col-md-6 col-sm-6 col-12 sal-animate">
    <div className="service-card service-card-4" data-aos="fade-up">
        <div className="inner">
            <div className="icon">
                <i className="icon-calculator"></i>
               
            </div>
            <div className="content">
                <h6 className="title"><Link to="/application-development">Cloud Computing</Link></h6>
                <p className="description">Lore Ipsum a simply dummy text of the printing</p>
            </div>
        </div>
    </div>
</div>

<div className="col-lg-3 col-md-6 col-sm-6 col-12 sal-animate">
    <div className="service-card service-card-4" data-aos="fade-up">
        <div className="inner">
            <div className="icon">
                <i className="icon-pen-tool"></i>
              
            </div>
            <div className="content">
                <h6 className="title"><Link to="/application-development">Art &amp; Design</Link></h6>
                <p className="description">Lore Ipsum a simply dummy text of the printing</p>
            </div>
        </div>
    </div>
</div>

<div className="col-lg-3 col-md-6 col-sm-6 col-12 sal-animate">
    <div className="service-card service-card-4" data-aos="fade-up">
        <div className="inner">
            <div className="icon">
                <i className="icon-science"></i>
                <span className="subtitle">18 Courses</span>
            </div>
            <div className="content">
                <h6 className="title"><Link to="/application-development">Nuclear Power</Link></h6>
                <p className="description">Lore Ipsum a simply dummy text of the printing</p>
            </div>
        </div>
    </div>
</div>

</div>


                    </Container>
                </section>
            </Styles>
        )
    }
}

export default CampusTour
