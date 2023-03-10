import React, { Component } from 'react';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import { Styles } from "./styles/breadcrumb.js";

export class BreadcrumbBox extends Component {
    state = {
        backgroundImage: 'bnr5.jpg',
    }

    render() {
        return (
            <Styles>
                <section className="breadcrumb-area" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${this.state.backgroundImage})` }}>
                    <Container>
                        <Row>
                            <Col md="12" className="text-center">
                                <div className="breadcrumb-box">
                                    <h2 className="breadcrumb-title">{this.props.title}</h2>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                  
                </section>
                <div className="bredcrumbinline"> 
                    <Breadcrumb>
                                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                              
                                      
                                        <Breadcrumb.Item active>{this.props.title}</Breadcrumb.Item>  
                                    </Breadcrumb>
                    </div>

            </Styles>
        )
    }
}