import { useMemo, useState } from "react";
import { fakeSettings } from "../../../data/fakeDatas";
import type { GetSettingDto } from "../../../types/setting.types";
import AdminPageHeader from "../../../components/Admin/AdminPageHeader";
import AdminTable from "../../../components/Admin/AdminTable";
import TableActions from "../../../components/Admin/TableActions";

export default function AdminSettingsPage() {
  const [search, setSearch] = useState("");

  const tableTitles = ["Key", "Value", "CreatedAt", "CreatedBy", "UpdatedAt", "UpdatedBy"];

  const filteredSettings = useMemo(() => {
    return fakeSettings.filter((setting) =>
      `${setting.key} ${setting.value} ${setting.createdAt} ${setting.createdBy} ${setting.updatedAt} ${setting.updatedBy}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  const handleAdd = () => {
    console.log("Open Create Setting Modal");
  };

  const handleEdit = (setting: GetSettingDto) => {
    console.log("Edit", setting);
  };

  const handleDelete = (setting: GetSettingDto) => {
    console.log("Delete", setting);
  };

  return (
    <div>

      <AdminPageHeader
        title="Settings"
        buttonText="Add Setting"
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

          {filteredSettings.map((setting) => (

            <tr
              key={setting.id}
              className="border-t border-gray-100 hover:bg-gray-50 transition"
            >

              <td className="px-6 py-5 font-medium">
                {setting.key}
              </td>

              <td className="px-6 py-5">
                {setting.value}
              </td>

              <td className="px-6 py-5 font-medium">
                {setting.createdAt}
              </td>

              <td className="px-6 py-5">
                {setting.createdBy}
              </td>

              <td className="px-6 py-5 font-medium">
                {setting.updatedAt}
              </td>

              <td className="px-6 py-5">
                {setting.updatedBy}
              </td>

              <td className="px-6 py-5">
                <TableActions
                  item={setting}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              </td>

            </tr>

          ))}

          {!filteredSettings.length && (
            <tr>

              <td
                colSpan={8}
                className="py-12 text-center text-gray-500"
              >
                No settings found.
              </td>

            </tr>
          )}

        </tbody>

      </AdminTable>

    </div>
  );
}
