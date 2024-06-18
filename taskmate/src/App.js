import "./App.css";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import { useState, useEffect } from "react";

function App() {
  const [task, setTask] = useState({});

  const [taskList, setTaskList] = useState(() => {
    // Use a function to lazily initialize the state
    const savedTasks = localStorage.getItem("taskList");
    try {
      return savedTasks ? JSON.parse(savedTasks) : [];
    } catch (error) {
      console.error("Failed to parse tasks from localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div className="App">
      <div className="container">
        <Header />
        <main>
          <AddTask
            taskList={taskList}
            setTaskList={setTaskList}
            task={task}
            setTask={setTask}
          />
          <ListTask
            taskList={taskList}
            setTaskList={setTaskList}
            task={task}
            setTask={setTask}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
