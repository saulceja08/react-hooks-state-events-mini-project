import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [selected, setSelected] = useState("All")
  const [tasksList, setTasksList] = useState(TASKS)

  function handleClick(event){
    setSelected(event.target.name)
  }

  function onTaskFormSubmit(newTask) {
    setTasksList([...tasksList, newTask]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleClick={handleClick}/>
      <NewTaskForm categories={CATEGORIES} tasksList={tasksList} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={tasksList} selected={selected} />
    </div>
  );
}

export default App;