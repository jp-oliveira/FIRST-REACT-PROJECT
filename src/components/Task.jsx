import React from 'react';
import "./Task.css"

const Task = ({task_prop}) => {
    return ( 
        <div className='task-container'>{task_prop.title}</div> 
    );
}
 
export default Task;