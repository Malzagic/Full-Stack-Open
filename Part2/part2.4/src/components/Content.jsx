import React from "react";
import Part from "./Part";

const Content = ({ parts }) => {
  const exercisesArray = parts.map((exercises) => exercises.exercises);
  const sum = exercisesArray.reduce((prev, curr) => prev + curr);

  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
      <p>
        <b>total of {sum} exercises</b>
      </p>
    </>
  );
};

export default Content;
