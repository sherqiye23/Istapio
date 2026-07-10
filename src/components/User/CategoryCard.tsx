import { Link } from "react-router-dom";
import type { GetCategoryDetailsDto } from "../../types/category.types";
import { MdArrowOutward } from "react-icons/md";

interface Props {
    category: GetCategoryDetailsDto;
}

export default function CategoryCard({ category }: Props) {
    return (
        <Link
            to={`/categories/${category.name?.toLowerCase() }`}
            className="rounded-3xl bg-white border border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 p-6 flex flex-col justify-between"
        >
            <div>
                <span className="inline-flex rounded-full bg-emerald-100 text-emerald-700 px-3 py-1 text-sm font-semibold">
                    {category.name}
                </span>

                <h2 className="mt-5 text-3xl font-bold">
                    {category.jobPostsCount}
                </h2>

                <p className="text-gray-500">
                    Open positions
                </p>
            </div>

            <div className="mt-6 flex items-center gap-1 text-[var(--primary-color)] font-semibold">
                Browse jobs
                <MdArrowOutward />
            </div>
        </Link>
    );
}