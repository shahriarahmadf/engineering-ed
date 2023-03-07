import Button from 'react-bootstrap/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'

const HomeBanner = () => {
    return (
        <div className='p-4 mx-auto d-flex flex-column justify-content-center bg-warning'>
            <div className='m-5 mx-auto w-75 d-flex  justify-content-center'>
                
                <span className='p-5 m-5 h1' style={{fontWeight: 'bold'}}>
                    <Typewriter
                        words={['Welcome to our school - EngineeringEd', 'Explore Engineering Basic Courses']}
                        loop={4}
                        cursor
                        cursorStyle='_'
                        typeSpeed={100}
                        deleteSpeed={30}
                        delaySpeed={3000}
                    />
                </span>
            </div>
            <div  className='d-flex justify-content-center'>
                <Link to='/courses'>
                    <Button variant="danger" size="lg">
                        See Our Courses
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default HomeBanner;