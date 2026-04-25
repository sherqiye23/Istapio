import AdminLayout from "../layouts/AdminLayout";
import UserLayout from "../layouts/UserLayout";
import AdminDashboard from "../pages/Admin/Dashboard";
import LoginPage from "../pages/Login";
import SignupPage from "../pages/Signup";
import AboutPage from "../pages/User/About";
import CompaniesPage from "../pages/User/Companies";
import Home from "../pages/User/Home";
import JobsPage from "../pages/User/Jobs";
import NotFound from "../pages/User/NotFound";
import Profile from "../pages/User/Profile";

const ROUTES = [
    // user routes
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
                path: "/jobs",
                element: <JobsPage />
            },
            {
                path: "/companies",
                element: <CompaniesPage />
            },
            {
                path: "/about",
                element: <AboutPage />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    },
    // admin routes
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                path: "/admin",
                element: <AdminDashboard />
            }
        ]
    },
    // login and signup routes
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/signup",
        element: <SignupPage />
    },
];

export default ROUTES;