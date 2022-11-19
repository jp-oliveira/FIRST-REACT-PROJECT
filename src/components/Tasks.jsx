import React from "react";
import Task from "./Task";

const Tasks_comp = ( {tasks_atr} ) => {
    
    return (
        <React.Fragment>
            {tasks_atr.map( (task) => (
                <Task task_prop={task}/>
            ))}
        </React.Fragment>
    );
};

export default Tasks_comp;

// tentei no argumento fazer {props} mas nao consegui
//o argumento da função pode ser props e tbm posso ver no console.log props.