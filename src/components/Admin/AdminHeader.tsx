// import { Bell } from "lucide-react";

export default function AdminHeader() {
    return (
        <header className="h-20 bg-white border-b border-gray-200 px-8 flex items-center justify-between">

            <div>

                <h1 className="text-2xl font-bold">
                    Admin Panel
                </h1>

                <p className="text-sm text-gray-500">
                    Welcome back 👋
                </p>

            </div>

            <div className="flex items-center gap-5">

                <button className="relative">

                    {/* <Bell size={22} /> */}

                    <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500"></span>

                </button>

                <div className="flex items-center gap-3">

                    <div className="w-11 h-11 rounded-full bg-[var(--primary-color)] text-white flex items-center justify-center font-bold">
                        Ş
                    </div>

                    <div>

                        <p className="font-semibold">
                            Şərqiyə
                        </p>

                        <p className="text-sm text-gray-500">
                            Administrator
                        </p>

                    </div>

                </div>

            </div>

        </header>
    );
}