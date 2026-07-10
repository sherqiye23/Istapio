import { Link, useParams } from "react-router-dom";
import type { GetJobPostDetailsDto } from "../../../types/jobPost.types";

export default function JobDetailPage() {
    const { jobTitle } = useParams();

    // after RTK Query 
    // const { data, isLoading } = useGetJobByTitleQuery(jobTitle!)

    const fakeJob: GetJobPostDetailsDto = {
        id: "1",
        createdAt: "2026-07-10",
        createdBy: null,
        updatedAt: null,
        updatedBy: null,
        title: "Frontend Developer",
        description:
            "We are looking for a passionate Frontend Developer to build responsive, modern and scalable web applications. You will collaborate closely with designers, backend developers and product managers to deliver high-quality products.",
        requirements:
            "Strong knowledge of React, TypeScript, REST API, Git and responsive web development. Experience with Redux Toolkit is a plus.",
        isActive: true,
        lastDate: "2026-07-30",
        viewCount: 315,
        companyId: "1",
        companyName: "Google",
        categoryId: "1",
        categoryName: "Development",
        vacationTypeId: "1",
        vacationTypeName: "Full Time",
        requiredSkills: [
            {
                id: "1",
                name: "React"
            },
            {
                id: "2",
                name: "TypeScript"
            },
            {
                id: "3",
                name: "Redux Toolkit"
            },
            {
                id: "4",
                name: "Tailwind CSS"
            }
        ]
    };

    const data =
        fakeJob.title?.toLowerCase() ===
            decodeURIComponent(jobTitle ?? "").toLowerCase()
            ? fakeJob
            : fakeJob;

    return (
        <div className="bg-[var(--secondary-bg)] min-h-screen">

            <div className="mx-auto max-w-[var(--site-width)] px-1 py-12">

                <Link
                    to="/jobs"
                    className="text-sm text-gray-500 hover:text-[var(--primary-color)]"
                >
                    ← Back to jobs
                </Link>

                <div className="mt-8 grid lg:grid-cols-[2fr_1fr] gap-8">

                    {/* Left */}

                    <div className="bg-white rounded-3xl p-8">

                        <div className="flex flex-wrap gap-2 mb-5">

                            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">
                                {data.categoryName}
                            </span>

                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                                {data.vacationTypeName}
                            </span>

                            <span
                                className={`px-3 py-1 rounded-full text-sm ${data.isActive
                                        ? "bg-green-100 text-green-700"
                                        : "bg-red-100 text-red-700"
                                    }`}
                            >
                                {data.isActive ? "Active" : "Closed"}
                            </span>

                        </div>

                        <h1 className="text-4xl font-bold">
                            {data.title}
                        </h1>

                        <p className="mt-2 text-lg text-gray-500">
                            {data.companyName}
                        </p>

                        <div className="mt-10">

                            <h2 className="text-2xl font-bold mb-3">
                                Description
                            </h2>

                            <p className="leading-8 text-gray-600">
                                {data.description}
                            </p>

                        </div>

                        <div className="mt-10">

                            <h2 className="text-2xl font-bold mb-3">
                                Requirements
                            </h2>

                            <p className="leading-8 text-gray-600">
                                {data.requirements}
                            </p>

                        </div>

                        <div className="mt-10">

                            <h2 className="text-2xl font-bold mb-4">
                                Required Skills
                            </h2>

                            <div className="flex flex-wrap gap-3">

                                {data.requiredSkills?.map(skill => (

                                    <span
                                        key={skill.id}
                                        className="bg-[var(--secondary-bg)] px-4 py-2 rounded-full"
                                    >
                                        {skill.name}
                                    </span>

                                ))}

                            </div>

                        </div>

                    </div>

                    {/* Right */}

                    <div className="bg-white rounded-3xl p-6 h-fit sticky top-6">

                        <h3 className="font-bold text-xl mb-6">
                            Job Information
                        </h3>

                        <div className="space-y-5">

                            <div>
                                <p className="text-gray-500 text-sm">
                                    Company
                                </p>

                                <p className="font-semibold">
                                    {data.companyName}
                                </p>
                            </div>

                            <div>
                                <p className="text-gray-500 text-sm">
                                    Category
                                </p>

                                <p className="font-semibold">
                                    {data.categoryName}
                                </p>
                            </div>

                            <div>
                                <p className="text-gray-500 text-sm">
                                    Employment Type
                                </p>

                                <p className="font-semibold">
                                    {data.vacationTypeName}
                                </p>
                            </div>

                            <div>
                                <p className="text-gray-500 text-sm">
                                    Views
                                </p>

                                <p className="font-semibold">
                                    {data.viewCount}
                                </p>
                            </div>

                            <div>
                                <p className="text-gray-500 text-sm">
                                    Posted
                                </p>

                                <p className="font-semibold">
                                    {new Date(data.createdAt).toLocaleDateString()}
                                </p>
                            </div>

                            <div>
                                <p className="text-gray-500 text-sm">
                                    Last Date
                                </p>

                                <p className="font-semibold">
                                    {data.lastDate}
                                </p>
                            </div>

                        </div>

                        <button className="w-full mt-8 bg-[var(--primary-color)] text-white rounded-2xl py-3 hover:opacity-90 transition">
                            Apply Now
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}