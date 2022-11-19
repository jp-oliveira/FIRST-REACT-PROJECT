import React from "react";
import {CgClose, CgInfo} from "react-icons/cg";
import "./Task.css";

const Task = ({task_un, task_click, remove_click}) => {

    return ( 
        <div className='task-container' style={task_un.completed ? {borderLeft: "6px solid chartreuse"} : {}}>
            
            <div onClick={() => task_click(task_un.id)} className='task_title'>
                {task_un.title}
            </div>
            
            <div className='buttons_container'>
                <button className='btn_see_details'>
                <CgInfo />
                </button>
                <button onClick={() => remove_click(task_un.id)} className='btn_remove_task'>
                <CgClose />
                </button>
            </div>
        </div> 
    );
}
 
export default Task;