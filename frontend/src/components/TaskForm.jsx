import React,{useState} from "react";
import "./TaskForm.css";
function TaskForm({onAdd}) {
    const [title,setTitle] = useState("");
    const submit = () =>{
        if(!title.trim()) return;
        onAdd(title);
        setTitle("");
    };

    return(
        <div className="task-form">
<input
  type="text"
  placeholder="Enter New Task..."
  value={title}
  onChange={(e)=>setTitle(e.target.value)}
  className="task-input"
/>            <button className="btn add-btn" onClick={submit}>
                Add
            </button>
        </div>
    );
    
}
 export default TaskForm;