import { useState } from "react";
import { NavLink } from "react-router";
import { FiMenu, FiX } from "react-icons/fi";
import type { Link } from "../../../types/navbarTypes";

export default function UserNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links: Link[] = [
    {
      name: "Jobs",
      path: "/jobs",
    },
    {
      name: "Companies",
      path: "/companies",
    },
    {
      name: "About",
      path: "/about",
    },
  ];

  return (
    <div className="bg-[var(--primary-bg)]">
      <div className="max-w-[var(--site-width)] mx-auto px-3 py-3 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>

          <NavLink to="/">
            <span className="font-bold text-xl text-[var(--primary-color)]">
              Istapio
            </span>
          </NavLink>

          <nav className="hidden md:flex gap-3">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "relative text-[var(--primary-color)] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[1.5px] after:bg-[var(--primary-color)]"
                    : "relative hover:text-[var(--primary-color)] transition-all duration-300"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <NavLink to="/login">
            <button className="hover:bg-gray-100 rounded-lg py-1 px-3 text-sm transition-all duration-300">
              Log in
            </button>
          </NavLink>

          <NavLink to="/signup">
            <button className="bg-[var(--primary-color)] text-white rounded-lg py-1 px-3 text-sm transition-all duration-300">
              Sign up
            </button>
          </NavLink>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t bg-[var(--primary-bg)]">
          <nav className="flex flex-col px-4 py-3">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `py-3 ${isActive
                    ? "text-[var(--primary-color)] font-semibold"
                    : "hover:text-[var(--primary-color)]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}