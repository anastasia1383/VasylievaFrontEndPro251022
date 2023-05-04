import React, { useState } from 'react';
import { TrushSquare } from 'iconsax-react';
import './App.css';

function App() {
  const [toDo, setToDo] = useState([
    { id: 1, title: 'Task 1', status: true },
    { id: 2, title: 'Task 2', status: false },
  ]);

  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask('');
    }
  };

  const deleteTask = (id) => {
    let newTask = toDo.filter((task) => task.id !== id);
    setToDo(newTask);
  };

  const markDone = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newTask);
  };

  return (
    <div className="App">
      <h1>TODO List</h1>

      {toDo && toDo.length ? ('') : (<div className="placeholder"> No tasks...</div>)}

      {toDo &&
        toDo
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((task, index) => {
            return (
              <React.Fragment key={task.id}>
                <div
                  onClick={(e) => markDone(task.id)}
                  className={['task', task.status ? 'task--done' : ''].join(' ')}
                >
                  <div>
                    <span className="task__number">{index + 1}</span>
                    <span className="task__text">{task.title}</span>
                  </div>
                  <TrushSquare
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteTask(task.id);
                    }}
                    className="icon"
                    size="32"
                  />
                </div>
              </React.Fragment>
            );
          })}

      <div className="task-input__container">
        <input
          type="text"
          placeholder="Enter your task here"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
    </div>
  );
}

export default App;
