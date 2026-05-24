import { MdArrowRightAlt } from "react-icons/md";
import type { CategoryType } from "../../../types/homePageTypes";
import { FaChevronLeft, FaChevronRight, FaPaintBrush } from "react-icons/fa";
import { IoBarChart } from "react-icons/io5";
import { FaArrowTrendUp } from "react-icons/fa6";

export default function CategorySection() {

    const categories: CategoryType[] = [
        {
            color: 'bg-blue-200',
            icon: <>
                <FaChevronLeft />
                <FaChevronRight />
            </>,
            name: 'Development',
            desc: '1240 open positions'
        },
        {
            color: 'bg-purple-200',
            icon: <FaPaintBrush />,
            name: 'Design',
            desc: '840 open positions'
        },
        {
            color: 'bg-orange-200',
            icon: <FaArrowTrendUp />,
            name: 'Marketing',
            desc: '620 open positions'
        },
        {
            color: 'bg-green-200',
            icon: <IoBarChart />,
            name: 'Finance',
            desc: '430 open positions'
        }
    ]

    return (
        <div className="bg-[var(--secondary-bg)]">
            <div className="mx-auto my-0 max-w-[var(--site-width)] px-1 py-[50px]">
                <div className="font-bold text-3xl">Browse by category</div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center my-3">
                    <p>Explore opportunities across specialized industries</p>
                    <button className="font-bold text-[var(--primary-color)] flex gap-1 items-center">All categories <MdArrowRightAlt /></button>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 xl:gap-5">
                    {categories.map((category, index) => (
                        <div key={index} className={`rounded-3xl bg-white p-5 flex flex-col gap-2`}>
                            <div className={`${category.color} text-[var(--text)] p-3 rounded-xl h-[45px] w-[45px] flex items-center justify-center text-sm`}>{category.icon}</div>
                            <div className="font-bold text-xl">{category.name}</div>
                            <div>{category.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
