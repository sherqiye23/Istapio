import { CiSearch } from "react-icons/ci";
import { fakeJobs } from "../../../data/fakeDatas";
import JobCard from "../../../components/User/JobCard";

// import { useGetJobPostsQuery } from "../../redux/api/jobApi";

export default function JobsPage() {

    // const { data: jobs = [], isLoading } = useGetJobPostsQuery();

    const jobs = fakeJobs;

    return (
        <div className="bg-[var(--secondary-bg)] min-h-screen">

            <div className="mx-auto max-w-[var(--site-width)] px-1 py-12">

                <div className="max-w-2xl">

                    <h1 className="text-4xl font-bold text-[var(--text)]">
                        Find Your Next Opportunity
                    </h1>

                    <p className="mt-3 text-gray-500">
                        Browse the latest job opportunities from trusted companies
                        and take the next step in your career.
                    </p>

                </div>

                <div className="mt-8 bg-white rounded-2xl shadow-sm flex items-center gap-3 px-4 py-3">

                    <CiSearch className="text-xl text-gray-400" />

                    <input
                        type="text"
                        placeholder="Search by job title..."
                        className="w-full outline-none bg-transparent"
                    />

                </div>

                <div className="mt-10 flex items-center justify-between">

                    <h2 className="font-semibold text-lg">
                        {jobs.length} Jobs Found
                    </h2>

                    <button className="border rounded-xl px-4 py-2 hover:bg-white transition">
                        Sort
                    </button>

                </div>

                {
                    jobs.length === 0 ? (

                        <div className="py-24 text-center text-gray-500">

                            No jobs found.

                        </div>

                    ) : (

                        <div className="grid mt-8 sm:grid-cols-2 lg:grid-cols-3 gap-5">

                            {
                                jobs.map(job => (

                                    <JobCard
                                        key={job.id}
                                        job={{
                                            id: job.id,
                                            title: job.title,
                                            companyId: job.companyId,
                                            companyName: job.companyName,
                                            vacationTypeId: job.vacationTypeId,
                                            vacationTypeName: job.vacationTypeName,
                                            isActive: job.isActive,
                                            viewCount: job.viewCount,
                                        }}
                                    />

                                ))
                            }

                        </div>

                    )
                }

            </div>

        </div>
    );
}