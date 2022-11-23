import React, { useState, useEffect } from 'react';
import {v4 as uuidv4}      from "uuid";
import axios from "axios";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import "./App.css";

import Tasks_comp   from "./components/Tasks";
import AddTask      from './components/AddTask';
import Header       from './components/Header';
import TaskDetails  from './components/TaskDetails';

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

  // explanations about useEffect in my types archive.
  useEffect(() => {
      const fechTasks = async () => {
        const {data: response} = await axios.get("https://jsonplaceholder.cypress.io/todos?_limit=10")
        setTasks(response);
      };
      fechTasks();
    }, []
  )

  const handleTaskClick = (taskId) => {
    const newTasks = tasks_var.map((cada_task) =>{
      if (cada_task.id === taskId){
        return {...cada_task, completed: ! cada_task.completed}
      }
      else{
        return cada_task;
      };
    });
    setTasks(newTasks);
  }

  const handleRemoveClick = (taskId) => {
    const newTasks = tasks_var.filter(function(obj) {
      return obj.id !== taskId
    })
    //também possível fazer com método splice. pesquisar
    setTasks(newTasks);
  }

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [...tasks_var, {  //dica abaixo
      title: taskTitle,
      id: uuidv4(), //valor aleatório
      completed: false,
    }]; // equivalente ao push

    setTasks(newTasks);
  }

  return (
    <Router>
      <div id="my_div" className="container">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <AddTask addTask_atr={handleTaskAddition} />
                <Tasks_comp
                  task_rmv_click={handleRemoveClick}
                  tasks_atr={tasks_var}
                  task_arg_click={handleTaskClick}
                />
              </React.Fragment>
            }
          />
          <Route 
            path="/:taskTitle"
            element={
              <React.Fragment>
                <TaskDetails/>
              </React.Fragment>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

//ATENÇÃO: TASKS_ATR AÍ NA VERDADE É UMA PROPS, TIPO UMA PROPRIEDADE DO COMPONENTE TASKS_COMP;
// operador ... = spread operator. util para fazer copia dos elementos de um vetor sem copiar
// o próprio vetor. se quer dizer todos os elementos de um vetor.
//spread operador em handletaskclick= primeiro argumento é ... cada_task, depois, completed. ou seja: NÃO CRIA UM NOVO OBJETO E ADICIONA A UM JA EXISTENTE.
// Ao contrário do spread em handletaskaddition. la o segundo argumento é um objeto novo.