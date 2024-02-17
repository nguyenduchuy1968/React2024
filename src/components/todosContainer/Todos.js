import React, {useEffect, useState} from 'react';
import {todoService} from "../../services/todoService";
import Todo from "./Todo";

const Todos = () => {
    const [todos, setTodos] = useState([])
    console.log('todos');

    useEffect(() => {
        todoService.getAll().then(({data}) => setTodos(data))
    }, []);
    console.log('todos', todos);
    return (
        <div>
            {todos.map(todo => <Todo key={todo.id} todo={todo} /> )}
        </div>
    );
};

export default Todos;