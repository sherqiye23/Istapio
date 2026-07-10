import { NavLink } from "react-router";
import type { Link } from "../../../types/navbarTypes";

export default function UserNavbar() {
  const links: Link[] = [
    {
      name: "Jobs",
      path: '/jobs'
    },
    {
      name: "Companies",
      path: '/companies'
    },
    {
      name: "About",
      path: '/about'
    },
  ];

  return (
    <div className="bg-[var(--primary-bg)]">
      <div className="my-0 mx-auto py-3 px-1 bg-[var(--primary-bg)] max-w-[var(--site-width)] flex justify-between gap-2">
        <div className="flex gap-5 items-center">
          <div>
            <NavLink
              to="/"
            >
              <span className="font-bold text-xl text-[var(--primary-color)]">Istapio</span>
            </NavLink>
          </div>
          <nav className="flex gap-3">
            {
              links.map((link: Link) =>
                <NavLink key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "relative text-[var(--primary-color)] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[1.5px] after:bg-[var(--primary-color)]"
                      : "relative hover:text-[var(--primary-color)] transition-all duration-250"
                  }
                >
                  <span>{link.name}</span>
                </NavLink>
              )
            }
          </nav>
        </div>
        <div className="flex gap-3 items-center">
          <NavLink
            to={'/login'}
          >
            <button className=" hover:bg-[var(--primary-bg)] transition-all duration-250 rounded-lg py-1 px-3 text-sm">Log in</button>
          </NavLink>
          <NavLink
            to={'/signup'}
          >
            <button className=" bg-[var(--primary-color)] text-white transition-all duration-250 rounded-lg py-1 px-3 text-sm">Sign in</button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}
