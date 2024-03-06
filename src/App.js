import { useState } from "react"

export function App() {

  let [todoValue, updateNewTodo] = useState('test');


  let [todo, updateTodo] = useState([{
    id: 1,
    task: "learn react"
  },
  {
    id: 2,
    task: "learn angular"
  },])

  let nextId = 3;

  function addNewTodo() {
    if (todoValue === '') {
      alert("add some task");
    }
    else {
      let newTodos = [...todo, {
        id: nextId++,
        task: todoValue,
      }]
      updateTodo(newTodos);
      updateNewTodo('');
    }

  }
  function deleteTodo(delteId){
    let newArrayTodo = todo.filter((s1) => {
      return (s1.id != delteId)
    })
    updateTodo(newArrayTodo);
  }

  return (
    <div className="container">
      <div>
        <input className='form-control' type='text' onChange={(e) => {
          let task = e.target.value;
          updateNewTodo(task);
        }} />
        <button className="btn btn-primary" type="text" onClick={() => {
          addNewTodo()
        }} value={todoValue}>Add</button>
      </div>
      <ul className="list-group">
        {
          todo.map((todo) => {
            return (
              <li className="list-group-item">
                <button>✔</button>
                <p1>{todo.task}</p1>
                <button onClick={(todo) => {
                  deleteTodo(todo.id)
                }}>✖</button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}