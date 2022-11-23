import React from "react";
import {CgClose, CgInfo} from "react-icons/cg";
import "./style/Task.css";
import {useNavigate} from "react-router-dom";

const Task = ({task_un, task_click, remove_click}) => {

    const history = useNavigate();
    const handleTaskDetailsClick = () => {
        history(`/${task_un.title}`);
    };

    //Para voltar na página, você pode colocar (caso ainda esteja usando tipo const history = useNavigate(), você pode 
    //escrever history(-1) para voltar a página. Mas recomendo que mude esse history para navigate)
    
    return ( 
        <div className='task-container' style={task_un.completed ? {borderLeft: "6px solid chartreuse"} : {}}>
            
            <div onClick={() => task_click(task_un.id)} className='task_title'>
                {task_un.title}
            </div>
            
            <div className='buttons_container'>
                <button onClick={handleTaskDetailsClick} className='btn_see_details'>
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