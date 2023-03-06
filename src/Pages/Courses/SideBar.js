import React from 'react';
import SideBarButton from './SideBarButton';

const SideBar = (props) => {
    const courses = props.courses;
    return (
        <div className='d-block mt-4'>
            <div className='text-center'>
                <h2>Course Keywords</h2>
                <p>Total number of instructors: {courses.length}</p>
            </div>

            {courses.map(course => 
                <SideBarButton
                    key={course.course_id}
                    course={course}
                ></SideBarButton>)
            }
        </div>
    );
};

export default SideBar;