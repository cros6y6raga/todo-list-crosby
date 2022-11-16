import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

export type FilterValueType = 'all' | 'active' | 'completed'

function App() {

    let [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
    ])
    let [filter, setFilter] = useState<FilterValueType>('all')
    const removeTask = (id: number) => {
        setTasks(tasks.filter(t => t.id !== id))
    }
    let fil = tasks
    if (filter === 'active') {
        fil = tasks.filter(f => !f.isDone)
    }
    if (filter === 'completed') {
        fil = tasks.filter(f => f.isDone)
    }
    const filteredTasks = (st: FilterValueType) => {
        setFilter(st)
    }
    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={fil}
                      removeTask={removeTask}
                      filteredTasks={filteredTasks}/>
        </div>
    );
}

export default App;