import React from "react";
import './TodoCounter.css';

function TodoCounter({ completedTodos, totalTodos, loading }) {
  return (
    totalTodos === completedTodos && totalTodos > 0 ?
    (
      <h1 className="TodoCounter TodoCounter--completed">
        🎉 ¡Felicitaciones! Has completado todos tus TODOs 🏆
      </h1>
    ) : (
      <h1 className={`TodoCounter ${!!loading && "TodoCounter-loading"}`}>
        Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS
      </h1>
    )
  );
}

export { TodoCounter };