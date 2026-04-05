import "./TodoInput.css";

function TodoInput({ input, setInput, addTask }) {
  function handleSubmit(e) {
    e.preventDefault();
    addTask();
  }

  return (
    <form className="todo-input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TodoInput;
