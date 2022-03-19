import { useState } from "react";
import { NavLink } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import Icon from "@material-tailwind/react/Icon";
import logo from "../assets/img/logo.png";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState("-left-64");
  return (
    <>
      <AdminNavbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div
        className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
      >
        <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
          <NavLink
            to="/"
            exact
            className="mt-2 text-center w-full inline-block"
          >
            <img className="flex px-6" src={logo} alt="..." />
          </NavLink>
          <div className="flex flex-col">
            <hr className="my-4 min-w-full" />
            <ul className="flex-col min-w-full flex list-none">
              <li className="rounded-lg mb-4">
                <NavLink
                  to="/"
                  exact
                  className="flex items-center gap-4 text-gray-700 px-4 py-3 rounded-lg"
                  activeClassName="shadow-md"
                >
                  <Icon name="home" size="2xl" />
                  Beranda
                </NavLink>
              </li>
              <li className="rounded-lg mb-2">
                <NavLink
                  to="/personnel"
                  className="flex items-center gap-4 text-gray-700 px-4 py-3 rounded-lg"
                  activeClassName="shadow-md"
                >
                  <Icon name="people" size="2xl" />
                  Personnel List
                </NavLink>
              </li>
              <li className="rounded-lg mb-2 ">
                <NavLink
                  to="/daily"
                  className="flex items-center gap-4 text-gray-700 px-4 py-3 rounded-lg"
                  activeClassName="shadow-md"
                >
                  <Icon name="list_alt" size="2xl" />
                  Daily Attendance
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
