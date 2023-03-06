import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Blogs from '../Pages/Blogs/Blogs';
import CourseDetails from '../Pages/Courses/CourseDetails/CourseDetails';
import Courses from '../Pages/Courses/Courses';
import Faq from '../Pages/Faq/Faq';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import PrivateRoutes from './PrivateRoutes';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                // loader: () => fetch(API)
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/courses') // loader 
            },
            {
                path:'/course-details/:course_id',
                element: <CourseDetails></CourseDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/course-details/${params.course_id}`)
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            
        ]
    }
])