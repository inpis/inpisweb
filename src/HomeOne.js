import React, { Component, useEffect } from 'react';
import HeaderTwo from './components/HeaderTwo';
import HeroImage from './components/HeroImage';
import IconBox from './components/IconBox';
import AboutUs from './components/AboutUs';
import CourseFilter from './components/CourseFilter';
import TestimonialSlider from './components/TestimonialSlider';
import FaqEvent from './components/FaqEvent';
import TeamSlider from './components/TeamSlider';
import HelpArea from './components/HelpArea';
import HomeBlog from './components/HomeBlog';
import CampusTour from './components/CampusTour';
import NewsletterForm from './components/NewsletterForm';
import Footer from './components/Footer';
import Aos from 'aos'
import 'aos/dist/aos.css'

    const HomeOne = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
      }, [])

    
        return (
            <div className="main-wrapper" >

                {/* Header */}
                < HeaderTwo />

                <HeroImage />

                {/* Icon Box */}
                < IconBox />

                {/* About Area */}
              <div data-aos="fade-up">  < AboutUs /> </div> 

                    {/* Services */}
                    < CampusTour />


                {/* Course Filter */}
                < CourseFilter />

                {/* Testimonial Slider */}
                < TestimonialSlider />
              
            
                {/* Newsletter Form */}
                < NewsletterForm />

                {/* Footer */}
                < Footer />

            </div >
        )
}


export default HomeOne