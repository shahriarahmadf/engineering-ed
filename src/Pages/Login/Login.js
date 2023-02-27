import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container className='m-2'>
            <Row>
                <Col lg="7">
                    <h1 className='m-5'>
                        Please Login to Resume Your Learning
                    </h1>
                </Col>

                <Col className='mt-5 text-white' lg="5" style={{backgroundColor: 'black'}}>

                <Form className='m-5' style={{ width: '430px' }}>

                {/* Email Address */}
                <Form.Group className="mb-3 text-white" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
            
                {/* Password */}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Text className="text-danger">
                    <p>Error Message</p>
                </Form.Text>

                <Button variant="warning" type="submit">
                    Login
                </Button>
                <>
                <br />
                <br />
                    <p>Forgot your password? <Link to="/">Reset your password</Link> </p>
                </>  
                <>
                    <p>Don't have an account? <Link to="/register">Register</Link> </p>
                </>  
                </Form>
                </Col>
            </Row>
        </Container>
      );
    }

export default Login;
