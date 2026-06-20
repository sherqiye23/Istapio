export default function AdminDashboard() {
  // Pure UI Mock Data matching your schema fields
  const stats = {
    totalUsers: 1248,
    totalCompanies: 42,
    totalJobPosts: 186,
    totalViews: 45890
  };

  const cards = [
    { label: 'Active Users', value: stats.totalUsers, color: 'bg-indigo-500', icon: '👥' },
    { label: 'Registered Entities', value: stats.totalCompanies, color: 'bg-emerald-500', icon: '🏢' },
    { label: 'Job Board Posts', value: stats.totalJobPosts, color: 'bg-blue-500', icon: '💼' },
    { label: 'Aggregated Engagement Views', value: stats.totalViews, color: 'bg-amber-500', icon: '👁️' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">Dashboard Overview</h2>
        <p className="text-sm text-slate-500">Real-time breakdown of current system activity.</p>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">{card.label}</span>
              <h3 className="text-3xl font-bold text-slate-900">{card.value.toLocaleString()}</h3>
            </div>
            <div className={`w-12 h-12 rounded-xl ${card.color} text-white flex items-center justify-center text-xl shadow-sm`}>
              {card.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions Container Placeholder */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <h4 className="font-semibold text-slate-900 mb-2">System Notice</h4>
        <p className="text-sm text-slate-600">
          This dashboard template is fully self-contained using localized UI state. You can safely replace the static data object with an Axios instance or RTK Query when your friend finishes the API endpoints.
        </p>
      </div>
    </div>
  );
}