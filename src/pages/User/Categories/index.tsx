import { CiSearch } from "react-icons/ci";
import CategoryCard from "../../../components/User/CategoryCard";
import { fakeCategories } from "../../../data/fakeDatas";
// import { useGetCategoriesQuery } from "../../redux/api/categoryApi";

export default function CategoriesPage() {

  // const { data = [], isLoading } = useGetCategoriesQuery();

  return (
    <div className="bg-[var(--secondary-bg)] min-h-screen">

      <div className="mx-auto max-w-[var(--site-width)] px-1 py-12">

        <div className="max-w-2xl">

          <h1 className="text-4xl font-bold">
            Categories
          </h1>

          <p className="text-gray-500 mt-3">
            Explore opportunities across different industries and discover
            the perfect role for your career.
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow-sm flex items-center gap-3 px-4 py-3 mt-8">

          <CiSearch className="text-xl text-gray-500" />

          <input
            type="text"
            placeholder="Search category..."
            className="w-full outline-none"
          />

        </div>

        {
          fakeCategories.length === 0 ? (

            <div className="text-center py-24 text-gray-500">
              No categories found.
            </div>

          ) : (

            <div className="grid mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

              {fakeCategories.map(category => (

                <CategoryCard
                  key={category.id}
                  category={category}
                />

              ))}

            </div>

          )
        }

      </div>

    </div>
  );
}