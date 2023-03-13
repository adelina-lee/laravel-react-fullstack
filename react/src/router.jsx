import {createBrowserRouter} from "react-router-dom";

import GuestLayout from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLayout";

import Login from "./views/Login";
import Signup from "./views/Signup";
import Dashboard from "./views/Dashboard";
import Users from "./views/Users";
import Error404 from "./views/Error404";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/users" />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/users',
                element: <Users />
            },
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/sign-up',
                element: <Signup />
            },
        ]
    },
    {
        path: '*',
        element: <Error404 />
    },
])

export default router;
