import React, { useEffect, useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { getTasks, createTask, deleteTask, updateTask } from "../api/taskApi";
import "../styles/dashboard.css";
import Navbar from "../components/Navbar";

function Dashboard() {
let user = null;

try {
  const storedUser = localStorage.getItem("user");

  if (storedUser && storedUser !== "undefined") {
    user = JSON.parse(storedUser);
  }
} catch (err) {
}
  const [tasks, setTasks] = useState([]);

  //  Load tasks
  const fetchTasks = async () => {
  try {
    const res = await getTasks();
    setTasks(res.data || []);
  } catch (err) {
    setTasks([]);
  }
};

  useEffect(() => {
    fetchTasks();
  }, []);

  //  ADD TASK
  const handleAdd = async (title) => {
    await createTask({ title });
    fetchTasks(); 
  };

  //  DELETE
  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };
//  EDIT TITLE
const handleUpdate = async (id, updatedData) => {
  await updateTask(id, updatedData);
  fetchTasks();
};


//  COMPLETE TASK
const handleComplete = async (id) => {
  await updateTask(id, { status: "completed"});
  fetchTasks();
};
    return (
  <div>
<Navbar user={user} />
    <div className="dashboard-layout">
            <div className="dashboard-content">
        <TaskForm onAdd={handleAdd} />
         <div className="task-stats">

        <p>
          Total: {tasks.length} |
          Completed: {tasks.filter(t => t.status === "completed").length} |
          Pending: {tasks.filter(t => t.status === "pending").length}
        </p>
       </div>
        <TaskList
          tasks={tasks}
          actions={{
            deleteTask: handleDelete,
            completeTask: handleComplete,
            editTask: handleUpdate
          }}
        />

      </div>
    </div>
  </div>
);

}

export default Dashboard;
