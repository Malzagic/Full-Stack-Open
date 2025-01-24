import React from "react";
import Header from "./Header";
import Content from "./Content";
import Part from "./Part";

const Course = ({ course }) => {
  return (
    <div>
      <Header text={course.name} />
      <Content parts={course.parts} />
    </div>
  );
};

export default Course;
