import { useEffect, useRef, useState } from "react";

function ToDos() {
  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]);
  // ref를 위한 변수 선언
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    console.log(toDos);
  }, [toDos]);

  const onChange = (event) => {
    setTodo(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!/^ *$/.test(toDo)) setTodos((prev) => [...prev, toDo]);
    setTodo("");
  };

  return (
    <div>
      <h1>My ToDos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          placeholder="할 일을 입력하세요."
          value={toDo}
          ref={inputRef}
        ></input>
        <button>입력</button>
      </form>

      {toDos.length > 0 ? (
        <ul>
          {toDos.map((toDo, index) => (
            <li key={index}>{toDo}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default ToDos;
