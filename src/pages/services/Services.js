import React, { Component, useEffect } from 'react';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import TestimonialSlider from '../../components/TestimonialSlider';
import Footer from '../../components/Footer';
import { Styles } from "./styles/services.js";
import CampusTour from '../../components/CampusTour'; 
import NewsletterForm from '../../components/NewsletterForm';
import Aos from 'aos'
import 'aos/dist/aos.css'


const Services = () => {

  useEffect(() => {
      Aos.init({ duration: 2000 })
    }, [])

        return (
            <Styles>
                {/* Main Wrapper */}
                <div className="main-wrapper about-page">

                    {/* Header 2 */}
                    <HeaderTwo />

                    {/* Breadcroumb */}
                    <BreadcrumbBox title="Services" />

                    {/* About Area */}
                    <CampusTour />


                    <div className="gradation-process-area section-space--ptb_100">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-12" data-aos="fade-down">
                            <div className="gradation-title-wrapper section-space--mb_60">
                                <div className="gradation-title-wrap ">
                                    <h6 className="section-sub-title text-black mb-20">How we works</h6>
                                    <h4 className="heading">How it helps <span className="text-color-primary">your <br /> business succeed</span></h4>
                                </div>


                                <div className="gradation-sub-heading">
                                    <h3 className="heading"><mark>04</mark> Steps</h3>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ht-gradation style-01">
                             
                                <div className="item item-1 animate  wow fadeInRight" data-wow-delay="0.1s" >
                                    <div className="line"></div>
                                    <div className="circle-wrap">
                                        <div className="mask">
                                            <div className="wave-pulse wave-pulse-1"></div>
                                            <div className="wave-pulse wave-pulse-2"></div>
                                            <div className="wave-pulse wave-pulse-3"></div>
                                        </div>

                                        <h6 className="circle">1</h6>
                                    </div>

                                    <div className="content-wrap"  data-aos="zoom-out-down">

                                        <h6 className="heading">01. Discussion</h6>

                                        <div className="text">We meet customers in set place to discuss the details about needs and demands before proposing a plan.</div>

                                      
                                    </div>
                                </div>
                         
                                <div className="item item-1 animate  wow fadeInRight" data-wow-delay="0.15s" >
                                    <div className="line"></div>
                                    <div className="circle-wrap">
                                        <div className="mask">
                                            <div className="wave-pulse wave-pulse-1"></div>
                                            <div className="wave-pulse wave-pulse-2"></div>
                                            <div className="wave-pulse wave-pulse-3"></div>
                                        </div>

                                        <h6 className="circle">2</h6>
                                    </div>

                                    <div className="content-wrap"  data-aos="zoom-out-down">

                                        <h6 className="heading">02. Concepts &amp; Initatives</h6>

                                        <div className="text">Our experts come up with all kinds of ideas and initiatives for delivering the best solutions for IT services chosen.</div>

                                        
                                    </div>
                                </div>
                         
                                <div className="item item-1 animate  wow fadeInRight" data-wow-delay="0.20s" >
                                    <div className="line"></div>
                                    <div className="circle-wrap">
                                        <div className="mask">
                                            <div className="wave-pulse wave-pulse-1"></div>
                                            <div className="wave-pulse wave-pulse-2"></div>
                                            <div className="wave-pulse wave-pulse-3"></div>
                                        </div>

                                        <h6 className="circle">3</h6>
                                    </div>

                                    <div className="content-wrap"  data-aos="zoom-out-down">

                                        <h6 className="heading">03. Testing &amp; Trying</h6>

                                        <div className="text">After agreeing on the ideas and plans, we will conduct as scheduled and give comments on the results &amp; adaptations.</div>

                                      
                                    </div>
                                </div>
                         
                                <div className="item item-1 animate wow fadeInRight" data-wow-delay="0.25s">
                                    <div className="line"></div>
                                    <div className="circle-wrap">
                                        <div className="mask">
                                            <div className="wave-pulse wave-pulse-1"></div>
                                            <div className="wave-pulse wave-pulse-2"></div>
                                            <div className="wave-pulse wave-pulse-3"></div>
                                        </div>

                                        <h6 className="circle">4</h6>
                                    </div>

                                    <div className="content-wrap"  data-aos="zoom-out-down">

                                        <h6 className="heading">04. Execute &amp; install</h6>

                                        <div className="text">Once the final plan is approved, everything will be conducted according to the agreed contract.</div>

                                       
                                    </div>
                                </div>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section className="wrapper bg-light angled py-5 upper-end">
      <div className="container py-14 py-md-16">
        <div className="row gx-lg-8 gx-xl-12 gy-6 mb-10 mb-md-18 align-items-center" >
          <div className="col-lg-4" data-aos="fade-right">
            <h2 className="display-4 mt-lg-18 mb-3 pagetitle">Our Pricing</h2>
            <p className="lead fs-lg">We offer <span className="underline">great prices</span>, premium and quality products for your business.</p>
            <p className="lead fs-lg">Enjoy a <a href="#" className="hover">free 30-day trial</a> and experience the full service. No credit card required!</p>
            <a href="#" className="btn-larges mt-2">See All Prices</a>
          </div>
         
          <div className="col-lg-7 offset-lg-1 pricing-wrapper">
          
            <div className="row gy-6 position-relative mt-5">
              <div className="shape bg-dot primary rellax w-16 h-18"></div>
              <div className="shape rounded-circle bg-line red rellax w-18 h-18"></div>
              <div className="col-md-6">
                <div className="pricing card" data-aos="fade-up">
                  <div className="card-body text-center  pb-12">
                    <div className="prices text-dark">
                      <div className="price price-show justify-content-start"><span className="price-currency">$</span><span className="price-value">19</span> <span className="price-duration">mo</span></div>
                   
                    </div>
                  
                    <h4 className="card-title">Premium Plan</h4>
                    <ul className="icon-list bullet-bg bullet-soft-primary mt-7 mb-8">
                      <li><i className="uil uil-check"></i><span><strong>5</strong> Projects </span></li>
                      <li><i className="uil uil-check"></i><span><strong>100K</strong> API Access </span></li>
                      <li><i className="uil uil-check"></i><span><strong>200MB</strong> Storage </span></li>
                      <li><i className="uil uil-check"></i><span> Weekly <strong>Reports</strong></span></li>
                      <li><i className="uil uil-times bullet-soft-red"></i><span> 7/24 <strong>Support</strong></span></li>
                    </ul>
                    {/* <a href="#" className="btn-larges">Choose Plan</a> */}
                  </div>
                
                </div>
              
              </div>
            
              <div className="col-md-6 popular">
                <div className="pricing card" data-aos="fade-up">
                  <div className="card-body text-center  pb-12">
                    <div className="prices text-dark">
                      <div className="price price-show justify-content-start"><span className="price-currency">$</span><span className="price-value">49</span> <span className="price-duration">mo</span></div>
                     
                    </div>
                  
                    <h4 className="card-title mt-2">Corporate Plan</h4>
                    <ul className="icon-list bullet-bg bullet-soft-primary mt-7 mb-8">
                      <li><i className="uil uil-check"></i><span><strong>20</strong> Projects </span></li>
                      <li><i className="uil uil-check"></i><span><strong>300K</strong> API Access </span></li>
                      <li><i className="uil uil-check"></i><span><strong>500MB</strong> Storage </span></li>
                      <li><i className="uil uil-check"></i><span> Weekly <strong>Reports</strong></span></li>
                      <li><i className="uil uil-check"></i><span> 7/24 <strong>Support</strong></span></li>
                    </ul>
                    {/* <a href="#" className="btn-larges">Choose Plan</a> */}
                  </div>
                  
                </div>
             
              </div>
           
            </div>
          
          </div>
         
        </div>
      
    
       
      </div>
     
    </section>


                    {/* Testimonial Slider */}
                    <TestimonialSlider />

          <NewsletterForm />

                    {/* Footer 2 */}
                    <Footer />

                </div>
            </Styles>
        )
  
}

export default Services