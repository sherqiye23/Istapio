import { useGetCategoriesQuery } from "../../../rtk/sciles/CategoriesSlice";
import type { GetCategoryDto } from "../../../types/category.types";

export default function AboutPage() {

    const { data }: { data: GetCategoryDto[] } = useGetCategoriesQuery();
    console.log(data);

    return (
        <div className="max-w-3xl mx-auto px-6 py-16 font-sans text-center space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">About Istapio</h1>
            <p className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
                Istapio is a simplified, beautifully structured job distribution directory built to pair top developers with leading global teams seamlessly.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="p-4 bg-slate-50 rounded-xl"><div className="text-xl font-bold text-slate-900">12K+</div><div className="text-xs text-slate-400">Jobs</div></div>
                <div className="p-4 bg-slate-50 rounded-xl"><div className="text-xl font-bold text-slate-900">500+</div><div className="text-xs text-slate-400">Companies</div></div>
                <div className="p-4 bg-slate-50 rounded-xl"><div className="text-xl font-bold text-slate-900">24/7</div><div className="text-xs text-slate-400">Support</div></div>
            </div>
        </div>
    );
}