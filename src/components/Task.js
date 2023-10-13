import React from "react";

function Task({category, text}) {
  function deleteBtn(event){
    event.target.parentElement.remove();
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={deleteBtn}>X</button>
    </div>
  );
}

export default Task;
