import React from 'react';

function Todo(){
    return (
        <div style={{ display: "flex"}}>
        <input type="checkbox" />
        <li style={{
            color: "white",
        }}
        >{Todo.task}</li>
        <button>X</button>
        </div>
    )
}

export default Todo;