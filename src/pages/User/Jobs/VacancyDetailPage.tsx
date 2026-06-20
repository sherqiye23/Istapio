import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function VacancyDetailPage() {
    const { vacancyName } = useParams();
    const [applied, setApplied] = useState(false);

    // Clean up slug formatting for UI display
    const formattedTitle = vacancyName
        ? decodeURIComponent(vacancyName).replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
        : 'Position Details';

    const handleApplySubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setApplied(true);
    };

    return (
        <div className="max-w-5xl mx-auto px-6 py-12 font-sans">
            {/* Back Button */}
            <Link to="/vacancies" className="text-sm font-medium text-slate-400 hover:text-slate-600 transition-colors flex items-center gap-1 mb-8">
                ← Back to listings
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Main Job Body */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="space-y-3">
                        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-md">
                            🔥 Hot Opportunity
                        </div>
                        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">{formattedTitle}</h1>
                        <p className="text-slate-500 font-medium text-sm">
                            Spotify • Stockholm, Sweden (Hybrid Available)
                        </p>
                    </div>

                    {/* Metadata Pill Chips matching image_3d53ff.png visual specs */}
                    <div className="flex flex-wrap gap-2.5 pt-2">
                        <span className="text-xs px-3 py-1.5 rounded-xl bg-slate-100/80 text-slate-600 font-medium">Full-time</span>
                        <span className="text-xs px-3 py-1.5 rounded-xl bg-slate-100/80 text-slate-600 font-medium">$120k – $160k / year</span>
                        <span className="text-xs px-3 py-1.5 rounded-xl bg-slate-100/80 text-slate-600 font-medium">Mid-Senior Level</span>
                    </div>

                    <hr className="border-slate-100" />

                    {/* Description Details */}
                    <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                        <h3 className="text-base font-bold text-slate-900">About the Role</h3>
                        <p>
                            We are looking for a dedicated professional to join our product team. In this position, you will own critical features from inception to deployment, working alongside engineers, data scientists, and managers to deploy products loved by millions globally.
                        </p>

                        <h3 className="text-base font-bold text-slate-900 pt-2">Core Requirements</h3>
                        <ul className="list-disc list-inside space-y-1.5 pl-1 text-slate-600">
                            <li>Proven development experience inside modern React environment tree structures.</li>
                            <li>Strong foundations managing global state engines and cross-platform UI assets.</li>
                            <li>Exceptional communication skills matching asynchronous production standards.</li>
                        </ul>
                    </div>
                </div>

                {/* Sticky Application Submission Panel Sidebar */}
                <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm space-y-4 lg:sticky lg:top-6">
                    <h3 className="font-bold text-slate-900 text-base">Apply for this opening</h3>

                    {applied ? (
                        <div className="p-4 bg-emerald-50 border border-emerald-100 text-emerald-800 rounded-xl text-center text-xs font-medium space-y-1">
                            <p className="text-sm">🎉 Application Sent!</p>
                            <p className="font-normal text-emerald-600 text-[11px]">The hiring team will reach out via email shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleApplySubmit} className="space-y-3.5">
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Full Name</label>
                                <input required type="text" placeholder="John Doe" className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-blue-500 transition-all" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                                <input required type="email" placeholder="john@domain.com" className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-blue-500 transition-all" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Resume Link / Portfolio</label>
                                <input required type="url" placeholder="https://linkedin.com/in/username" className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-blue-500 transition-all" />
                            </div>
                            <button type="submit" className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-xs transition-all shadow-sm">
                                Submit Application
                            </button>
                        </form>
                    )}

                    <p className="text-[10px] text-center text-slate-400 leading-normal">
                        By submitting, you agree to share your profile details with the verified employer tracking system.
                    </p>
                </div>
            </div>
        </div>
    );
}