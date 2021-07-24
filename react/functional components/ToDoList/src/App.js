import "./App.css";
import { useState } from "react";
import Todo from "./components/Todo";
function App() {
  const [newTask, setNewTask] = useState("");
  //add
  const [todosList, settodosList] = useState([]);
  //show/edit/delete
  // console.log(newTask);
  //status 
  const taskItem ={
    content : newTask,
    isDone : false 
  }
  const newTaskHandle = (e) => {
    e.preventDefault();
    if(newTask.length <1){
      return;
    }
    settodosList([...todosList, taskItem]);
    // to get the page to update with the new values
    setNewTask("");
    //empty input box
  };
  const checkHandle = (thisIdx)=>{
    const updatedList = todosList.map((item,index)=>{
      if (thisIdx === index) {
        item.isDone = !item.isDone;
        // const updatedItems = {...updatedList,isDone:!todosList.isDone}
        // return updatedItems;
      }
      return item;
    });
    settodosList(updatedList);
  };
  const deleteHandle = (delIdx) => {
    const filteredList = todosList.filter((item, index) => {
      return index !== delIdx;
    });
    settodosList(filteredList);
  };
  return (
    <div className="App">
      <form
        onSubmit={(e) => {
          newTaskHandle(e);
        }}
      >
        <input
          value={newTask}
          // connect the value of the state
          onChange={(e) => {
            setNewTask(e.target.value);
          }}
          type="text"
        />

        <div>
          <button>Add</button>
        </div>
      </form>
      {
      todosList.map((item, idx) => {
        const todoClasses = ["bold","italic"];
        if (item.isDone) {
          todoClasses.push("strike")
        }
        return (
        <Todo todoClasses={todoClasses} item={item} idx={idx} checkHandle={checkHandle} deleteHandle={deleteHandle}/>
      );
      })}
      
    </div>
  );
}

export default App;