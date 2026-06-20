import { Link, Outlet, useLocation } from 'react-router-dom';

export default function AdminLayout() {
    const location = useLocation();

    const menuItems = [
        { name: 'Dashboard', path: '/admin', icon: '📊' },
        { name: 'Job Posts', path: '/admin/jobs', icon: '💼' },
        { name: 'Companies', path: '/admin/companies', icon: '🏢' },
        { name: 'Users', path: '/admin/users', icon: '👥' },
        { name: 'Settings', path: '/admin/settings', icon: '⚙️' },
    ];

    return (
        <div className="flex h-screen bg-slate-50 font-sans antialiased text-slate-800">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between">
                <div>
                    <div className="p-6 border-b border-slate-100">
                        <h1 className="text-xl font-bold tracking-tight text-blue-600">Istapio Admin</h1>
                        <p className="text-xs text-slate-400 mt-0.5">Control Center</p>
                    </div>
                    <nav className="p-4 space-y-1">
                        {menuItems.map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                                        isActive 
                                            ? 'bg-blue-50 text-blue-600' 
                                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                    }`}
                                >
                                    <span>{item.icon}</span>
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
                <div className="p-4 border-t border-slate-100">
                    <Link to="/" className="text-xs text-slate-400 hover:text-slate-600 flex items-center gap-1">
                        ← Back to Main Website
                    </Link>
                </div>
            </aside>

            {/* Content Area */}
            <main className="flex-1 overflow-y-auto p-8">
                <Outlet />
            </main>
        </div>
    );
}