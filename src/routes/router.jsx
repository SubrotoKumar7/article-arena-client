import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import NotFound from "../pages/NotFound/NotFound";
import AllContest from "../pages/AllContest/AllContest";
import Details from "../pages/Details/Details";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layout/DashboardLayout";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";
import AllUsers from "../pages/Dashboard/Admin/AllUsers/AllUsers";
import ApproveContest from "../pages/Dashboard/Admin/ApproveContest/ApproveContest";
import SpecialUsers from "../pages/Dashboard/Admin/SpecialUsers/SpecialUsers";
import AddContest from "../pages/Dashboard/Creator/AddContest/AddContest";
import EditContest from "../pages/Dashboard/Creator/EditContest/EditContest";
import DeclareWinner from "../pages/Dashboard/Creator/DeclareWinner/DeclareWinner";


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
                element: <PrivateRoute><Details></Details></PrivateRoute>
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
        path: 'dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                index: true,
                Component: DashboardHome
            },
            // admin only routes
            {
                path: 'all-users',
                Component: AllUsers
            },
            {
                path: 'approve-contest',
                Component: ApproveContest
            },
            {
                path: 'special-users',
                Component: SpecialUsers
            },
            // creator only routes
            {
                path: 'add-contest',
                Component: AddContest
            },
            {
                path: 'edit-contest',
                Component: EditContest
            },
            {
                path: 'declare-winner',
                Component: DeclareWinner
            }
        ]
    }
]);

export default router;