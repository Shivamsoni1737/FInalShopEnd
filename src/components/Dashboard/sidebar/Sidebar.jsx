import React from "react";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import {CgInsights} from 'react-icons/cg';
import {ImProfile} from 'react-icons/im';
import {MdOutlineSpaceDashboard, MdLogout, MdInventory, MdInsights} from 'react-icons/md';

import { useNavigate } from "react-router-dom";

const Sidebar = ({ option, setOption }) => {

  const navigate = useNavigate();

  const logout = () => {
    // localStorage.clear();
    // setAnchorEl(null);
    navigate("/");
    toast.success("Logout successful!");
  };

  return (
    <div className="col-span-2 border-r font-semibold border-gray-200 min-h-[90vh] w-[90px] xl:w-[250px] pt-8 px-1 flex flex-col items-start justify-between">
      <div className="space-y-8 w-full">


        <div
          onClick={() => {setOption("User Dashboard")}}
          className={`w-full flex items-center justify-start space-x-8 px-4 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent ${
          option === "User Dashboard" && "border-gray-900"
          }`}
        >
          <span>
             <MdOutlineSpaceDashboard className="nav-icon" /> 
          </span>
          <h1
            className={`text-gray-600  group-hover:text-black xl:flex hidden ${
              option === "User Dashboard" && "text-black"
            }`}
          >
            Dashboard
          </h1>
        </div>



        <div
          onClick={() => {setOption("Your Inventory")}}
          className={`w-full flex items-center justify-start space-x-8 px-4 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent ${
          option === "Your Inventory" && "border-gray-900"
          }`}
        >
          <span>
            <MdInventory className="nav-icon" />
          </span>
          <h1
            className={`text-gray-600  group-hover:text-black xl:flex hidden ${
              option === "Your Inventory" && "text-black"
            }`}
          >
            Your Inventory
          </h1>
        </div>



        <div
          onClick={() => {setOption("Customer Insights")}}
          className={`w-full flex items-center justify-start space-x-8 px-4 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent ${
          option === "Customer Insights" && "border-gray-900"
          }`}
        >
          <span>
            <CgInsights className="nav-icon" />
          </span>
          <h1
            className={`text-gray-600  group-hover:text-black xl:flex hidden ${
              option === "Customer Insights" && "text-black"
            }`}
          >
            Customer Insights
          </h1>
        </div>



        <div
          onClick={() => {setOption("Sales Insights")}}
          className={`w-full flex items-center justify-start space-x-8 px-4 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent ${
          option === "Sales Insights" && "border-gray-900"
          }`}
        >
          <span>
            <MdInsights className="nav-icon" />
          </span>
          <h1
            className={`text-gray-600  group-hover:text-black xl:flex hidden ${
              option === "Sales Insights" && "text-black"
            }`}
          >
            Sales Insights
          </h1>
        </div>



        <div className="w-full border-t border-gray-200" />

        <div
          onClick={() => {setOption("Profile")}}
          className={`w-full flex items-center justify-start space-x-8 px-4 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent ${
          option === "Profile" && "border-gray-900"
          }`}
        >
          <span>
            <ImProfile className="nav-icon" />
          </span>
          <h1
            className={`text-gray-600  group-hover:text-black xl:flex hidden ${
              option === "Profile" && "text-black"
            }`}
          >
            Profile
          </h1>
        </div>

        {/* Only Logout as of now */}

        <div
          onClick={logout}
          className={`w-full flex items-center justify-start space-x-8 px-4 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent`}
        >
          <span>
            <MdLogout className="nav-icon" />
          </span>
          <h1
            className={`text-gray-600  group-hover:text-black xl:flex hidden ${
              option === "Posted Internships" && "text-black"
            }`}
          >
            Sign out
          </h1>
        </div>

      </div>

    </div>
  );
};

export default Sidebar;