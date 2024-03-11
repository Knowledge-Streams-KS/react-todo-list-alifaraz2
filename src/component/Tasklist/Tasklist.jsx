import { useState } from "react"
import "./Task.css"
import Task from "./Task"
const Todo = () => {
  const [data, setData] = useState("")
  const [dataArray,setDataArray]=useState([])

  const saveData = (e) => {
    setData(e.target.value)
  }
  const storeDataArr=()=>{
    if(data!=""){
       setDataArray([...dataArray, data])
       setData("") 
    }
    
  }
  const handleDelete = (taskToDelete) => {
    setDataArray(dataArray.filter((task) => task !== taskToDelete));
  };
  return (
    <>
    <div>
      <input type="text" placeholder="Write Task" onChange={saveData} value={data} />
      <button onClick={storeDataArr}> Submit</button>
      
       
          <p> {dataArray.map((item, index) => (
            <Task key={index} task={item} onDelete={handleDelete}/>
          ))}</p>
        
        </div>
    </>
    
  )
}

export default Todo
