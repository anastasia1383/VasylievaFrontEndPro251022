import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodos } from '../redux/reducer';

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

const Todos = (props) => {
  console.log('props', props);

  const [toDo, setToDo] = useState();

  const addTask = () => {
    let num = toDo.length + 1;
    if (toDo === '') {
      alert('Input is Empty');
    } else {
      props.addTodo({
        id: num,
        item: toDo,
        status: false,
      });
      setToDo();
    }
  };

  const handleChange = (e) => {
    setToDo(e.target.value);
  };

  return (
    <>
      <div className="task-input__container">
        <input
          type="text"
          placeholder="Enter your task here"
          value={toDo}
          onChange={(e) => handleChange(e)}
        />
        <button onClick={() => addTask()}>Add Task</button>
      </div>

      <ul>
        {props.todos.length > 0 &&
          props.todos.map((item) => {
            return <li key={item.id}>{item.item}</li>;
          })}
      </ul>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
