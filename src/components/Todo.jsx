import React from "react";


function Todo({ todo, removeTodo, completeTodo }) {
  return (
    <div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <div className="buttons">
        <button className="complete" onClick={() => completeTodo(todo.id)}>
          Completar
          </button>
        <button className="remove" onClick={() => removeTodo(todo.id)}>
          X
        </button>
      </div>
    </div>
  );
};
export default Todo;