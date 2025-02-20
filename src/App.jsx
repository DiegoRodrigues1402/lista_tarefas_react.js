import { useState } from 'react';
import "./App.css"
import Todo from './components/Todo'
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';



function App() {
  const [todos, setTodos] = useState(
    [
      {
        id: 1,
        text: "Criar funcionalidades x no sistema",
        category: "Trabalho",
        isCompleted: false
      },
      {
        id: 2,
        text: "Ir para a academia",
        category: "Pessoal",
        isCompleted: false
      },
      {
        id: 3,
        text: "Estudar React",
        category: "Estudos",
        isCompleted: false
      }
    ]
  )

  //useState para pesquisa
  const [search, setSearch] = useState("");

  //useState para ordem alfabetica
  const [filter, setFilter] = useState("All")
  const [sort, setSort] = useState("Asc")

  //função adicionar à lista
  function addTodo(text, category) {
    const newTodo = [...todos,
    {
      id: Math.floor(Math.random() * 100000),
      text,
      category,
      isCompleted: false

    }]
    setTodos(newTodo);
  }

  //Função para remover da lista
  function removeTodo(id) {
    const newTodos = [...todos];
    const filterTodos = newTodos.filter((t) =>
      t.id !== id ? t : null
    );
    setTodos(filterTodos)
  }


  //Função completar tarefa
  function completeTodo(id) {
    const newTodos = [...todos];
    newTodos.map((to) => to.id === id ? (to.isCompleted = !to.isCompleted) : to
    );
    setTodos(newTodos)
  }

  return (
    <div className="app">
      <h1>Lista de tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="todoList">
        {todos
          .filter((todo) =>
            filter === "All"
              ? true
              : filter === "Completed"
                ? todo.isCompleted
                : !todo.isCompleted)
          .filter((todo) =>
            todo.text.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
          .sort((a, b) =>
            sort === "Asc"
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text))
          .map((todo) => (
            <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
          ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  )
}

export default App
