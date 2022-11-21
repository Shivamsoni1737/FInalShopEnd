import React, { useState } from 'react'
import Navbar from './navbar/Navbar'
import Security from './security/Security'
import Users from './users/Users'

function Settings({ profile, security, users }) {

  const [navitem, setNavitem] = useState("security")

  const [UserDetails, setUserDetails] = useState({
    name: "Raees Alam",
    dob: "12-jan-2022",
    email: "raees786@ameen.com",
    contact: (1079654321),
    address: "Fatehpur, Gujarat -01",
    password: "password@123",
  })

  const [StoreDetails, setStoreDetails] = useState({
    name: "AMMU-NATION",
    description: "Got some rare things on sale, stranger",
    website: "shopend.netlify.app",
    ratings: (4),
    email: "contact@noammunation.com",
    contact: (2345567891),
    address: "Fatehpur, Gujarat -01",
    gmaps: "demoLink",
    zipcode: (365601),
    daysopened: "Mon-Fri",
    timing: "9AM to 10PM",
  })

  return (
    <>
      <Navbar setNavitem={setNavitem} navitem={navitem} />
      {navitem === "security" && security && <Security UserDetails={UserDetails} setUserDetails={setStoreDetails} />}
      {navitem === "users" && users && <Users />}
    </>
  )
}

export default Settings
