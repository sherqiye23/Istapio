import { FiEdit2, FiInfo, FiTrash2 } from "react-icons/fi";

interface TableActionsProps<T> {
    item: T;
    onEdit: (item: T) => void;
    onDelete: (item: T) => void;
    onInfo?: (item: T) => void;
}

export default function TableActions<T>({
    item,
    onEdit,
    onDelete,
    onInfo
}: TableActionsProps<T>) {
    return (
        <div className="flex items-center justify-center gap-2">

            <button
                onClick={() => onInfo ? onInfo(item) : onEdit(item)}
                className={`${onInfo ? 'rounded-lg border border-blue-200 p-2 text-blue-600 hover:bg-blue-50 transition' : 'hidden'}`}
            >
                <FiInfo size={16} />
            </button>

            <button
                onClick={() => onEdit(item)}
                className="rounded-lg border border-blue-200 p-2 text-blue-600 hover:bg-blue-50 transition"
            >
                <FiEdit2 size={16} />
            </button>

            <button
                onClick={() => onDelete(item)}
                className="rounded-lg border border-red-200 p-2 text-red-600 hover:bg-red-50 transition"
            >
                <FiTrash2 size={16} />
            </button>

        </div>
    );
}