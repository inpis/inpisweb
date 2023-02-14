import React, { Component } from 'react';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import AboutUs from '../../components/AboutUs';
import IconBox from '../../components/IconBox';
import TabBox from './../../components/TabBox';
import TestimonialSlider from '../../components/TestimonialSlider';
import Footer from '../../components/Footer';
import { Styles } from "./styles/about.js";
import NewsletterForm from '../../components/NewsletterForm';
class About extends Component {

    render() {
        return (


            


            <Styles>

                
                <div className="loader-container">
            <div className="spinner"></div>
          </div>


                {/* Main Wrapper */}
                <div className="main-wrapper about-page">

                    {/* Header 2 */}
                    <HeaderTwo />

                    {/* Breadcroumb */}
                    <BreadcrumbBox title="About Us" />

                    {/* About Area */}
                    <AboutUs />

                    {/* Icon Box Area */}
                    <IconBox />

                    {/* Tab Section */}
                    <TabBox />

                    {/* Testimonial Slider */}
                    <TestimonialSlider />

                    <NewsletterForm />
                    {/* Footer 2 */}
                    <Footer />

                </div>
            </Styles>
        )
    }
}

export default About