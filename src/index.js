import React from "react";
import {createRoot} from "react-dom/client";
import AppHeader from './Components/AppHeader';
import SearchPanel from './Components/SearchPanel';
import TodoList from "./Components/TodoList";



const App = () => {
    const todoData = [
        {label: 'Drink Coffee', important: false, id: 1},
        {label: 'Implement React Application', important: true, id: 2},
        {label: 'Make notes from your stud', important: false, id: 3},
        {label: 'Do not drink alchohol', important: false, id: 4},
    ];

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos =  {todoData} />
        </div>
    );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);