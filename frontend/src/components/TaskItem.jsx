import React from "react";
import "./TaskItem.css";

function TaskItem({ task, actions }) {

  //  COMPLETE TASK
  const handleComplete = () => {
    actions.completeTask(task._id, {
  title: task.title,
  status: "completed",
});
  };

  //  EDIT TASK

  const handleEdit = () => {
    actions.openEditModal(task);
  };

  return (
    <div className="task-card">

      <span className={`task-title ${task.status==="completed" ? "completed":""}`}>
        {task.title}
      </span>

      <div className="task-actions">

        {task.status === "pending" && (
          <button className="btn btn-complete" onClick={handleComplete}>
            Complete
          </button>
        )}

        <button className="btn btn-edit" onClick={handleEdit}>
          Edit
        </button>

        <button
          className="btn btn-delete"
          onClick={() => actions.deleteTask(task._id)}
        >
          Delete
        </button>

      </div>
    </div>
  );
}
export default TaskItem;
