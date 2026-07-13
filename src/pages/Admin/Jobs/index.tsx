import { useMemo, useState } from "react";

import AdminPageHeader from "../../../components/Admin/AdminPageHeader";
import AdminTable from "../../../components/Admin/AdminTable";
import TableStatus from "../../../components/Admin/TableStatus";
import TableActions from "../../../components/Admin/TableActions";

import { fakeJobs } from "../../../data/fakeDatas";
import type { GetJobPostDto } from "../../../types/jobPost.types";

export default function AdminJobsPage() {
    const [search, setSearch] = useState("");

    const filteredJobs = useMemo(() => {
        return fakeJobs.filter((job) =>
            `${job.title} ${job.companyName} ${job.categoryName} ${job.vacationTypeName}`
                .toLowerCase()
                .includes(search.toLowerCase())
        );
    }, [search]);

    const handleAdd = () => {
        console.log("Open Create Job Modal");
    };

    const handleEdit = (job: GetJobPostDto) => {
        console.log("Edit", job);
    };

    const handleDelete = (job: GetJobPostDto) => {
        console.log("Delete", job);
    };

    return (
        <div>

            <AdminPageHeader
                title="Jobs"
                buttonText="Add Job"
                search={search}
                setSearch={setSearch}
                onAdd={handleAdd}
            />

            <AdminTable>

                <thead className="bg-gray-50">
                    <tr>

                        <th className="px-6 py-4 text-left text-sm font-semibold">
                            Title
                        </th>

                        <th className="px-6 py-4 text-left text-sm font-semibold">
                            Company
                        </th>

                        <th className="px-6 py-4 text-left text-sm font-semibold">
                            Category
                        </th>

                        <th className="px-6 py-4 text-left text-sm font-semibold">
                            Vacation Type
                        </th>

                        <th className="px-6 py-4 text-left text-sm font-semibold">
                            Last Date
                        </th>

                        <th className="px-6 py-4 text-center text-sm font-semibold">
                            Views
                        </th>

                        <th className="px-6 py-4 text-center text-sm font-semibold">
                            Status
                        </th>

                        <th className="px-6 py-4 text-center text-sm font-semibold">
                            Actions
                        </th>

                    </tr>
                </thead>

                <tbody>

                    {filteredJobs.map((job) => (

                        <tr
                            key={job.id}
                            className="border-t border-gray-100 hover:bg-gray-50 transition"
                        >

                            <td className="px-6 py-5 font-medium">
                                {job.title}
                            </td>

                            <td className="px-6 py-5">
                                {job.companyName}
                            </td>

                            <td className="px-6 py-5">
                                {job.categoryName}
                            </td>

                            <td className="px-6 py-5">
                                {job.vacationTypeName}
                            </td>

                            <td className="px-6 py-5">
                                {job.lastDate}
                            </td>

                            <td className="px-6 py-5 text-center">
                                {job.viewCount}
                            </td>

                            <td className="px-6 py-5 text-center">
                                <TableStatus
                                    isActive={job.isActive}
                                />
                            </td>

                            <td className="px-6 py-5">
                                <TableActions
                                    item={job}
                                    onEdit={handleEdit}
                                    onDelete={handleDelete}
                                />
                            </td>

                        </tr>

                    ))}

                    {!filteredJobs.length && (
                        <tr>

                            <td
                                colSpan={8}
                                className="py-12 text-center text-gray-500"
                            >
                                No jobs found.
                            </td>

                        </tr>
                    )}

                </tbody>

            </AdminTable>

        </div>
    );
}