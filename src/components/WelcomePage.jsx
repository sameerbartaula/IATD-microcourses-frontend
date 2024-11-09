import React from "react";
import { useNavigate } from "react-router-dom";
import "./welcome.css"; 

function Welcome() {
  const navigate = useNavigate();

  const handleViewCourses = () => {
    navigate("/home"); 
  };

  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <h1 className="welcome-title">Welcome to Microcourses</h1>
        <p className="welcome-text">
          Discover a world of knowledge. Explore our wide range of courses and start learning today!
        </p>
        <button className="view-courses-button" onClick={handleViewCourses}>
          View Courses
        </button>
      </div>
    </div>
  );
}

export default Welcome;