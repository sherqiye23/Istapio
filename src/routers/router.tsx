import UserLayout from "../layouts/UserLayout";
import LoginPage from "../pages/Login";
import SignupPage from "../pages/Signup";
import AboutPage from "../pages/User/About";
import CompaniesPage from "../pages/User/Companies";
import CompanyDetailPage from "../pages/User/Companies/CompanyDetailPage";
import Home from "../pages/User/Home";
import NotFound from "../pages/User/NotFound";
import Profile from "../pages/User/Profile";
import CategoriesPage from "../pages/User/Categories";
import CategoryDetailPage from "../pages/User/Categories/CategoryDetailPage";
import JobsPage from "../pages/User/Jobs";
import JobDetailPage from "../pages/User/Jobs/JobDetailPage";

// admin
import AdminLayout from "../layouts/AdminLayout";
import AdminDashboard from "../pages/Admin/Dashboard";
import AdminJobsPage from "../pages/Admin/Jobs";
import AdminCompaniesPage from "../pages/Admin/Companies";
import AdminUsersPage from "../pages/Admin/Users";
import AdminSettingsPage from "../pages/Admin/Settings";
import AdminCategoriesPage from "../pages/Admin/Categories";
import AdminVacationTypesPage from "../pages/Admin/Vacation Types";
import AdminSkillsPage from "../pages/Admin/Skills";


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
                path: "/jobs/:jobTitle",
                element: <JobDetailPage />
            },
            {
                path: "/companies",
                element: <CompaniesPage />
            },
            {
                path: "/companies/:companyName",
                element: <CompanyDetailPage />
            },
            {
                path: "/categories",
                element: <CategoriesPage />
            },
            {
                path: "/categories/:categoryName",
                element: <CategoryDetailPage />
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
                index: true, // handles /admin
                element: <AdminDashboard />
            },
            {
                path: "categories", // /admin/categories
                element: <AdminCategoriesPage />
            },
            {
                path: "companies", // /admin/companies
                element: <AdminCompaniesPage />
            },
            {
                path: "jobs", // /admin/jobs
                element: <AdminJobsPage />
            },
            {
                path: "vacation-types", // /admin/vacation-types
                element: <AdminVacationTypesPage />
            },
            {
                path: "skills", // /admin/skills
                element: <AdminSkillsPage />
            },
            {
                path: "users", // /admin/users
                element: <AdminUsersPage />
            },
            {
                path: "settings", // /admin/settings
                element: <AdminSettingsPage />
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