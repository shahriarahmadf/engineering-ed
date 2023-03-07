import React from 'react';
import { Accordion } from 'react-bootstrap';

const Faq = () => {
    return (
        <div className='m-4'>
            <h1 className='text-center'>FAQ</h1>
            <div className='m-4'>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>1. Can we get certificate for doing a course here?</Accordion.Header>
                        <Accordion.Body>
                            Yes, you can.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>2. Are the instructors qualified?</Accordion.Header>
                        <Accordion.Body>
                            Yes, they are all qualified to take these courses, having a degree of highest level and professional experiences.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>3. Our questions are not listed here. Can we contact you?</Accordion.Header>
                        <Accordion.Body>
                        Yes, please email to shahriarahmadf@gmail.com
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>
            </div>
        </div>
    );
};

export default Faq;