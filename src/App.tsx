import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from "uuid";

export type FilterValueType = 'all' | 'active' | 'completed'

function App() {

    let [tasks, setTasks] = useState([
        {id: v1(), title: 'Programming', isDone: true},
        {id: v1(), title: 'English', isDone: true},
        {id: v1(), title: 'Bodybuilding', isDone: false},
        {id: v1(), title: 'Nutrition', isDone: false},
    ])
    let [filter, setFilter] = useState<FilterValueType>('all')
    const removeTask = (id: string) => {
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
    const addTask = (title: string) => {
        const newTask = {id: v1(), title, isDone: false}
        setTasks([newTask, ...tasks])
    }
    return (
        <div className="App">
            <Todolist title="Tasks"
                      tasks={fil}
                      removeTask={removeTask}
                      filteredTasks={filteredTasks}
                      addTask={addTask}
            />
        </div>
    );
}

export default App;