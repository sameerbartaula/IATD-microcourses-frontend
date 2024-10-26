import React, { useState, useEffect } from "react";
import { getCourses } from "../services/api";
import { Link } from "react-router-dom";

function Home() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then((data) => {
      setCourses(data);
    });
  }, []);

  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {courses.map((course) => (
          <li key={course._id}>
            <img src={course.image} alt={course.title} style={{ width: "100px" }} />
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <p>Duration: {course.duration}</p>
            <Link to={`/courses/${course._id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
