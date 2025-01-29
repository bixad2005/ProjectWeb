import React from "react";
import TodoListItems from "./TodoListItems";

const TodoList = ({ todos}) => {
    const elements = todos.map((item) => {
        return (
            <li>
                <TodoListItems {...item } />
            </li>
        );
    });
    return (
        <ul>
            {elements}
        </ul>
    );
};

export default TodoList;