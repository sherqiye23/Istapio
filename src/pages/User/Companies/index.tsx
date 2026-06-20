import { Link } from 'react-router-dom';

const MOCK_COMPANIES = [
  { name: 'Spotify', logo: '🎵', location: 'Stockholm', openRoles: 14, joinedDate: '2026-06-01', bio: 'A digital music service that gives you access to millions of songs.' },
  { name: 'TechCorp', logo: '🚀', location: 'Baku', openRoles: 5, joinedDate: '2026-05-15', bio: 'Building modern enterprise architectures for global brands.' },
  { name: 'DesignStudio', logo: '🎨', location: 'San Francisco', openRoles: 8, joinedDate: '2026-04-20', bio: 'An award-winning agency defining next-generation user interfaces.' },
];

export default function CompaniesPage() {
  // Sort by newest registration date
  const sortedCompanies = [...MOCK_COMPANIES].sort((a, b) => new Date(b.joinedDate).getTime() - new Date(a.joinedDate).getTime());

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 font-sans">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Explore Companies</h1>
        <p className="text-slate-500 mt-2">Discover hand-vetted workplaces looking for top talent.</p>
      </div>

      {/* Grid Layout matching image_3d53ff.png aesthetic */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedCompanies.map((company) => (
          <div key={company.name} className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-xl border border-slate-100 mb-4">
                {company.logo}
              </div>
              <h3 className="text-lg font-bold text-slate-900">{company.name}</h3>
              <p className="text-xs text-slate-400 mt-0.5">{company.location}</p>
              <p className="text-sm text-slate-600 mt-3 line-clamp-2">{company.bio}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between">
              <span className="text-xs font-semibold text-blue-600 bg-blue-50/60 px-2.5 py-1 rounded-md">
                {company.openRoles} open positions
              </span>
              <Link to={`/companies/${company.name.toLowerCase()}`} className="text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors">
                View Profile →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}