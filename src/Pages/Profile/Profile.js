import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import {Button, Form, Image} from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Profile = () => {
const {user, updateUserProfile, resetPassword, logOut} = useContext(AuthContext);
const [error, setError] = useState("Press the button only if you want to update information");
console.log(user);

const handleUpdateInformation = event => {
    event.preventDefault();
   
    //form variables input
    const form = event.target;
    const newPhotoURL = form.formBasicNewPhotoURL.value;
    console.log(newPhotoURL);
    // 
    if (newPhotoURL===''){
        return;
    }
    else{
        const profile = {
            photoURL: newPhotoURL
        }
        updateUserProfile(profile)
        .then(()=>{
            window.location.reload(false);
        })
        .catch(error => {
            console.log(error);
            setError(error);
        });
    }
}

// send verification email
const sendEmailVerification = () => {

    // error checking
    if (user.email == ""){
        return setError("No email provided in the Email address field");
    }
    resetPassword(user.email) // call auth func
    .then( ()=>{} )
    .catch( error => {
        console.log(error);
        setError(error);
    })

    logOut();
}
    return (
        <div >
            <div>
                <h2 className='text-center m-5'>User Profile</h2>
                <div className='text-center'>
                {
                    user?.photoURL?
                    <Image
                            style=
                            {{height:'80px', 
                            corderColor:'white'}} 
                            roundedCircle 
                            src={user.photoURL}
                        >
                        </Image>
                    :
                        <FaUserCircle 
                        style=
                            {{height:'80px', 
                            color:'white'}}
                        >
                        </FaUserCircle>

                }
                </div>
            </div>
            <br /> <br />
            <div className='m-3 px-5 mx-5 mb-5 text-left'>           
            <Form onSubmit={handleUpdateInformation} className='m-5' style={{ width: '430px' }}> 
                <Form.Group className="mb-3" >
                    <Form.Label>Email address <span className='text-danger'>(Cannot be changed)</span></Form.Label>
                    <Form.Control type="email" placeholder={user.email} disabled />
                </Form.Group>

                {/* Full Name */}
                <Form.Group className="mb-3">
                    <Form.Label>Full Name  <span className='text-danger'>(Cannot be changed)</span></Form.Label>
                    <Form.Control type="text" placeholder={user.displayName} disabled />
                </Form.Group>
                {/* Password */}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>
                        Password
                    </Form.Label> 
                    <Form.Control type="password" placeholder="Cannot be changed directly" disabled />
                    <Form.Group><Link onClick={sendEmailVerification} to="/">Send password reset email</Link></Form.Group>   
                </Form.Group>

                {/* Photo URL */}
                <Form.Group className="mb-3" controlId="formBasicNewPhotoURL">
                    <Form.Label>Your Photo URL <span className='text-danger'>(If you want to change)</span></Form.Label>
                    <Form.Control type="text" placeholder="Keeping blank will keep the current photo"/>
                </Form.Group>

                <Form.Text className="text-danger">
                    <p>{error}</p>
                </Form.Text>

                <Button variant="warning" type="submit">
                    Update Photo URL
                </Button>


            </Form>
            </div>

        </div>
    );
};

export default Profile;