import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Image, OverlayTrigger, Tooltip} from 'react-bootstrap';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    // import auth context
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then( () => {})
        .catch( error => console.log(error))
    }

    // overlay trigger for profile picture icon when logged in
    const profilePicOverlayTrigger = (props) => (
        <Tooltip id='button-tooltip' {...props}>
            {user.displayName}
        </Tooltip>
    );

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="/">EngineeringEd</Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">

                <Nav.Link href="/courses">Courses</Nav.Link>

                <Nav.Link href="/blogs">Blogs</Nav.Link>

                <Nav.Link href="/faq">FAQ</Nav.Link>
                
            </Nav>

            <Nav>
                <>
                {
                    user?
                        <>
                            <OverlayTrigger
                                placement='bottom-start'
                                delay={{show:250,hide:400}}
                                overlay={profilePicOverlayTrigger}
                            >
                                {
                                    user?.photoURL?
                                        <Image
                                            style=
                                            {{height:'40px', 
                                            corderColor:'white'}} 
                                            roundedCircle 
                                            src={user.photoURL}
                                        >
                                        </Image>
                                    :
                                        <FaUserCircle 
                                        style=
                                            {{height:'40px', 
                                            width:'30px', 
                                            color:'white'}}
                                        >
                                        </FaUserCircle>

                                }
                            </OverlayTrigger>
                            <Nav.Link onClick={logOut}>Logout</Nav.Link>
                        </>
                :
                    <>
                        <Nav.Link href="/register">Register</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                    </>
                }       
                </>
                
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
    }

export default Header;