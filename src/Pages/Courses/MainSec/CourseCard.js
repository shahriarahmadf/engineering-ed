import React from 'react';
import { Button, Card } from 'react-bootstrap';

const CourseCard = ({course}) => {
    const {course_code, course_details, course_image_url, credits, rating, title, total_students, instructor} = course;
    console.log(course_code);
    return (
        <div>
            <Card style={{ width: '24em' }}>
                <Card.Img variant="top" src={course_image_url} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>

                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseCard;