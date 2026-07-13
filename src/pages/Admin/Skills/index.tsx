import { useMemo, useState } from "react";
import TableActions from "../../../components/Admin/TableActions";
import { fakeSkills } from "../../../data/fakeDatas";
import type { GetSkillDto } from "../../../types/skill.types";
import AdminPageHeader from "../../../components/Admin/AdminPageHeader";
import AdminTable from "../../../components/Admin/AdminTable";

export default function AdminSkillsPage() {
  const [search, setSearch] = useState("");

  const tableTitles = ["Name"]

  const filteredSkills = useMemo(() => {
    return fakeSkills.filter((skill) =>
      `${skill.name}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  const handleAdd = () => {
    console.log("Open Create skill Modal");
  };

  const handleEdit = (skill: GetSkillDto) => {
    console.log("Edit", skill);
  };

  const handleDelete = (skill: GetSkillDto) => {
    console.log("Delete", skill);
  };

  return (
    <div>

      <AdminPageHeader
        title="Skills"
        buttonText="Add Skill"
        search={search}
        setSearch={setSearch}
        onAdd={handleAdd}
      />

      <AdminTable >

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

          {filteredSkills.map((skill) => (

            <tr
              key={skill.id}
              className="border-t border-gray-100 hover:bg-gray-50 transition"
            >

              <td className="px-6 py-5 font-medium">
                {skill.name}
              </td>

              <td className="px-6 py-5">
                <TableActions
                  item={skill}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              </td>

            </tr>

          ))}

          {!filteredSkills.length && (
            <tr>

              <td
                colSpan={8}
                className="py-12 text-center text-gray-500"
              >
                No skills found.
              </td>

            </tr>
          )}

        </tbody>

      </AdminTable >

    </div>
  );
}
