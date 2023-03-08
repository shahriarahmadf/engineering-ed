import { PDFDownloadLink } from '@react-pdf/renderer';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    const {course_image_url,course_code,credits,title,instructor,rating,total_students,course_keywords,course_details,number_of_classes,course_id} = course;
    return (
        <div className='d-flex justify-content-center m-4'>
            <Card style={{ width: '70%' }}>               
                <Card.Header>
                    <div>{course_code} | {credits} credits</div>
                </Card.Header>
                <Card.Body>
                    <Button onClick={MakePDF} className='d-flex justify-content-end' variant="warning">
                        Get Full Course Details in PDF <PDFDownloadLink></PDFDownloadLink>
                    </Button>
                </Card.Body>
                <div className='d-flex justify-content-center'>
                    <Card.Img variant="top" src={course_image_url} style={{ width: '420px' }}/>
                </div>
                <Card.Body>
                    <Card.Title><h1>{title}</h1></Card.Title>                            
                        <ul>
                            <li>Instructor: {instructor} <br></br></li>
                            <li>Course Rating: {rating}<br></br></li>
                            <li>Keywords: {course_keywords}<br></br></li>
                            <li>Number of classes: {number_of_classes}<br></br></li>
                            <li>Students Enrolled: {total_students}</li>
                        </ul>
                    <div>
                        <strong className='text-secondary'><h3>Course Description</h3></strong> 
                        <p>{course_details}</p>
                    </div>
                </Card.Body>
                <Card.Body className='d-flex justify-content-around align-items-center'>
                <Button variant="danger">
                    <Link to={`/checkout-page/${course_id}`} 
                    style={{color:'inherit', textDecoration:'none'}}>
                        Get Premium Access
                    </Link>
                </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

const MakePDF = () => (
    <div>
        {
            console.log('Under development')
        }

    </div>
  );

export default CourseDetails;