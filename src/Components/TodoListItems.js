import React from "react";
import './TodoListItems.css'

const TodoListItems = ({ label, important = false }) => {

    const style = {
        color: important ? "red" : "black",
    }
    return (
        <span className={ "todo-list-item" }
              style={ style }>
            { label }
    </span>
    );
};

export default TodoListItems;