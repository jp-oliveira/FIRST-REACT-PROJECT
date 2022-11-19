import React, { useState } from 'react';
import Tasks_comp from "./components/Tasks"
import "./App.css";
import AddTask from './components/AddTask';

const App = () => {
  const [tasks_var, setTasks] = useState([
    {
      id: "1",
      title: "study",
      completed: false,
    },
    {
      id: "2",
      title: "read",
      completed: true,
    }
  ]);

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [...tasks_var, {  //dica abaixo
      title: taskTitle,
      id: Math.random(10), //por enquanto deixa random
      completed: false,
    }]; // equivalente ao push

    setTasks(newTasks);
  }

  return (
    <React.Fragment>
      <div id='my_div' className="container">
        <AddTask addTask_atr={handleTaskAddition}/>
        <Tasks_comp tasks_atr={tasks_var}/>
      </div>
    </React.Fragment>
  );
}

export default App;

//ATENÇÃO: TASKS_ATR AÍ NA VERDADE É UMA PROPS, TIPO UMA PROPRIEDADE DO COMPONENTE TASKS_COMP;

// operador ... = spread operator. util para fazer copia dos elementos de um vetor sem copiar
// o próprio vetor. se quer dizer todos os elementos de um vetor.