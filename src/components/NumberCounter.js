import React, { Component } from 'react';
import Datas from '../data/counter/number-counter.json';
import { Container, Row, Col } from 'react-bootstrap';
import CountUp from 'react-countup';
import { Styles } from "./styles/numberCounter.js";

class NumberCounter extends Component {
    render() {
        return (
            <Styles>
                {/* Counter Area */}
                <section className="counter-area" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${Datas.backgroundImage})` }}>
                    <Container>
                        <Row>
                            <Col md="12">
                                <div className="sec-title text-center">
                                    <h4>{Datas.secTitle}</h4>
                                </div>
                            </Col>
                            <Col md="3" xs="6">
                                <div className="counter-box">
                                    <div className="counter-icon">
                                        <i className="las la-university"></i>
                                    </div>
                                    <div className="counter-number">
                                        <h4><CountUp end={100} duration={5} delay={1.5} />%</h4>
                                        <p>Happy Client</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md="3" xs="6">
                                <div className="counter-box">
                                    <div className="counter-icon">
                                        <i className="las la-graduation-cap"></i>
                                    </div>
                                    <div className="counter-number">
                                        <h4><CountUp end={2309} duration={5} delay={1.5} />+</h4>
                                        <p>Total Projects</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md="3" xs="6">
                                <div className="counter-box">
                                    <div className="counter-icon">
                                        <i className="las la-award"></i>
                                    </div>
                                    <div className="counter-number">
                                        <h4><CountUp end={590} duration={5} delay={1.5} />+</h4>
                                        <p>Awards Wins</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md="3" xs="6">
                                <div className="counter-box">
                                    <div className="counter-icon">
                                        <i className="las la-book-reader"></i>
                                    </div>
                                    <div className="counter-number">
                                        <h4><CountUp end={60} duration={5} delay={1.5} />+</h4>
                                        <p>Reviews and Rating</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Styles>
        )
    }
}

export default NumberCounter
