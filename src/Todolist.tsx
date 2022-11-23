import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValueType} from "./App";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    filteredTasks: (st: FilterValueType) => void
    addTask: (title: string) => void
}

export function Todolist(props: PropsType) {
    const [title, setTitle] = useState('')
    const tasksIsMapping = props.tasks.map(el =>
        <li key={el.id}>
            <button onClick={() => props.removeTask(el.id)}>Delete</button>
            <input type="checkbox" checked={el.isDone}/>
            <span>{el.title}</span>
        </li>
    )
    const onClickAllHandler = () => {
        props.filteredTasks('all')
    }
    const onClickActiveHandler = () => {
        props.filteredTasks('active')
    }
    const onClickCompletedHandler = () => {
        props.filteredTasks('completed')
    }
    const addTaskHandler = () => {
        props.addTask(title)
        setTitle('')
    }
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addTaskHandler()
        }
    }
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title} onChange={onChangeHandler} onKeyDown={onKeyDownHandler}/>
            <button onClick={addTaskHandler}>+</button>
        </div>
        <ul>
            {tasksIsMapping}
        </ul>
        <div>
            <button onClick={onClickAllHandler}>All</button>
            <button onClick={onClickActiveHandler}>Active</button>
            <button onClick={onClickCompletedHandler}>Completed</button>
        </div>
    </div>
}