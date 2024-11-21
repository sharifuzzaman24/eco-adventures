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
        element: <PrivateRoutes><AdventureDetailsPage></AdventureDetailsPage></PrivateRoutes>,
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
        path: "/*",
        element: <NotFoundPage></NotFoundPage>,
    },
  ]);

export default router;