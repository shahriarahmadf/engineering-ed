import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import MainSec from './MainSec';
import SideBar from './SideBar';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <Container>
            <Row>
                <Col sm={3}><SideBar key='0' courses={courses}></SideBar></Col>
                <Col sm={9}><MainSec key='0' courses={courses}></MainSec></Col>
            </Row>
        </Container>
    );
};

export default Courses;