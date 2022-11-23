import React from "react";
import Task from "./Task";

const Tasks_comp = ( {tasks_atr, task_arg_click, task_rmv_click} ) => {

    return (
        <React.Fragment>
            {tasks_atr.map( 
                (cada_task) => (
                <Task
                    key={cada_task.id}
                    remove_click={task_rmv_click} 
                    task_click={task_arg_click} 
                    task_un={cada_task}/>
                )
            )}
        </React.Fragment>
    );
};

export default Tasks_comp;

//o argumento da função pode ser props e tbm posso ver no console.log props.