import React from "react";
import TodoListItems from "../todo-list-item/TodoListItems";
import './TodoList.css'

const TodoList = ({ todos, onDeleted, onToggleDone, onToggleImportant}) => {
    const elements = todos.map((item) => {
        const {id, ...itemProps } = item;

        return (
            <li key={id} className="list-group-item">
                <TodoListItems {...itemProps}
                onDeleted={() => onDeleted(id)}
                onToggleImportant={() => onToggleImportant(id)}
                onToggleDone={() => onToggleDone(id)}
                />
            </li>
        );
    });
    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
};

export default TodoList;