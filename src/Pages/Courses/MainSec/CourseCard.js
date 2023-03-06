import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CourseCard = ({course}) => {
    const {course_code, course_id, course_image_url, credits, rating, title, total_students, instructor} = course;
    console.log(course_code);
    return (
        <div className='d-flex justify-content-center'>
            
            <Link to={`/courses/${course_id}`} style={{color:'inherit', textDecoration:'none'}}><Card style={{ width: '28em' }}>
                <Card.Img variant="top" src={course_image_url} />
                <Card.Header>{course_code} | {credits} credits</Card.Header>

                <Card.Body>
                    <Card.Title>{title}</Card.Title>                            
                    <Card.Text>
                        Instructor: {instructor} <br></br>
                        Course Rating: {rating} <br></br>
                    </Card.Text>
                </Card.Body>
                <Card.Body className='d-flex justify-content-around align-items-center'>
                    <Button variant="danger">Get Premium Access</Button>
                    <Card.Text><strong>{total_students} students enrolled</strong></Card.Text>
                </Card.Body>
            </Card></Link>
        </div>
    );
};

export default CourseCard;