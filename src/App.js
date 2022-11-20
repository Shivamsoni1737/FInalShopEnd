import './App.css';
import React,{useState} from 'react';
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Login from './components/Login';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Aboutus from './components/Aboutus';
import Ourservices from './components/Ourservices';
import Ourmission from './components/Ourmission';
import Whyus from './components/Whyus';
import Dashboard from './components/Dashboard/Dashboard';
import Customer from './components/Customer';
import CustomerID from './components/Customer/[id]';

function App() {

  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div>
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/about-us" element={<Aboutus />}></Route>
        <Route path="/our-services" element={<Ourservices />}></Route>
        <Route path="/our-mission" element={<Ourmission />}></Route>
        <Route path="/why-us" element={<Whyus />}></Route>
        <Route path="/dashboard" element={<Dashboard sidebarOpen={sidebarOpen} />}></Route>
        <Route path="/customer" element={<Customer />}></Route>
        <Route exact path="/customer/:id" element={<CustomerID />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
