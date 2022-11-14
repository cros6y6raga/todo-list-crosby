import React, {useState} from 'react';
import './App.css';
import {Todolist, TodolistTypeArray} from "./Todolist";

export type FilterValueType = 'all' | 'active' | 'completed'

function App() {
    let [tasks, setTasks] = useState<Array<TodolistTypeArray>>([
        {id: 1, title: "Training", isDone: true},
        {id: 2, title: "Food", isDone: true},
        {id: 3, title: "Film", isDone: false},
        {id: 4, title: "Cats", isDone: false},
        {id: 5, title: "Dogs", isDone: false},
    ])
    let [filter, setFilter] = useState<FilterValueType>('all')
    let removeTask = (id: number) => {
        let FilteredTasks = tasks.filter(t => t.id !== id)
        setTasks(FilteredTasks)
    }
    let tasksForTodolist = tasks
    if (filter === 'active') {
        tasksForTodolist = tasks.filter(tasks => tasks.isDone === false)
    }
    if (filter === 'completed') {
        tasksForTodolist = tasks.filter(tasks => tasks.isDone === true)
    }
    let changeFilter = (value: FilterValueType) => {
        setFilter(value)
    }
    return (
        <div className="App">
            <Todolist title={'Monday'} tasks={tasksForTodolist} removeTask={removeTask} changeFilter={changeFilter}/>
        </div>
    );
}

export default App;