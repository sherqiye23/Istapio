import { NavLink } from "react-router-dom";
// import {
//     LayoutDashboard,
//     BriefcaseBusiness,
//     Building2,
//     FolderTree,
//     Tags,
//     Users,
//     Settings
// } from "lucide-react";

const menus = [
    {
        title: "Dashboard",
        // icon: LayoutDashboard,
        path: "/admin",
    },
    {
        title: "Categories",
        // icon: FolderTree,
        path: "/admin/categories",
    },
    {
        title: "Companies",
        // icon: Building2,
        path: "/admin/companies",
    },
    {
        title: "Jobs",
        // icon: BriefcaseBusiness,
        path: "/admin/jobs",
    },
    {
        title: "Vacation Types",
        // icon: Tags,
        path: "/admin/vacation-types",
    },
    {
        title: "Skills",
        // icon: Skills,
        path: "/admin/skills",
    },
    {
        title: "Users",
        // icon: Users,
        path: "/admin/users",
    },
    {
        title: "Settings",
        // icon: Settings,
        path: "/admin/settings",
    },
];

export default function AdminSidebar() {
    return (
        <aside className="w-72 bg-white border-r border-gray-200 flex flex-col">

            <div className="h-20 flex items-center px-6 border-b">

                <h2 className="text-2xl font-bold text-[var(--primary-color)]">
                    Istapio
                </h2>

            </div>

            <nav className="flex-1 p-4 space-y-2">

                {menus.map((item) => {

                    // const Icon = item.icon;

                    return (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.path === "/admin"}
                            className={({ isActive }) =>
                                `flex items-center gap-3 rounded-xl px-4 py-3 transition-all
                                ${isActive
                                    ? "bg-[var(--primary-color)] text-white"
                                    : "text-gray-600 hover:bg-gray-100"
                                }`
                            }
                        >
                            {/* <Icon size={20} /> */}

                            <span className="font-medium">
                                {item.title}
                            </span>

                        </NavLink>
                    );
                })}

            </nav>

        </aside>
    );
}