import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Blogs from '../Pages/Blogs/Blogs';
import CheckoutPage from '../Pages/Courses/CheckoutPage/CheckoutPage';
import CourseDetails from '../Pages/Courses/CourseDetails/CourseDetails';
import Courses from '../Pages/Courses/Courses';
import Faq from '../Pages/Faq/Faq';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Profile from '../Pages/Profile/Profile';
import Register from '../Pages/Register/Register';
import Page404 from '../utilities/Page404';
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
                loader: () => fetch('https://engineering-ed-server.vercel.app/courses') // loader 
            },
            {
                path:'/course-details/:course_id',
                element: <CourseDetails></CourseDetails>,
                loader: ({params}) => fetch(`https://engineering-ed-server.vercel.app/course-details/${params.course_id}`)
            },
            {
                path:'/checkout-page/:course_id',
                element: <PrivateRoutes><CheckoutPage></CheckoutPage></PrivateRoutes>,
                loader: ({params}) => fetch(`https://engineering-ed-server.vercel.app/checkout-page/${params.course_id}`)
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
            {
                path: '/profile',
                element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
            }           
        ]
    },
    {
        path:'*',
        element: <Page404></Page404>
    }
])