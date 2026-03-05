import React, { useState } from "react";
import TaskItem from "./TaskItem";
import "./TaskList.css";

function TaskList({ tasks, actions }) {

  const [filter, setFilter] = useState("all");
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  if (!tasks || tasks.length === 0) {
    return <p>No tasks found</p>;
  }

  // FILTER TASKS
  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    return task.status === filter;
  });

  const openEditModal = (task) => {
    setEditingTask(task);
    setShowEditModal(true);
  };

  //  UPDATE TASK
  const handleUpdate = () => {
    actions.editTask(editingTask._id, {
      title: editingTask.title,
      status: editingTask.status,
    });

    setShowEditModal(false);
  };

  return (
  <div className="tasklist-wrapper">

    {/* FILTER */}
    <div className="filter-container">
      <select
        className="task-filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
    </div>

    {/*  TASK CARD CONTAINER */}
    <div className="tasklist-card">

      {filteredTasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          actions={{
            ...actions,
            openEditModal
          }}
        />
      ))}

    </div>

    {/* EDIT MODAL */}
    {showEditModal && editingTask && (
      <div className="modal-overlay">
        <div className="modal">
          <h2>Edit Task</h2>

          <input
            value={editingTask.title}
            onChange={(e) =>
              setEditingTask({
                ...editingTask,
                title: e.target.value,
              })
            }
          />

          <button onClick={handleUpdate}>Update</button>
          <button onClick={() => setShowEditModal(false)}>
            Cancel
          </button>
        </div>
      </div>
    )}

  </div>
);
}

export default TaskList;