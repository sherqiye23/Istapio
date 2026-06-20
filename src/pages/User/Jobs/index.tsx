import { Link } from 'react-router-dom';

const ALL_VACANCIES = [
    { title: 'Senior Product Designer', company: 'Spotify', location: 'Stockholm', type: 'Full-time', salary: '$120k - $160k', date: '2026-06-19', logo: '🔴' },
    { title: 'Fullstack Next.js Developer', company: 'TechCorp', location: 'Baku', type: 'Remote', salary: '$90k - $120k', date: '2026-06-18', logo: '🔵' },
    { title: 'Lead DevOps Specialist', company: 'CloudScale', location: 'Hybrid', type: 'Full-time', salary: '$140k - $180k', date: '2026-06-15', logo: '🟢' },
];

export default function VacanciesPage() {
    // Sorted chronologically by posted date string
    const sortedVacancies = [...ALL_VACANCIES].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <div className="max-w-5xl mx-auto px-6 py-12 font-sans space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">Latest Open Positions</h1>
                <p className="text-slate-500 mt-2">Find your next technical career shift inside Istapio engine ecosystem.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sortedVacancies.map((job, idx) => (
                    <div key={idx} className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm flex flex-col justify-between">
                        <div>
                            <div className="text-xl mb-3">{job.logo}</div>
                            <h3 className="font-bold text-slate-900 text-lg">{job.title}</h3>
                            <p className="text-xs text-slate-400 mt-0.5">{job.company} • {job.location}</p>
                            <div className="flex gap-2 mt-4">
                                <span className="text-xs px-2.5 py-1 rounded-md bg-slate-50 text-slate-600 font-medium">{job.type}</span>
                                <span className="text-xs px-2.5 py-1 rounded-md bg-slate-50 text-slate-600 font-medium">{job.salary}</span>
                            </div>
                        </div>
                        <div className="mt-6 pt-4 border-t border-slate-50 flex justify-between items-center">
                            <span className="text-xs text-slate-400">Date: {job.date}</span>
                            <Link to={`/vacancies/${encodeURIComponent(job.title.toLowerCase())}`} className="text-sm font-semibold text-blue-600 hover:underline">
                                Apply now
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}