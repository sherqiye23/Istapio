import { useMemo, useState } from "react";
import AdminTable from "../../../components/Admin/AdminTable";
import TableActions from "../../../components/Admin/TableActions";
import { fakeCategories } from "../../../data/fakeDatas";
import type { GetCategoryDetailsDto } from "../../../types/category.types";
import AdminPageHeader from "../../../components/Admin/AdminPageHeader";

export default function AdminCategoriesPage() {
  const [search, setSearch] = useState("");

  const tableTitles = ["Name", "Parent", "jobPostsCount", "subCategories", "jobPosts"]

  const filteredCategories = useMemo(() => {
    return fakeCategories.filter((category) =>
      `${category.name} ${category.jobPostsCount} ${category.parentId} ${category.subCategories} ${category.jobPosts}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  const handleAdd = () => {
    console.log("Open Create category Modal");
  };

  const handleEdit = (category: GetCategoryDetailsDto) => {
    console.log("Edit", category);
  };

  const handleDelete = (category: GetCategoryDetailsDto) => {
    console.log("Delete", category);
  };

  return (
    <div>

      <AdminPageHeader
        title="Cateories"
        buttonText="Add Category"
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

          {filteredCategories.map((category) => (

            <tr
              key={category.id}
              className="border-t border-gray-100 hover:bg-gray-50 transition"
            >

              <td className="px-6 py-5 font-medium">
                {category.name}
              </td>

              <td className="px-6 py-5">
                {category.parentId}
              </td>

              <td className="px-6 py-5">
                {category.jobPostsCount}
              </td>

              <td className="px-6 py-5">
                {category.subCategories && "Have"}
              </td>

              <td className="px-6 py-5">
                {category.jobPosts && "Have"}
              </td>

              <td className="px-6 py-5">
                <TableActions
                  item={category}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              </td>

            </tr>

          ))}

          {!filteredCategories.length && (
            <tr>

              <td
                colSpan={8}
                className="py-12 text-center text-gray-500"
              >
                No categories found.
              </td>

            </tr>
          )}

        </tbody>

      </AdminTable >

    </div>
  );
}
