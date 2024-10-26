import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCourseById } from "../services/api";

function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    getCourseById(id).then((data) => {
      setCourse(data);
    });
  }, [id]);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{course.title}</h1>
      <img src={course.image} alt={course.title} style={{ width: "300px" }} />
      <p>{course.description}</p>
      <p>Instructor: {course.instructor}</p>
      <p>Duration: {course.duration}</p>
      <button>Enroll Now</button>
    </div>
  );
}

export default CourseDetail;
