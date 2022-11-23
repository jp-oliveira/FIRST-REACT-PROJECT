import React, { useState } from 'react';
import Btn from './Button';
import "./style/AddTask.css";

const AddTask = ( {addTask_atr}) => {

    const [inputData, setInputData] = useState("")

    const handleInputChange = (e) => {
        setInputData(e.target.value) //o componente vai ser renderizado a cada mudança do input
    }

    const handleAddTaskClick = () => {
        if (inputData === ""){
            alert("Você não informou o nome da tarefa.")
        }
        else{
            addTask_atr(inputData)
            setInputData("");  // limpa o input quando add task.
        }
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
                <Btn fc_clique={handleAddTaskClick}>Adicionar uma nova tarefa</Btn>
            </div>
        </div> 
    );
}
 
export default AddTask;

// no onchange do button, se colocar o nome da função seguido de (), ele também vai
// executar assim que a página for carregada. e não queremos isso.