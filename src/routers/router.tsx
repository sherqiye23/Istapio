import AdminLayout from "../layouts/AdminLayout";
import UserLayout from "../layouts/UserLayout";
import AdminDashboard from "../pages/Admin/Dashboard";
import Home from "../pages/User/Home";
import NotFound from "../pages/User/NotFound";
import Profile from "../pages/User/Profile";

const ROUTES = [
    {
        path: "/",
        element: <UserLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/profile",
                element: <Profile />
            },
            {
                path: "*",
                element: <NotFound/>
            }
        ]
    },
    {
        path: "/admin",
        element: <AdminLayout/>,
        children: [
            {
                path: "/admin",
                element: <AdminDashboard/>
            }
        ]
    }
];

export default ROUTES;