import React from "react";
import editIcon from "../assets/edit.svg";
import deleteIcon from "../assets/deleteIcon.svg";

export default function ListTask({ taskList, setTaskList, task, setTask }) {
  const handleEdit = (id) => {
    const seletedTask = taskList.find((todo) => todo.id === id);
    setTask(seletedTask);
  };

  const handleDelete = (id) => {
    const updatedTasklist = taskList.filter((todo) => todo.id !== id);
    setTaskList(updatedTasklist);
  };

  return (
    <>
      <div className="list-header">
        <h2>To-do</h2>
        <p className="counter">{taskList.length}</p>
        <button onClick={() => setTaskList([])}>Clear All</button>
      </div>
      {taskList.map((todo) => (
        <div key={todo.id} className="list-body">
          <div className="first-line">
            <p>{todo.name}</p>
            <div className="icons">
              <img
                src={editIcon}
                alt="edit"
                onClick={() => handleEdit(todo.id)}
              />
              <img
                src={deleteIcon}
                alt="delete"
                onClick={() => handleDelete(todo.id)}
              />
            </div>
          </div>
          <div className="second-line">
            <p>{todo.time}</p>
          </div>
        </div>
      ))}
    </>
  );
}
