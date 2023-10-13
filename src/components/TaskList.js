import React from "react";
import Task from "./Task";

function TaskList({ tasks, selected = "All" }) {
  const taskToDisplay = tasks.filter((task) => {
    if (selected === "All") return true;
    else return selected === task.category;
  });

  return (
    <div className="tasks">
      {taskToDisplay.map((item, index) => (
        <Task key={index} category={item.category} text={item.text} />
      ))}
    </div>
  );
}

export default TaskList;