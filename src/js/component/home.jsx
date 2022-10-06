import React, { useState } from "react";

function Home() {
  const [tarea, setTarea] = useState([]);
  const [listaDeTareas, setListadeTareas] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    // add the todo to the list
    setTarea([...tarea, newTodo]);

    // clear input box
    setListadeTareas("");
  };

  const deleteTodo = (id) => {
    // Filter out todo with the id
    const newList = tarea.filter((todo) => todo.id !== id);

    setTarea(newList);
  };

  return (
    <div className="container">
      <div className="card">
  <div className="card-body">
      <h1 className="card-title d-flex justify-content-center display-1 text-black-50">todos</h1>
      <input
        type="text"
        className="form-control"
        id="exampleInputTarea"
        aria-describedby="emailHelp"
        onChange={(e) => setListadeTareas(e.target.value)}
        value={listaDeTareas}
      />
      <button className="mt-3 bg-info w-100" onClick={() => addTodo(listaDeTareas)}>Agregar a la lista</button>
      <div className="card mt-3">
      <ul className="list-group-flush">
        {tarea.map((todo) => (
          <li key={todo.id}>
            {todo.todo}
            <button className="bg-transparent border-0 btn-lg float-right" onClick={() => deleteTodo(todo.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </div>
    </div>
    </div>
    </div>
  );
}

export default Home;
