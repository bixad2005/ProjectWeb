import React from "react";
import {createRoot} from "react-dom/client";
import AppHeader from './Components/AppHeader';
import SearchPanel from './Components/SearchPanel';
import TodoList from "./Components/TodoList";



const App = () => {
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);