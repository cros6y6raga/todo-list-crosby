import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

function App() {

    let [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
    ])
    const removeTask = (id: number) => {
        setTasks(tasks.filter(t => t.id !== id))
    }
    const filteredTasks=(st:string)=>{
        console.log(st)
    }
    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasks}
                      removeTask={removeTask}
                      filteredTasks={filteredTasks}/>
        </div>
    );
}

export default App;