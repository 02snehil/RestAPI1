import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [homeData, setHomeData] = useState("");

  useEffect(() => {
    fetchHomeData();
  }, []);

  const fetchHomeData = async () => {
    try {
      const response = await fetch("https://localhost:9000/home");
      const data = await response.text();
      setHomeData(data);
    } catch (error) {
      console.error("Error fetching home data:", error);
    }
  };

  return (
    <>
      <h1>Welcome to the School Portal</h1>
      <p>Choose an option:</p>
      
      <div>
        <h2>Registration</h2>
        <ul>
          <li>
            <Link to="/student-register">Student Register</Link>
          </li>
          <li>
            <Link to="/teacher-register">Teacher Register</Link>
          </li>
        </ul>
      </div>

      <div>
        <h2>Login</h2>
        <ul>
          <li>
            <Link to="/student-login">Student Login</Link>
          </li>
          <li>
            <Link to="/teacher-login">Teacher Login</Link>
          </li>
        </ul>
      </div>


      <div>
        <h2>All Data from Backend</h2>
          <ul>
            <li>
            <Link to="/all-student-details">Student Details</Link>
            </li>
            <li>
            <Link to="/all-teacher-details">Teacher Details</Link>
            </li>
          </ul>
        <p>{homeData}</p>
      </div>
    </>
  );
};

export default Home;
