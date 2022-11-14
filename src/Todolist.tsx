import React from 'react';
import {FilterValueType} from "./App";

export type TodolistType = {
    title: string,
    tasks: Array<TodolistTypeArray>
    removeTask: (id: number) => void
    changeFilter: (value: FilterValueType) => void
}
export type TodolistTypeArray = {
    id: number,
    title: string,
    isDone: boolean
}
export const Todolist = (props: TodolistType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map((t) => {
                    return (
                        <li key={t.id}><input type="checkbox" checked={t.isDone}/> <span>{t.title}</span>
                            <button onClick={() => {
                                props.removeTask(t.id)
                            }}>x
                            </button>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={() => {
                    props.changeFilter('all')
                }}>All
                </button>
                <button onClick={() => {
                    props.changeFilter('active')
                }}>Active
                </button>
                <button onClick={() => {
                    props.changeFilter('completed')
                }}>Completed
                </button>
            </div>
        </div>
    );
};