import React, { useState } from "react";
import Sidebar from "./sidebar/Sidebar";
import DashHome from "./dashhome/DashHome"

import Settings from "./settings/Settings";
import Inventory from "./inventory/Inventory";
import Profile from "./profile/Profile";
// import { Side } from "@syncfusion/ej2/svg-base";


const Dashboard = ({sidebarOpen}) => {

  const [option, setOption] = useState("User Dashboard");

  return (
    <div>
      <div className={` w-full  min-h-[90vh] mt-16 flex flex-row  trantition-all duration-300`}>

        <div className={`${sidebarOpen===false? "hidden" : "block"} `}>
         <Sidebar option={option} setOption={setOption}  />
        </div>

        <div className="w-[100%] ease-in-out duration-300">
          {option === "User Dashboard" && <DashHome />}
          {option === "Your Inventory" && <Inventory />}
          {/* {option === "Posted Jobs" && <Yourjobs setOption={setOption}/>} */}
          {/* {option === "Add job" && <Addjob/>} */}
          {option === "Profile" && <Profile profile users security />}
          {option === "Settings" && <Settings profile users security />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;