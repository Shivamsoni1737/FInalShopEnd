import './App.css';
import { Routes, Route } from "react-router-dom";

import Login from './components/Login';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Aboutus from './components/Aboutus';
import Ourservices from './components/Ourservices';
import Ourmission from './components/Ourmission';
import Whyus from './components/Whyus';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div>
      <Header />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/about-us" element={<Aboutus />}></Route>
          <Route path="/our-services" element={<Ourservices />}></Route>
          <Route path="/our-mission" element={<Ourmission />}></Route>
          <Route path="/why-us" element={<Whyus />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
