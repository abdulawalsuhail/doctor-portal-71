import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonial';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner/>
            <Info/>
            <Services/>
            <MakeAppointment/>
            <Testimonials/>
            <Contact/>
        </div>
    );
};

export default Home;