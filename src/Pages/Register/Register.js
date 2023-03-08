import React, { useContext, useState } from 'react';
import { Col, Container, Row, Toast } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const Register = () => {

    // import authContext functions
    const {signUp, updateUserProfile, verifyEmail} = useContext(AuthContext);

    // error message
    const [error, setError] = useState("");

    const sendToast = (message) => {
        console.log('yes');
        console.log(message);
        setError(message);
    }

    const handleRegister = event => {
        event.preventDefault();

        //form variables input
        const form = event.target;
        const email = form.formBasicEmail.value;
        const password = form.formBasicPassword.value;
        const confirmPassword = form.formBasicConfirmPassword.value;
        const name = form.formBasicName.value;
        const photoURL = form.formBasicPhotoURL.value;

        // password error checking
        if(password !== confirmPassword){
            console.log('not same');
            setError('Password and Confirm Password do not match.');
            return;
        }

        // signUp
        signUp(email,password)
        .then(result => {
            const user = result.user;
            console.log(user); //show created user
            handleUpdateUserProfile(name,photoURL); // add more information
            setError(""); // no error
            form.reset();
            verifyEmail(); // email verification

            sendToast('Please check your email.');
        })
        .catch(error => {
            console.log(error);
            setError(error.message);
        })
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
        .then(()=>{})
        .catch(error => {
            console.log(error);
            setError(error);
        });
    }

    return (
        <Container>
            <Row>
                <Col lg="7">
                    <h1 className='m-5'>
                        Register to Enroll into Our Top Engineering Fundamental Courses
                    </h1>
                </Col>

                <Col className='mt-5 text-white' lg="5" style={{backgroundColor: 'black'}}>

                <Form onSubmit={handleRegister} className='m-5' style={{ width: '430px' }}>

                {/* Email Address */}
                <Form.Group className="mb-3 text-white" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>
            
                {/* Password */}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password <span className='text-warning'>(Must be at least six characters)</span></Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>

                {/* Confirm Password */}
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm password" required />
                </Form.Group>

                {/* Full Name */}
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Name that you want on your certificate" required />
                </Form.Group>

                {/* Photo URL */}
                <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                    <Form.Label>Your Photo URL <span className='text-warning'>(Optional)</span></Form.Label>
                    <Form.Control type="text" placeholder="Your Photo URL"/>
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Agreed Terms and Conditions" required />
                </Form.Group>

                <Form.Text className="text-danger">
                    <p>{error}</p>
                </Form.Text>

                <Button variant="warning" type="submit">
                    Register
                </Button>

                <>
                <br />
                <br />
                    <p>Already have an account? <Link to="/login">Login</Link> </p>
                </>  

                </Form>


          
                </Col>
            </Row>
        </Container>
      );
    }

export default Register;

