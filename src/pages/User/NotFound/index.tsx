import { NavLink } from "react-router";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 bg-[var(--primary-bg)]">
      <div className="text-center max-w-md">
        <h1
          className="text-7xl font-bold mb-4 text-[var(--primary-color)]">
          404
        </h1>
        <h2
          className="text-2xl font-semibold mb-2 text-[var(--text)]">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-6">
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <NavLink
          to={"/"}
          className="inline-block px-6 py-3 rounded-lg font-medium transition-all bg-[var(--primary-color)] text-white">
          Back to Home
        </NavLink>
      </div>
    </div>
  );
}