import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Services from '../Services/Services';
import WorksSlider from '../WorksSlider/WorksSlider';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <WorksSlider></WorksSlider>
            <Feedback></Feedback>
            <Footer></Footer>
        </div>
    );
};

export default Home;