import { useState } from "react";

function TodoForm({addTodo}) {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("")

    function handleSubmit(e) {
       e.preventDefault()// serve para a pagina não ser carregada da forma padrão ao ser clicada
       if(!value || !category) return;
       //adicionar todo
       //limpar campos
      console.log(value,category)
      addTodo(value,category)
        setValue("");
        setCategory("");

    }

    return (
        <div className="todoForm">
            <h2>Criar Tarefa</h2>
            <form onSubmit={handleSubmit}>
                <input value ={value} type="text" placeholder="Digite o titulo" onChange={(evento1) => setValue(evento1.target.value)}/>
                <select value={category} onChange={(evento2) => setCategory(evento2.target.value)}>
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <button type="submit">Criar Tarefa</button>
            </form>
        </div>
    );
}

export default TodoForm;