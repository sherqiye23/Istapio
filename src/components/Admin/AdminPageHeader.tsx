import { FiPlus, FiSearch } from "react-icons/fi";

interface AdminPageHeaderProps {
    title: string;
    buttonText: string;
    search: string;
    setSearch: (value: string) => void;
    onAdd: () => void;
}

export default function AdminPageHeader({
    title,
    buttonText,
    search,
    setSearch,
    onAdd,
}: AdminPageHeaderProps) {
    return (
        <div className="space-y-6">

            <div className="flex items-center justify-between">

                <div>
                    <h1 className="text-3xl font-bold">{title}</h1>

                    <p className="mt-1 text-gray-500">
                        Manage all {title.toLowerCase()}.
                    </p>
                </div>

                <button
                    onClick={onAdd}
                    className="flex items-center gap-2 rounded-xl bg-[var(--primary-color)] px-5 py-3 text-white transition hover:opacity-90"
                >
                    <FiPlus />
                    {buttonText}
                </button>

            </div>

            <div className="relative max-w-md">

                <FiSearch
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                />

                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search..."
                    className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-11 pr-4 outline-none focus:border-[var(--primary-color)]"
                />

            </div>

        </div>
    );
}