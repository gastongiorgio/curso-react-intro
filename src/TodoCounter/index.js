import React from "react";
import './TodoCounter.css';

function TodoCounter({ completedTodos, totalTodos }) {
  return (
    totalTodos === completedTodos && totalTodos > 0 ?
    (
      <h1 className="TodoCounter TodoCounter--completed">
        🎉 ¡Felicitaciones! Has completado todos tus TODOs 🏆
      </h1>
    ) : (
      <h1 className="TodoCounter">
        Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS
      </h1>
    )
  );
}

export { TodoCounter };