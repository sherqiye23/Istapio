import { Link, useParams } from "react-router-dom";
import type { GetCompanyDetailsDto } from "../../../types/company.types";
import JobCard from "../../../components/User/JobCard";
// import JobCard from "../../components/JobCard";

export default function CompanyDetailPage() {

    const { companyName } = useParams();

    // const { data } = useGetCompanyByNameQuery(companyName!)

    const fakeCompany: GetCompanyDetailsDto = {
        id: "1",
        createdAt: "2026-07-10",
        createdBy: null,
        updatedAt: null,
        updatedBy: null,
        name: "Google",
        description:
            "Google builds products that organize the world's information and make it universally accessible and useful.",
        logoUrl: "https://cdn.simpleicons.org/google",
        userId: "1",
        userName: "google_admin",

        jobPosts: [
            {
                id: "1",
                title: "Frontend Developer",
                categoryId: "1",
                categoryName: "Development",
                vacationTypeId: "1",
                vacationTypeName: "Full Time",
                isActive: true,
                viewCount: 310,
            },
            {
                id: "2",
                title: "React Developer",
                categoryId: "1",
                categoryName: "Development",
                vacationTypeId: "2",
                vacationTypeName: "Remote",
                isActive: true,
                viewCount: 185,
            },
        ]
    };

    const data =
        fakeCompany.name?.toLowerCase() ===
            decodeURIComponent(companyName ?? "").toLowerCase()
            ? fakeCompany
            : fakeCompany;

    return (
        <div className="bg-[var(--secondary-bg)] min-h-screen">

            <div className="mx-auto max-w-[var(--site-width)] px-1 py-12">

                <Link
                    to="/companies"
                    className="text-gray-500 hover:text-[var(--primary-color)]"
                >
                    ← Back to companies
                </Link>

                <div className="mt-8 bg-white rounded-3xl p-8">

                    <div className="flex items-center gap-6">

                        <img
                            src={data.logoUrl ?? ""}
                            className="w-24 h-24 object-contain"
                        />

                        <div>

                            <h1 className="text-4xl font-bold">
                                {data.name}
                            </h1>

                            <p className="text-gray-500 mt-2">
                                @{data.userName}
                            </p>

                        </div>

                    </div>

                    <div className="mt-10">

                        <h2 className="font-bold text-2xl mb-3">
                            About Company
                        </h2>

                        <p className="leading-8 text-gray-600">
                            {data.description}
                        </p>

                    </div>

                </div>

                <div className="mt-10">

                    <h2 className="text-3xl font-bold">
                        Open Positions
                    </h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">

                        {data.jobPosts?.map(job => (

                            <JobCard
                                key={job.id}
                                job={{ ...job, companyId: data.id, companyName: data.name }}
                            />

                        ))}

                    </div>

                </div>

            </div>

        </div>
    );
}