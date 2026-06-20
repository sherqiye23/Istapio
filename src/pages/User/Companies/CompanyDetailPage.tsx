import { useParams, Link } from 'react-router-dom';

const MOCK_VACANCIES = [
    { title: 'Senior Product Designer', company: 'Spotify', location: 'Stockholm', type: 'Full-time', salary: '$120k - $160k', date: '2026-06-18' },
    { title: 'Frontend Engineer (React)', company: 'Spotify', location: 'Remote', type: 'Full-time', salary: '$100k - $140k', date: '2026-06-19' },
];

export default function CompanyDetailPage() {
    const { companyName } = useParams();
    const formattedName = companyName ? companyName.charAt(0).toUpperCase() + companyName.slice(1) : 'Company';

    return (
        <div className="max-w-4xl mx-auto px-6 py-12 font-sans space-y-10">
            {/* Profile Header */}
            <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm flex flex-col md:flex-row gap-6 items-start">
                <div className="w-20 h-20 bg-slate-50 border border-slate-100 text-3xl rounded-2xl flex items-center justify-center">🏢</div>
                <div className="space-y-2 flex-1">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">{formattedName}</h1>
                    <p className="text-sm text-slate-500">Global Corporate Employer • Verified Partner</p>
                    <p className="text-slate-600 text-sm max-w-2xl pt-2">
                        At {formattedName}, we build platforms that connect communities and expand human creativity. Join our engineering teams to shape modern, highly scalable experiences.
                    </p>
                </div>
            </div>

            {/* Nested Vacancies Section */}
            <div className="space-y-6">
                <h2 className="text-xl font-bold text-slate-900">Current Openings at {formattedName}</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {MOCK_VACANCIES.map((job, idx) => (
                        <div key={idx} className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm flex flex-col justify-between">
                            <div>
                                <h3 className="font-bold text-slate-900 text-base">{job.title}</h3>
                                <p className="text-xs text-slate-400 mt-0.5">{job.company} • {job.location}</p>
                                <div className="flex gap-2 mt-4">
                                    <span className="text-xs px-2.5 py-1 rounded-md bg-slate-50 text-slate-600 font-medium">{job.type}</span>
                                    <span className="text-xs px-2.5 py-1 rounded-md bg-slate-50 text-slate-600 font-medium">{job.salary}</span>
                                </div>
                            </div>
                            <div className="mt-6 flex justify-between items-center">
                                <span className="text-[11px] text-slate-400">Posted on {job.date}</span>
                                <Link to={`/vacancies/${encodeURIComponent(job.title.toLowerCase())}`} className="text-xs font-semibold text-blue-600 hover:underline">
                                    Apply now
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}