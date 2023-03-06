import React from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

const SideBarButton = ({course}) => {
    const {course_code, instructor, course_keywords} = course;
    
    const popover = (
        <Popover id="popover-basic">
          <Popover.Header as="h3">Instructor Name: <br /> {instructor}</Popover.Header>
          <Popover.Body>
            <b>Keywords: </b>{course_keywords}
          </Popover.Body>
        </Popover>
      );

    return (
        <div className='m-2 d-grid gap-2'>
            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                <Button size="lg" variant="secondary">{course_code}</Button>
            </OverlayTrigger>
        </div>
    );
};

export default SideBarButton;