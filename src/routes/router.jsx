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
import EditContest from "../pages/Dashboard/Creator/EditContest/EditContest";
import DeclareWinner from "../pages/Dashboard/Creator/DeclareWinner/DeclareWinner";
import AdminRoute from "./AdminRoute";
import CreatorRoute from "./CreatorRoute";
import UserRoute from "./UserRoute";
import JoinedContest from "../pages/Dashboard/User/JoinedContest/JoinedContest";
import WinningContest from "../pages/Dashboard/User/WinningContest/WinningContest";
import AddContest from "../pages/Dashboard/Creator/AddContest/AddContest";
import MyContest from "../pages/Dashboard/Creator/MyContest/MyContest";


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
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'approve-contest',
                element: <AdminRoute><ApproveContest></ApproveContest></AdminRoute>
            },
            // creator only routes
            {
                path: 'add-contest',
                element: <CreatorRoute><AddContest></AddContest></CreatorRoute>
            },
            {
                path: 'edit-contest/:id',
                element: <CreatorRoute><EditContest></EditContest></CreatorRoute>
            },
            {
                path: 'declare-winner',
                element: <CreatorRoute><DeclareWinner></DeclareWinner></CreatorRoute>
            },
            {
                path: 'my-contest',
                element: <CreatorRoute><MyContest></MyContest></CreatorRoute>
            },
            // user only routes
            {
                path: 'joined-contest',
                element: <UserRoute><JoinedContest></JoinedContest></UserRoute>
            },
            {
                path: 'winning-contest',
                element: <UserRoute><WinningContest></WinningContest></UserRoute>
            }
        ]
    }
]);

export default router;