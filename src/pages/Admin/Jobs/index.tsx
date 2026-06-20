import { useState } from 'react';

// Embedded UI Mock Data matching your schema fields
const MOCK_JOBS = [
    { id: '1', title: 'Senior React Developer', companyName: 'TechCorp', category: 'Frontend Dev', vacationType: 'Full-time', viewCount: 1420, isActive: true, lastDate: '2026-08-30' },
    { id: '2', title: 'Product UI Designer', companyName: 'DesignStudio', category: 'UI/UX Design', vacationType: 'Remote', viewCount: 940, isActive: true, lastDate: '2026-07-15' },
    { id: '3', title: 'DevOps Engineer', companyName: 'CloudScale', category: 'Infrastructure', vacationType: 'Hybrid', viewCount: 512, isActive: false, lastDate: '2026-06-01' },
];

export default function AdminJobsPage() {
    const [jobs, setJobs] = useState(MOCK_JOBS);

    const toggleStatus = (id: string) => {
        setJobs(jobs.map(job => job.id === id ? { ...job, isActive: !job.isActive } : job));
    };

    return (
        <div className="space-y-6">
            {/* Top Row Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900">Manage Job Posts</h2>
                    <p className="text-sm text-slate-500">Monitor, approve, or temporarily deactivate submitted vacancies.</p>
                </div>
                <div className="flex gap-2">
                    <span className="bg-blue-50 text-blue-700 font-semibold px-3 py-1.5 rounded-lg text-xs">
                        {jobs.filter(j => j.isActive).length} Active Listings
                    </span>
                    <span className="bg-slate-100 text-slate-600 font-semibold px-3 py-1.5 rounded-lg text-xs">
                        {jobs.filter(j => !j.isActive).length} Hidden
                    </span>
                </div>
            </div>

            {/* Table Container */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50 border-b border-slate-200 text-xs font-semibold uppercase tracking-wider text-slate-500">
                            <th className="px-6 py-4">Job Details</th>
                            <th className="px-6 py-4">Category</th>
                            <th className="px-6 py-4">Type</th>
                            <th className="px-6 py-4 text-center">Views</th>
                            <th className="px-6 py-4 text-center">Status</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-sm">
                        {jobs.map((job) => (
                            <tr key={job.id} className="hover:bg-slate-50/50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="font-semibold text-slate-900">{job.title}</div>
                                    <div className="text-xs text-slate-400 mt-0.5">{job.companyName} • Exp: {job.lastDate}</div>
                                </td>
                                <td className="px-6 py-4 text-slate-600">{job.category}</td>
                                <td className="px-6 py-4">
                                    <span className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs rounded-md font-medium">
                                        {job.vacationType}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-center font-mono text-slate-600">{job.viewCount}</td>
                                <td className="px-6 py-4 text-center">
                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                                        job.isActive ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                                    }`}>
                                        <span className={`w-1.5 h-1.5 rounded-full ${job.isActive ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                                        {job.isActive ? 'Active' : 'Draft'}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button 
                                        onClick={() => toggleStatus(job.id)}
                                        className={`text-xs font-medium px-3 py-1.5 rounded-lg border transition-all ${
                                            job.isActive 
                                                ? 'border-slate-200 text-slate-600 hover:bg-slate-50' 
                                                : 'border-blue-200 text-blue-600 bg-blue-50 hover:bg-blue-100'
                                        }`}
                                    >
                                        {job.isActive ? 'Hide Post' : 'Publish'}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}