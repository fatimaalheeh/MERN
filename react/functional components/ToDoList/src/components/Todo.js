import React from "react";
const Todo = (props) => {
    const { idx, item, todoClasses,checkHandle, deleteHandle } = props;
    return (
        <div key={idx}>
        <input
        checked={item.isDone}
        onChange={(e) => {
            checkHandle(idx);
        }}
        type="checkbox"
        />
        <span className={todoClasses.join(" ")}> {item.content} </span>
        <button
        onClick={(e) => {
          deleteHandle(idx); //to sepecify the item's index in which we'd like to delete
        }}
        style={{ marginLeft: 30 }}
        >
        Delete{" "}
    </button>
    </div>
    );
};
export default Todo;
