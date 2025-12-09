import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import NotFound from "../pages/NotFound/NotFound";
import AllContest from "../pages/AllContest/AllContest";
import Details from "../pages/Details/Details";
import Loader from "../components/Loader/Loader";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'all-contests',
                Component: AllContest
            },
            {
                path: 'details/:id',
                element: <Details></Details>
            }
        ]
    },
    {
        path: '/login',
        Component: Login
    },
    {
        path: '/register',
        Component: Register
    },
    {
        path: '*',
        Component: NotFound
    },
    {
        path: '/loader',
        Component: Loader
    }
]);

export default router;