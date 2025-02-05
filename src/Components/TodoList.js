import React from "react";
import TodoListItems from "./TodoListItems";

const TodoList = ({ todos}) => {
    const elements = todos.map((item) => {
        const {id, ...itemProps } = item;
        return (
            <li key = {item.id}>
                <TodoListItems {...itemProps}/>
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