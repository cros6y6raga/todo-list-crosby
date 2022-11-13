import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {
    const tasks1 = [
        {id: 1, title: "Training", isDone: true},
        {id: 2, title: "Food", isDone: true},
        {id: 3, title: "Film", isDone: false}
    ]
    const tasks2 = [
        {id: 1, title: "Anime", isDone: true},
        {id: 2, title: "UFC", isDone: false},
        {id: 3, title: "Beer", isDone: false}
    ]

    return (
        <div className="App">
            <Todolist title={'Monday'} tasks={tasks1}/>
            <Todolist title={'Tuesday'} tasks={tasks2}/>
        </div>
    );
}

export default App;
