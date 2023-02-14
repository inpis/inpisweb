import React, { Component, useEffect, useState } from 'react';
import Datas from '../../data/gallery/gallery-page.json';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import ModalImage from "react-modal-image";
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import Pagination from '../../components/Pagination';
import Footer from '../../components/Footer';
import NewsletterForm from '../../components/NewsletterForm';
import { Styles } from './styles/career.js';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Aos from 'aos'
import 'aos/dist/aos.css'

function Career() {

    useEffect(() => {
        Aos.init({ duration: 2000 })
      }, [])
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const courseButton = document.querySelectorAll(".course-button");
        courseButton.forEach(button => {
            button.addEventListener("click", () => {
                button.classList.toggle("active");
                const content = button.nextElementSibling;

                if (button.classList.contains("active")) {
                    content.className = "course-content show";
                    content.style.maxHeight = content.scrollHeight + "px";
                } else {
                    content.className = "course-content";
                    content.style.maxHeight = "0";
                }
            });
        });
    });

    return (
        <Styles>
            {/* Main Wrapper */}
            <div className="main-wrapper ">

                {/* Header 2 */}
                <HeaderTwo />

                {/* Breadcroumb */}
                <BreadcrumbBox title="Career" />

                {/* Gallery Area */}
                {/* <section className="gallery-page-area">
                        <Container>
                       
                            <Row>
                                {
                                    Datas.map((data, i) => (
                                        <Col className="mb-4" lg="4" sm="6" key={i}>
                                            <div className="gallery-box">
                                                <ModalImage small={process.env.PUBLIC_URL + `/assets/images/${data.galleryImage}`} large={process.env.PUBLIC_URL + `/assets/images/${data.galleryImage}`} alt="" />
                                               <h4> {data.tittle} </h4>
                                            </div>
                                        </Col>
                                    ))
                                }

                                <Col md="12" className="text-center">
                                    <Pagination />
                                </Col>
                            </Row>
                        </Container>
                    </section> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Aplly Now</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="card-body py-md-4" >
       <form _lpchecked="1">
          <div className="form-group">
             <input type="text" className="form-control" id="name" placeholder="Name" required />
        </div>
        <div className="form-group">
             <input type="email" className="form-control" id="email" placeholder="Email" required />
                            </div>
                            <div className="form-group">
             <input type="text" className="form-control" id="aplied" placeholder="Position Apllied For " required />
        </div>

        <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
       
          <button className="ml-3 btn btn-primary">Apply</button>

  
       </form>
     </div>


        </Modal.Body>
      
      </Modal>

                <section className="career-page">
                    <Container>
                        <Row>
                            <Col md="12">
                                <div className="course-tab-list">
                                    <div className="text-center my-4" data-aos="fade-down">   <h2 class="section-title">Jobs of the day</h2>
                                        <p>  Search and connect with the right candidates faster. </p>
                                    </div>
                                    <Tab.Container defaultActiveKey="overview">
                                        <Nav className="flex-column">
                                            <Nav.Item>
                                                <Nav.Link eventKey="overview"> <img style={{ width: '15px' }} src="assets/images/icon1.png" /> Management</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="curriculum"> <img style={{ width: '15px' }} src="assets/images/icon2.png" /> Marketing & Sales</Nav.Link>
                                            </Nav.Item>

                                            <Nav.Item>
                                                <Nav.Link eventKey="review"><img style={{ width: '15px' }} src="assets/images/icon4.png" /> Human Resources</Nav.Link>
                                            </Nav.Item>

                                            <Nav.Item>
                                                <Nav.Link eventKey="writer"><img style={{ width: '15px' }} src="assets/images/icon4.png" /> Content Writer</Nav.Link>
                                            </Nav.Item>


                                            <Nav.Item>
                                                <Nav.Link eventKey="ui"><img style={{ width: '15px' }} src="assets/images/icon4.png" /> UI/UX Development </Nav.Link>
                                            </Nav.Item>

                                            <Nav.Item>
                                                <Nav.Link eventKey="hr"><img style={{ width: '15px' }} src="assets/images/icon4.png" /> Human Resources</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="overview" className="overview-tab">
                                                <div className="course-desc">

                                                    <div className="row">
                                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                                            <div className="card-grid-2 grid-bd-16 hover-up" data-aos="fade-down">
                                                                <div className="card-block-info pt-25">
                                                                    <h6><a href="job-details.html">UX Designer &amp; Researcher remote</a></h6>
                                                                    <div className="mt-2 dplx"><span className="card-briefcase mr-15">Remote</span><span className="card-time">3 mins ago</span></div>
                                                                    <div className="dd"><a className="btn btn-grey-small bg-14  mr-2" href="">Illustrator</a><a className="btn btn-grey-small bg-14  mr-2" href="#">Adobe XD</a><a className="btn btn-grey-small bg-14 mr-2" href="#">Figma</a><a className="btn btn-grey-small bg-14  mr-2" href="#">Sketch</a><a className="btn btn-grey-small bg-14  mr-2" href="#">Lunacy                        </a>
                                                                    </div>

                                                                </div>
                                                                <div className="applyForm">
                                                                    
                                                                    <Button onClick={handleShow} variant="primary" >  Apply Now  </Button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                                            <div className="card-grid-2 grid-bd-16 hover-up" data-aos="fade-down">
                                                                <div className="card-block-info pt-25">
                                                                    <h6><a href="job-details.html">UX Designer &amp; Researcher remote</a></h6>
                                                                    <div className="mt-2 dplx"><span className="card-briefcase mr-15">Remote</span><span className="card-time">3 mins ago</span></div>
                                                                    <div className="dd"><a className="btn btn-grey-small bg-14  mr-2" href="">Illustrator</a><a className="btn btn-grey-small bg-14  mr-2" href="#">Adobe XD</a><a className="btn btn-grey-small bg-14 mr-2" href="#">Figma</a><a className="btn btn-grey-small bg-14  mr-2" href="#">Sketch</a><a className="btn btn-grey-small bg-14  mr-2" href="#">Lunacy                        </a>
                                                                    </div>

                                                                </div>
                                                                <div className="applyForm">
                                                                    
                                                                    <Button onClick={handleShow} variant="primary" >  Apply Now  </Button>
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                                            <div className="card-grid-2 grid-bd-16 hover-up" data-aos="fade-down">
                                                                <div className="card-block-info pt-25">
                                                                    <h6><a href="job-details.html">UX Designer &amp; Researcher remote</a></h6>
                                                                    <div className="mt-2 dplx"><span className="card-briefcase mr-15">Remote</span><span className="card-time">3 mins ago</span></div>
                                                                    <div className="dd"><a className="btn btn-grey-small bg-14  mr-2" href="">Illustrator</a><a className="btn btn-grey-small bg-14  mr-2" href="#">Adobe XD</a><a className="btn btn-grey-small bg-14 mr-2" href="#">Figma</a><a className="btn btn-grey-small bg-14  mr-2" href="#">Sketch</a><a className="btn btn-grey-small bg-14  mr-2" href="#">Lunacy                        </a>
                                                                    </div>

                                                                </div>
                                                                <div className="applyForm">
                                                                    
                                                                    <Button onClick={handleShow} variant="primary" >  Apply Now  </Button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>

                                            </Tab.Pane>
                                            <Tab.Pane eventKey="curriculum" className="curriculum-tab">
                                                <div className="course-curriculum">
                                                    <h5>Marketing</h5>
                                                </div>

                                            </Tab.Pane>
                                            <Tab.Pane eventKey="instructor" className="instructor-tab">
                                                <h5>HR </h5>



                                            </Tab.Pane>
                                            <Tab.Pane eventKey="review" className="review-tab">
                                                <Row>
                                                    <Col md="12">
                                                        <div className="review-comments">
                                                            <h5>More</h5>

                                                        </div>

                                                    </Col>
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

<NewsletterForm />
                {/* Footer 2 */}
                <Footer />

            </div>
        </Styles>
    )

}

export default Career