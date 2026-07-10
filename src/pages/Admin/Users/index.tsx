const MOCK_USERS = [
    { id: 'u1', name: 'Alex Rivera', email: 'alex@istapio.com', created: '2026-05-12', lastLoginIp: '192.168.1.45' },
    { id: 'u2', name: 'Sophia Chen', email: 'sophia@design.io', created: '2026-06-02', lastLoginIp: '172.56.21.9' },
    { id: 'u3', name: 'Marcus Vance', email: 'vance@cloud.net', created: '2026-06-18', lastLoginIp: '84.21.194.55' },
];

export default function AdminUsersPage() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">User Directory</h2>
                <p className="text-sm text-slate-500">Monitor account creation metrics and operational login signatures.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50 border-b border-slate-200 text-xs font-semibold uppercase tracking-wider text-slate-500">
                            <th className="px-6 py-4">Account Member</th>
                            <th className="px-6 py-4">Email Address</th>
                            <th className="px-6 py-4">Date Joined</th>
                            <th className="px-6 py-4 text-right">Last Known IP Address</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
                        {MOCK_USERS.map((user) => (
                            <tr key={user.id} className="hover:bg-slate-50/50 transition-colors">
                                <td className="px-6 py-4 font-semibold text-slate-900">{user.name}</td>
                                <td className="px-6 py-4 font-mono text-xs text-slate-500">{user.email}</td>
                                <td className="px-6 py-4 text-slate-600">{user.created}</td>
                                <td className="px-6 py-4 text-right font-mono text-xs text-slate-400">{user.lastLoginIp}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}