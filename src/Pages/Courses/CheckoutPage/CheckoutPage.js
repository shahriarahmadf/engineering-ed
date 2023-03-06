import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import { useLoaderData } from 'react-router-dom';

const CheckoutPage = () => {
    const course = useLoaderData();
    const {course_code, title} = course;
    const [open, setOpen] = useState(false);
    return (
        <div className='m-4'>
            <div className='text-center'>
                <h2 >{course_code}</h2> <br></br>
                <h3 >{title}</h3>
                <p>Click on the following button if you are confirm about getting premium access</p>
                <Button 
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                variant="warning"
                >
                Confirm Purchase
            </Button>
            </div>
           
            <div style={{ minHeight: '150px', display:'flex', justifyContent:'center', margin:'2em' }}>
                <Collapse in={open} dimension="width">
                    <div id="example-collapse-text">
                        <Card className='text-center' body style={{ width: '400px' }}>
                            Please wait, our team will contact with you through your email for the next step.
                        </Card>
                    </div>
                </Collapse>
            </div>
      </div>
    );
};

export default CheckoutPage;