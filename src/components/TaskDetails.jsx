import React  from 'react';
import Btn from "./Button"
import {useParams, useNavigate} from "react-router-dom";
import "./style/TaskDetails.css"

const TaskDetails = () => {

    const history = useNavigate();
    const handleBackClick = () => {
        history("/");
    };

    const params =  useParams();

    return ( 
        <React.Fragment>
            <div className="btn_back_container">
                <Btn fc_clique={handleBackClick}>
                    Voltar
                </Btn>
            </div>
            <div className='task_details_container'>
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, ratione neque. Delectus quo a saepe molestiae placeat! Temporibus error sapiente quasi dolore delectus autem, ea ex ducimus molestias totam maxime.</p>
            </div>
        </React.Fragment>
     );
}
 
export default TaskDetails;