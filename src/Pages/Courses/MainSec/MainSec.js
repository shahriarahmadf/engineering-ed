import React from 'react';
import { Row } from 'react-bootstrap';
import CourseCard from './CourseCard';

const MainSec = (props) => {
    const courses = props.courses;
    return (
        <div className='mt-4 m-4'>
            <h2 className='text-center'>All Courses</h2>
            <Row xs={1} md={2} lg={2} className="g-4 mt-4">
            {
                courses.map(course => <CourseCard
                    key={course.course_id}
                    course={course}
                ></CourseCard>)
            }
            </Row>

        </div>
    );
};

export default MainSec;