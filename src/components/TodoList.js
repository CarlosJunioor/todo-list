import React from 'react';
import Todo from "./Todo";

function TodoList({ todos }){
    return(
        <>
        <ul>
            {todos.map(todo => (
                <Todo key={todo} todo={todo} />
            ))}


        </ul>

        
        </>

    )
}

export default TodoList;