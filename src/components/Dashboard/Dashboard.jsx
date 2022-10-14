import React,{useState} from "react";
import Sidebar from "./sidebar/Sidebar";
import DashHome from "./dashhome/DashHome"

import Profile from "./profile/Profile";

// import Yourinternships from "./yourinternships/YourInternships"
// import Yourjobs from "./yourjobs/YourJobs"
// import Addjob from "./addJob/Addjob"

const Dashboard = () => {

  const[option, setOption] = useState("User Dashboard");

  return (
    <div>
      <div className="w-full min-h-[90vh] mt-16 flex flex-row">
        <Sidebar option={option} setOption={setOption} />
        
        <div className="w-[100%]">
          {option === "User Dashboard" && <DashHome setOption={setOption}/>}
          {/* {option === "Posted Internships" && <Yourinternships setOption={setOption}/>} */}
          {/* {option === "Posted Jobs" && <Yourjobs setOption={setOption}/>} */}
          {/* {option === "Add job" && <Addjob/>} */}
          {option === "Profile" && <Profile/>}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
