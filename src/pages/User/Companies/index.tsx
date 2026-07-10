import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { fakeCompanies } from "../../../data/fakeDatas";

// import { useGetCompaniesQuery } from "../../redux/api/companyApi";

export default function CompaniesPage() {

  // const { data: companies = [] } = useGetCompaniesQuery();

  const companies = fakeCompanies;

  return (
    <div className="bg-[var(--secondary-bg)] min-h-screen">

      <div className="mx-auto max-w-[var(--site-width)] px-1 py-12">

        <h1 className="text-4xl font-bold">
          Companies
        </h1>

        <p className="mt-2 text-gray-500">
          Discover companies hiring talented professionals.
        </p>

        <div className="mt-8 bg-white rounded-2xl shadow-sm flex items-center gap-3 px-4 py-3">

          <CiSearch className="text-xl text-gray-400" />

          <input
            placeholder="Search company..."
            className="w-full outline-none"
          />

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">

          {companies.map(company => (

            <Link
              key={company.id}
              to={`/companies/${encodeURIComponent(company.name ?? "")}`}
              className="bg-white rounded-3xl border border-slate-200 hover:border-[var(--primary-color)] hover:shadow-md transition p-6"
            >

              <img
                src={company.logoUrl ?? ""}
                className="w-14 h-14 object-contain"
              />

              <h3 className="mt-5 text-xl font-bold">
                {company.name}
              </h3>

              <p className="mt-2 text-gray-500">
                @{company.userName}
              </p>

            </Link>

          ))}

        </div>

      </div>

    </div>
  );
}