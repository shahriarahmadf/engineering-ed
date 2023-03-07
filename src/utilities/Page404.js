import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <div className='m-4'>
            <h3 className='text-center text-danger'>Error 404</h3>
            <h5 className='text-center'>This page does not exist</h5>
            <h5 className='text-center'>Go to <Link className='text-danger' to='/'>Homepage</Link></h5>
        </div>
    );
};

export default Page404;