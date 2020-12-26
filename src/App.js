import "./App.css";
import React, { useState } from "react";
import ToDoList from "./Components/todoList";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (e) => {
    setInputList(e.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    console.log("Items Deleted");
    setItems((oldItems) => {
      return oldItems.filter((arryElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <br />
          <h1> My To Do List Project</h1>
          <br />
          <input
            type="text"
            placeholder="add your tasks"
            value={inputList}
            onChange={itemEvent}
          />

          <button onClick={listOfItems}> Add </button>
          <ul>
            {items.map((item, index) => {
              // return <li>{item}</li>;
              return (
                <ToDoList
                  key={index}
                  id={index}
                  text={item}
                  onSelect={deleteItems}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
