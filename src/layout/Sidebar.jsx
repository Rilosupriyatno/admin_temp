import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div>
      <aside
        id="logo-sidebar"
        className="fixed  left-0  w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li className="centered">
              <NavLink
                to={"/"}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <AiOutlineDashboard />
                <span className="ml-3">Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/users"}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FiUsers />
                <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/product"}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <MdProductionQuantityLimits />
                <span className="flex-1 ml-3 whitespace-nowrap">Product</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/product"}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <BiLogOut />
                <span className="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
