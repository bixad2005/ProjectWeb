import React from "react";
import './app-header/AppHeader.css';

const AppHeader = ({toDo, done}) => {
    return (
        <div className = {"appheader d-flex"}>
            <h1>To do List</h1>
            <h2>{toDo} more to do, {done}</h2>
        </div>
    );
};

export default AppHeader;