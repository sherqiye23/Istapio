import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import type { GetCategoryJobPostDto } from "../../types/category.types";

interface Props {
    job: GetCategoryJobPostDto;
}

export default function JobCard({ job }: Props) {
    return (
        <div className="rounded-3xl bg-white border border-gray-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 p-5 flex flex-col justify-between">

            <div className="flex flex-col gap-3">

                <span className="inline-flex w-fit rounded-full bg-emerald-100 text-emerald-700 px-3 py-1 text-sm font-medium">
                    {job.vacationTypeName}
                </span>

                <div>
                    <h2 className="text-xl font-bold text-[var(--text)]">
                        {job.title}
                    </h2>

                    <p className="text-gray-500 mt-1">
                        {job.companyName}
                    </p>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">

                    <span>
                        {job.viewCount} views
                    </span>

                    <span
                        className={`font-medium ${
                            job.isActive
                                ? "text-emerald-600"
                                : "text-red-500"
                        }`}
                    >
                        {job.isActive ? "Active" : "Closed"}
                    </span>

                </div>

            </div>

            <Link
                to={`/jobs/${job.title?.toLowerCase()}`}
                className="mt-6 flex items-center gap-1 text-[var(--primary-color)] font-semibold"
            >
                View details
                <MdArrowOutward />
            </Link>

        </div>
    );
}