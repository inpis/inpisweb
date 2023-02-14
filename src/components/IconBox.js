import React, { Component, useEffect } from 'react';
import Datas from '../data/icon-box/icon-box.json';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from "./styles/iconBox.js";
import { BiBrightness } from "react-icons/bi";
import 'boxicons'



import Aos from 'aos'
import 'aos/dist/aos.css'


    const IconBox = () => {


        useEffect(() => {
            Aos.init({ duration: 2000 })
          }, [])
  
          
   
  return (
            <Styles>

                {/* Icon Box */}
                <section className="icon-box-area">
                    <Container>
                        <Row>
                            { 
                                Datas.map((data, i) => (
                                    <Col md="4" key={i}>
                                        <div className="full-icon-box"  data-aos="fade-up">
                                            <div className="icon-box d-flex">
                                                <div className={data.uniqClass}>
                                                    <i className={data.boxIcon}>  </i>
                                                   {/* <span className={da/ta.boxIcon}><BiBrightness />  </span> */}
                                                </div>
                                                <div className="box-title">
                                                    <h6>{data.title}</h6>
                                                    <p>{data.subTitle}</p>
                                                </div>
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

export default IconBox
