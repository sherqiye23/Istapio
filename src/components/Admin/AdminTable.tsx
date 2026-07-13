import type { ReactNode } from "react";

interface AdminTableProps {
    children: ReactNode;
}

export default function AdminTable({ children }: AdminTableProps) {
    return (
        <div className="mt-6 overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="min-w-full">
                {children}
            </table>
        </div>
    );
}