import { useParams } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import JobCard from "../../../components/User/JobCard";
import { fakeCategories } from "../../../data/fakeDatas";
// import JobCard from "../../components/JobCard";

// import { useGetCategoryByIdQuery } from "../../redux/api/categoryApi";

export default function CategoryDetailPage() {

  const { categoryName } = useParams();

  // const { data, isLoading } = useGetCategoryByIdQuery(id!);
  const data = fakeCategories.find(
    category =>
      category.name?.toLowerCase() === categoryName?.toLowerCase()
  );

  // const data = null;

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-[var(--secondary-bg)] min-h-screen">

      <div className="mx-auto max-w-[var(--site-width)] px-1 py-12">

        <span className="text-sm text-gray-500">
          Categories / {data.name}
        </span>

        <div className="mt-3">

          <h1 className="text-4xl font-bold">
            {data.name}
          </h1>

          <p className="text-gray-500 mt-2">
            {data.jobPostsCount} open positions available
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow-sm flex items-center gap-3 px-4 py-3 mt-8">

          <CiSearch className="text-xl text-gray-500" />

          <input
            placeholder="Search jobs..."
            className="w-full outline-none"
          />

        </div>

        {
          data.jobPosts?.length ? (

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">

              {data.jobPosts.map(job => (

                <JobCard
                  key={job.id}
                  job={job}
                />

              ))}

            </div>

          ) : (

            <div className="text-center py-24 text-gray-500">

              No jobs found in this category.

            </div>

          )
        }

      </div>

    </div>
  );
}