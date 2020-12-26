import React from "react";

const ToDoList = (props) => {
  return (
    <>
      <div className="todo-style">
        <li>{props.text}</li>
        <button
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </>
  );
};

export default ToDoList;
