import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Insert_Record from './Insert_Record';
import Rest_API from './Rest_API';
import Login from './Login';
import PersonalDashboard from './PersonalDashboard';  

const Master = () => {
  return (
  <>
       <Routes>
           <Route path="/" element={<Home />}></Route>
           <Route path="/student-register" element={<Insert_Record />} ></Route>
            <Route path="/all-student-details" element={<Rest_API />}></Route>
            <Route path="/student-login" element={<Login />}></Route>
            <Route path="/personal-dashbord" element={<PersonalDashboard />}></Route>
       </Routes>
   </>
  );
}

export default Master;
