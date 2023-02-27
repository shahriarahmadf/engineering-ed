import React from 'react';
import Instructors from './Components/Instructors/Instructors';
import Reviews from './Components/Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <h2>This is Home</h2>
            <Instructors></Instructors>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;