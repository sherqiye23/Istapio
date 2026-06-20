import { useState } from 'react';

const MOCK_COMPANIES = [
    { id: 'c1', name: 'TechCorp International', description: 'Global software solutions provider.', logoUrl: '🏢', isDeleted: false, userCreator: 'Alex Rivera' },
    { id: 'c2', name: 'DesignStudio Agency', description: 'Creative interface layout studio.', logoUrl: '🎨', isDeleted: false, userCreator: 'Sophia Chen' },
    { id: 'c3', name: 'CloudScale Infrastructure', description: 'High availability hosting architectures.', logoUrl: '☁️', isDeleted: false, userCreator: 'Marcus Vance' },
    { id: 'c4', name: 'Legacy Systems Inc.', description: 'Outdated platform migrations.', logoUrl: '📟', isDeleted: true, userCreator: 'John Doe' },
];

export default function AdminCompaniesPage() {
    const [companies, setCompanies] = useState(MOCK_COMPANIES);

    const toggleSoftDelete = (id: string) => {
        setCompanies(companies.map(company => 
            company.id === id ? { ...company, isDeleted: !company.isDeleted } : company
        ));
    };

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">Registered Corporate Profiles</h2>
                <p className="text-sm text-slate-500">Manage verified employer listings and filter out restricted entities.</p>
            </div>

            {/* Layout Grid Split */}
            <div className="grid grid-cols-1 gap-4">
                {companies.map((company) => (
                    <div 
                        key={company.id} 
                        className={`p-5 bg-white border rounded-2xl shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all ${
                            company.isDeleted ? 'opacity-60 bg-slate-50 border-slate-200' : 'border-slate-200'
                        }`}
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-slate-100 border border-slate-200 rounded-xl flex items-center justify-center text-xl">
                                {company.logoUrl}
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <h4 className={`font-semibold ${company.isDeleted ? 'line-through text-slate-500' : 'text-slate-900'}`}>
                                        {company.name}
                                    </h4>
                                    {company.isDeleted && (
                                        <span className="bg-red-50 text-red-700 font-medium text-[10px] px-2 py-0.5 rounded-md">
                                            Soft-Deleted
                                        </span>
                                    )}
                                </div>
                                <p className="text-xs text-slate-500 mt-0.5">{company.description}</p>
                                <p className="text-[11px] text-slate-400 mt-1">Created By: <span className="font-medium text-slate-600">{company.userCreator}</span></p>
                            </div>
                        </div>

                        <div>
                            <button
                                onClick={() => toggleSoftDelete(company.id)}
                                className={`text-xs font-semibold px-4 py-2 rounded-xl transition-all ${
                                    company.isDeleted
                                        ? 'bg-slate-200 hover:bg-slate-300 text-slate-700'
                                        : 'bg-rose-50 hover:bg-rose-100 text-rose-600'
                                }`}
                            >
                                {company.isDeleted ? 'Restore Profile' : 'Flag / Delete'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}