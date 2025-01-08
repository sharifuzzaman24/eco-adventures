import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Home from '../Pages/Home';
import LoginPage from '../Pages/LoginPage';
import SignUpPage from '../Pages/SignUpPage';
import AdventureDetailsPage from '../Pages/AdventureDetailsPage';
import NotFoundPage from '../Pages/NotFoundPage';
import ProfilePage from '../Pages/ProfilePage';
import UpdateProfilePage from '../Pages/UpdateProfilePage';
import PrivateRoutes from './PrivateRoutes';
import ForgotPasswordPage from '../Pages/ForgotPasswordPage';




const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
        path: "/login",
        element: <LoginPage></LoginPage>,
    },
    {
        path: "/register",
        element: <SignUpPage></SignUpPage>,
    },
    {
        path: "/adventure/:id",
        element: <AdventureDetailsPage></AdventureDetailsPage>,
        loader: () => fetch('/adventure.json')
    },
    {
        path: "/profile",
        element: <PrivateRoutes><ProfilePage></ProfilePage></PrivateRoutes>,
    },
    {
        path: "/update-profile",
        element: <PrivateRoutes><UpdateProfilePage></UpdateProfilePage></PrivateRoutes>,
    },
    {
        path: '/forgot-password',
        element: <ForgotPasswordPage></ForgotPasswordPage>
    },
    {
        path: "/*",
        element: <NotFoundPage></NotFoundPage>,
    },
  ]);

export default router;