import { useState } from "react";
function Task({ task, onDelete }) {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = () => {
    setIsChecked(!isChecked);
  };
  const handleDeleteClick=()=>{
    onDelete(task)
  }
 
  return (
    <div className="flex">
      <h4 className= {isChecked ? "blue" : "red"}>{isChecked ? "This is done" : "This is pending"}</h4>
       <p className= {isChecked ? "pending" : "done"} >
        {task}
      </p>
      <input type="checkbox" onClick={handleCheck} />
     
      <button onClick={handleDeleteClick}>Delete</button>
    
    
    </div>
  );
}

export default Task;