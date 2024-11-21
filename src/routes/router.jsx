import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Home from '../Pages/Home';
import LoginPage from '../Pages/LoginPage';
import SignUpPage from '../Pages/SignUpPage';
import AdventureDetailsPage from '../Pages/AdventureDetailsPage';
import NotFoundPage from '../Pages/NotFoundPage';
import ProfilePage from '../Pages/ProfilePage';
import UpdateProfilePage from '../Pages/UpdateProfilePage';




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
    },
    {
        path: "/profile",
        element: <ProfilePage></ProfilePage>,
    },
    {
        path: "/update-profile",
        element: <UpdateProfilePage></UpdateProfilePage>,
    },
    {
        path: "/*",
        element: <NotFoundPage></NotFoundPage>,
    },
  ]);

export default router;