import React, { Component } from 'react';
import Datas from '../../data/gallery/gallery-page.json';
import { Container, Row, Col } from 'react-bootstrap';
import ModalImage from "react-modal-image";
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import Pagination from '../../components/Pagination';
import Footer from '../../components/Footer.js';
import { Styles } from './styles/projects.js';
import NewsletterForm from '../../components/NewsletterForm';




class Projects extends Component {
    render() {

        return (
            <Styles>
                {/* Main Wrapper */}
                <div className="main-wrapper gallery-page">

                    {/* Header 2 */}
                    <HeaderTwo />

                    {/* Breadcroumb */}
                    <BreadcrumbBox title="Projects" />

                    {/* Gallery Area */}
                    <section className="gallery-page-area">
                        <Container>
                       
                            <Row>
                                {
                                    Datas.map((data, i) => (
                                        <Col className="mb-4" lg="4" sm="6" key={i}>
                                            <div className="gallery-box">
                                                <ModalImage small={process.env.PUBLIC_URL + `/assets/images/${data.galleryImage}`} large={process.env.PUBLIC_URL + `/assets/images/${data.galleryImage}`} alt="" />
                                               <h4> {data.tittle} </h4>
                                               <p className="p-3"> Track and record all your fitness activities• This app integrates with the Health app. Connect your phone with any Fit Show
Bluetooth treadmill </p>
                                            </div>
                                        </Col>
                                    ))
                                }

                                <Col md="12" className="text-center">
                                    <Pagination />
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
}

export default Projects