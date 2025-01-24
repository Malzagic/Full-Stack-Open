import React from "react";
import Header from "./Header";
import Content from "./Content";
import Part from "./Part";

const Course = ({ course }) => {
  return (
    <div>
      <Header text={course.name} />
      <Content>
        <Part parts={course.parts} />
      </Content>
    </div>
  );
};

export default Course;
