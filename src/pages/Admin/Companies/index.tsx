import { useMemo, useState } from 'react';
import { fakeCompanies } from '../../../data/fakeDatas';
import type { GetCompanyDto } from '../../../types/company.types';
import AdminPageHeader from '../../../components/Admin/AdminPageHeader';
import AdminTable from '../../../components/Admin/AdminTable';
import TableActions from '../../../components/Admin/TableActions';

export default function AdminCompaniesPage() {
    const [search, setSearch] = useState("");

    const tableTitles = ["Name", "Username", "Logo"];

    const filteredCompanies = useMemo(() => {
        return fakeCompanies.filter((company) =>
            `${company.name} ${company.userName} ${company.logoUrl}`
                .toLowerCase()
                .includes(search.toLowerCase())
        );
    }, [search]);

    const handleAdd = () => {
        console.log("Open Create Company Modal");
    };

    const handleEdit = (company: GetCompanyDto) => {
        console.log("Edit", company);
    };

    const handleDelete = (company: GetCompanyDto) => {
        console.log("Delete", company);
    };

    return (
        <div>

            <AdminPageHeader
                title="Companies"
                buttonText="Add Company"
                search={search}
                setSearch={setSearch}
                onAdd={handleAdd}
            />

            <AdminTable>

                <thead className="bg-gray-50">
                    <tr>
                        {
                            tableTitles.map((title, i) => (
                                <th key={i} className="px-6 py-4 text-left text-sm font-semibold">
                                    {title}
                                </th>
                            ))
                        }
                    </tr>
                </thead>

                <tbody>

                    {filteredCompanies.map((company) => (

                        <tr
                            key={company.id}
                            className="border-t border-gray-100 hover:bg-gray-50 transition"
                        >

                            <td className="px-6 py-5 font-medium">
                                {company.name}
                            </td>

                            <td className="px-6 py-5">
                                {company.userName}
                            </td>

                            <td className="px-6 py-5">
                                {company.logoUrl ? (
                                    <img className='w-10 h-10' src={company.logoUrl} alt="logo" />
                                ) : "NO"}
                            </td>

                            <td className="px-6 py-5">
                                <TableActions
                                    item={company}
                                    onEdit={handleEdit}
                                    onDelete={handleDelete}
                                />
                            </td>

                        </tr>

                    ))}

                    {!filteredCompanies.length && (
                        <tr>

                            <td
                                colSpan={8}
                                className="py-12 text-center text-gray-500"
                            >
                                No companies found.
                            </td>

                        </tr>
                    )}

                </tbody>

            </AdminTable>

        </div>
    );
}