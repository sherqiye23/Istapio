import { useMemo, useState } from "react";
import { fakeUsers } from "../../../data/fakeDatas";
import { useNavigate } from "react-router";
import type { UserType } from "../../../types/auth.types";
import AdminPageHeader from "../../../components/Admin/AdminPageHeader";
import AdminTable from "../../../components/Admin/AdminTable";
import TableActions from "../../../components/Admin/TableActions";

export default function AdminUsersPage() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const tableTitles = ["Email", "FirstName", "LastName", "Role"];

    const filteredUsers = useMemo(() => {
        return fakeUsers.filter((user) =>
            `${user.email} ${user.firstName} ${user.lastName} ${user.roles}`
                .toLowerCase()
                .includes(search.toLowerCase())
        );
    }, [search]);

    const handleAdd = () => {
        navigate('/signup');
    };

    const handleEdit = (user: UserType) => {
        console.log("Edit", user);
    };

    const handleDelete = (user: UserType) => {
        console.log("Delete", user);
    };

    return (
        <div>

            <AdminPageHeader
                title="Users"
                buttonText="Signup"
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

                    {filteredUsers.map((user) => (

                        <tr
                            key={user.userId}
                            className="border-t border-gray-100 hover:bg-gray-50 transition"
                        >

                            <td className="px-6 py-5 font-medium">
                                {user.email}
                            </td>

                            <td className="px-6 py-5">
                                {user.firstName}
                            </td>

                            <td className="px-6 py-5 font-medium">
                                {user.lastName}
                            </td>

                            <td className="px-6 py-5">
                                {user.roles ? (
                                    user.roles.map((role: string) => (
                                        <span className="mx-2">{role}</span>
                                    ))
                                ) : "NO"}
                            </td>

                            <td className="px-6 py-5">
                                <TableActions
                                    item={user}
                                    onEdit={handleEdit}
                                    onDelete={handleDelete}
                                />
                            </td>

                        </tr>

                    ))}

                    {!filteredUsers.length && (
                        <tr>

                            <td
                                colSpan={8}
                                className="py-12 text-center text-gray-500"
                            >
                                No users found.
                            </td>

                        </tr>
                    )}

                </tbody>

            </AdminTable>

        </div>
    );
}