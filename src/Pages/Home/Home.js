import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Bussiness from './Bussiness';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <Products></Products>
            <Bussiness></Bussiness>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;