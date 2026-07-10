import { MdArrowRightAlt } from "react-icons/md";
import type { GetCategoryDetailsDto } from "../../../types/category.types";
import { NavLink } from "react-router";
// import { useGetCategoriesQuery } from "../../../redux/api/categoryApi";

export default function CategorySection() {

    // const { data: categories = [], isLoading } = useGetCategoriesQuery();

    const categories: GetCategoryDetailsDto[] = [
        {
            id: "1",
            name: "Development",
            jobPostsCount: 1240,
            parentId: null,
            subCategories: null,
            jobPosts: null,
        },
        {
            id: "2",
            name: "Design",
            jobPostsCount: 840,
            parentId: null,
            subCategories: null,
            jobPosts: null,
        },
        {
            id: "3",
            name: "Marketing",
            jobPostsCount: 620,
            parentId: null,
            subCategories: null,
            jobPosts: null,
        },
        {
            id: "4",
            name: "Finance",
            jobPostsCount: 430,
            parentId: null,
            subCategories: null,
            jobPosts: null,
        },
    ];

    return (
        <div className="bg-[var(--secondary-bg)]">
            <div className="mx-auto my-0 max-w-[var(--site-width)] px-1 py-[50px]">
                <div className="font-bold text-3xl">Browse by category</div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center my-3">
                    <p>Explore opportunities across specialized industries</p>
                    <NavLink to="/categories" className="mt-3 sm:mt-0">
                        <button className="font-bold text-[var(--primary-color)] flex gap-1 items-center">All categories <MdArrowRightAlt /></button>
                    </NavLink>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="rounded-3xl bg-white border border-emerald-100 hover:border-emerald-300 hover:shadow-md transition-all duration-300 p-6"
                        >
                            <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 px-3 py-1 text-sm font-semibold">
                                {category.name}
                            </span>

                            <div className="mt-6">
                                <h3 className="text-3xl font-bold text-[var(--text)]">
                                    {category.jobPostsCount}
                                </h3>

                                <p className="mt-1 text-gray-500">
                                    Open positions
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
