import { CiSearch } from "react-icons/ci";
import type { HeroStatisticType } from "../../../types/homePageTypes";

export default function Hero() {
    const heroStatistic: HeroStatisticType[] = [
        {
            number: "12K+",
            name: "Active Jobs"
        },
        {
            number: "450+",
            name: "Top Companies"
        },
        {
            number: "85K+",
            name: "Users"
        },
    ];

    return (
        <div className="bg-[var(--primary-bg)]">
            <div className="mx-auto my-0 max-w-[var(--site-width)] px-1 py-5">
                <div className="max-w-[600px] flex flex-col gap-5 py-[100px]">
                    <h1 className="text-3xl md:text-5xl font-bold text-[var(--text)]">
                        Find the career that <span className="text-[var(--primary-color)]">accelerates</span> your growth.
                    </h1>
                    <div>
                        <p>Istapio connects elite talent with high-impact opportunities at the world's
                            most innovative companies. Professionalism meets momentum.</p>
                    </div>
                    <div className="flex items-center gap-2 bg-white shadow-md p-2 py-3 rounded-2xl">
                        <CiSearch className="text-gray-500 text-xl" />
                        <input
                            type="text"
                            placeholder="Job title or keywords"
                            className="w-full outline-none bg-transparent"
                        />
                        <button className="bg-[var(--primary-color)] text-white px-4 py-2 rounded-2xl">
                            Search
                        </button>
                    </div>
                </div>
                <div className="flex justify-between">
                    {
                        heroStatistic.map((statistic: HeroStatisticType, i: number) => (
                            <div key={i} className="flex items-center gap-1 flex-col">
                                <span className="font-bold text-2xl">{statistic.number}</span>
                                <span className="text-sm text-gray-500">{statistic.name}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
