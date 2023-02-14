import React, { Component } from 'react';
import Datas from '../../../../../data/service/application/application.json';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from "../css/custom.js";

class Appservices extends Component {
    render() {
        return (
            <Styles>
                {/* Service Box */}
                <section className="service-area">
                    <Container>
                        <Row>
                         
                            {
                                Datas.dataList.map((data, i) => (
                                    <Col md="6" key={i}>
                                        <div className="service-box d-flex" data-aos="fade-down">
                                            {/* <div className="box-icon">
                                                <i className={data.boxIcon}></i>
                                            </div> */}
                                            <div className="box-title">
                                                <h6>{data.title}</h6>
                                                <p>{data.subTitle}</p>
                                                <a className=" d-block mt-3" href="/"> Talk to our Experts </a>
                                            </div>
                                        </div>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Container>
                </section>
            </Styles>
        )
    }
}

export default Appservices
