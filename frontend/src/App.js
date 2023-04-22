import { useEffect, useState } from "react";
import TodoC from "./components/TodoC";
import { addToDo, deleteToDo, getAllToDo, updateToDo } from "./utils/HandleApi";



function App() {

  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [todoID, setTodoID] = useState("")
  

  useEffect(()=>{
    getAllToDo(setTodo)
  },[])

  const updateMode = (_id,text)=>{
    setIsUpdating(true)
    setText(text)
    setTodoID(_id)
  }

  return (
    <div className="App">
      <div className="container">
        <h1>TODO APP</h1>
        
        <div className="top">
          <input 
          className="inputBox"
          type="text" 
          placeholder="Enter your task..."
          value={text}
          onChange={(e)=> setText(e.target.value)} />
          <div 
          className="add" 
          onClick={ isUpdating?
          ()=>updateToDo(todoID,text,setTodo,setText, setIsUpdating) 
          :()=>addToDo(text,setText,setTodo)}>
          {isUpdating? "Updating": "Add"}
          </div>
        </div>

        <div className="list">
          {todo.map((item)=>
            <TodoC 
            todo={todo} setTodo={setTodo}
            key={item._id} 
            id = {item._id}
            text={item.text}
            updateMode={()=>updateMode(item._id,item.text)}
            deleteToDo={()=>deleteToDo(item._id, setTodo)}
            />
          )}
        </div>

      </div>
    </div>
  );
}

export default App;
