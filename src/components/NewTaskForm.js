import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [newText, setNewText] = useState("");
  const [newCate, setNewCate] = useState("Code");

  const newTask = {
    id: uuid(),
    text: newText,
    category: newCate,
  }

  const cateList = [...categories];
  cateList.shift();

  return (
    <form className="new-task-form" onSubmit={e => {
      e.preventDefault();
      onTaskFormSubmit(newTask);
    }}>
      <label>
        Details
        <input type="text" name="text" value={newText} onChange={(e) => setNewText(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={newCate} onChange={(e) => setNewCate(e.target.value)}>
          {/* render <option> elements for each category here */}
          {cateList.map((cate,index)=> {
            return <option key={index} value={cate}>{cate}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;