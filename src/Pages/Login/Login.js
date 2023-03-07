import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {FaGithub, FaGoogle} from 'react-icons/fa'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    // import authContext functions
    const {setLoading, signIn, resetPassword, providerLogin} = useContext(AuthContext);

    // error message
    const [error, setError] = useState("");

    // navigation and location
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    // normal login 
    const handleLogIn = event => {
        event.preventDefault();

        //form variables input
        const form = event.target;
        const email = form.formBasicEmail.value;
        const password = form.formBasicPassword.value;

        // password error checking

        // signUp
        signIn(email,password)
        .then(result => {
            const user = result.user;
            console.log(user); //show logged in user
            setError(""); // no error
            form.reset();
             // toast for success
            
            // verfied email navigated
            if(user.emailVerified){
                navigate(from, {replace: true});
            }
            else{
                setError('Email not verified');
            }


        })
        .catch(error => {
            console.log(error);
            setError(error.message);
        })
        .finally(() => setLoading(false))

    }
    
    // send password reset
    // useState for email saving for reset password
    const [formEmail, setFormEmail] = useState(""); 
    // getEmail to save in useState variable formEmail
    const getEmail  = event => {
        const email = event.target.value;
        setFormEmail(email);
    }
    // send verification email
    const sendEmailVerification = event => {
        console.log(formEmail);
        // error checking
        if (formEmail == ""){
            return setError("No email provided in the Email address field");
        }
        resetPassword(formEmail) // call auth func
        .then( ()=>{} )
        .catch( error => console.log(error))
    }
   
    
    // provider login
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // google login handler
    const handleGoogleProviderLogIn = () => {
        handleProviderLogin(googleProvider);
    } 
    // github login handler
    const handleGithubProviderLogIn = () => {
        handleProviderLogin(githubProvider);
    } 
    
    // common provider login function
    const handleProviderLogin = (provider) => {

        providerLogin(provider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.log(error);
        })
        }

    return (
        <Container>
            <Row>
                <Col lg="7">
                    <h1 className='m-5'>
                        Please Login to Resume Your Learning
                    </h1>
                </Col>

                <Col className='mt-5 text-white' lg="5" style={{backgroundColor: 'black'}}>

                <Form onSubmit={handleLogIn} className='m-5' style={{ width: '430px' }}>

                {/* Email Address */}
                <Form.Group onBlur={getEmail} className="mb-3 text-white" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
            
                {/* Password */}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Text className="text-danger">
                    <p>{error}</p>
                </Form.Text>

                <Button variant="warning" type="submit">
                    Login
                </Button>
                <>
                <br />
                <br />
                    <Form.Group>Forgot your password? <Link onClick={sendEmailVerification} to="/login">Send a password reset to your email</Link> </Form.Group>
                </>  
                <br />
                <>
                    <p>Don't have an account? <Link to="/register">Register</Link> </p>
                </>  

                
                <span className='d-flex justify-content-between mx-2'>
                <Button onClick={handleGoogleProviderLogIn} variant="primary" type="submit">
                   <FaGoogle></FaGoogle> Login with  Google
                </Button>

                <Button onClick={handleGithubProviderLogIn} variant="primary" type="submit">
                   <FaGithub></FaGithub> Login with  GitHub
                </Button>
                </span>


                </Form>
                </Col>
            </Row>
        </Container>
      );
    }

export default Login;
