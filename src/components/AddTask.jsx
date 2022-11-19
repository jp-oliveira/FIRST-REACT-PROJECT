import React, { useState } from 'react';
import Btn_add from './Button';
import "./AddTask.css";

const AddTask = ( {addTask_atr}) => {

    const [inputData, setInputData] = useState("")

    const handleInputChange = (e) => {
        setInputData(e.target.value) //o componente vai ser renderizado a cada mudança do input
    }

    const handleAddTaskClick = () => {
        addTask_atr(inputData)
    }

    return (
        <div className='add_task_container'>
            <input
                value={inputData} 
                onChange={handleInputChange} 
                className='add_task_input' 
                type="text"
            />
            <div className='add_task_button_container'>
                <Btn_add fc_clique={handleAddTaskClick}>Criança do btn aqui</Btn_add>
            </div>
        </div> 
    );
}
 
export default AddTask;

// no onchange do button, se colocar o nome da função seguido de (), ele também vai
// executar assim que a página for carregada. e não queremos isso.