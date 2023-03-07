import React from 'react';
import HomeBanner from './Components/HomeBanner/HomeBanner';
import Instructors from './Components/Instructors/Instructors';
import Reviews from './Components/Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Instructors></Instructors>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;