import React, { useState } from "react";
import Sidebar from "./sidebar/Sidebar";
import DashHome from "./dashhome/DashHome"

import Settings from "./settings/Settings";
import Inventory from "./inventory/Inventory";

// import Yourinternships from "./yourinternships/YourInternships"
// import Yourjobs from "./yourjobs/YourJobs"
// import Addjob from "./addJob/Addjob"

const Dashboard = () => {

  const [option, setOption] = useState("User Dashboard");

  return (
    <div>
      <div className="w-full min-h-[90vh] mt-16 flex flex-row">
        <Sidebar option={option} setOption={setOption} />

        <div className="w-[100%]">
          {option === "User Dashboard" && <DashHome />}
          {option === "Your Inventory" && <Inventory />}
          {/* {option === "Posted Jobs" && <Yourjobs setOption={setOption}/>} */}
          {/* {option === "Add job" && <Addjob/>} */}
          {option === "Settings" && <Settings profile users security />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
