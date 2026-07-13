import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/Admin/AdminSidebar";
import AdminHeader from "../components/Admin/AdminHeader";

export default function AdminLayout() {
    return (
        <div className="flex min-h-screen bg-gray-50">

            <AdminSidebar />

            <div className="flex flex-1 flex-col">

                <AdminHeader />

                <main className="flex-1 p-6 overflow-y-auto">
                    <Outlet />
                </main>

            </div>

        </div>
    );
}