import React, { useState, useCallback } from "react";
import uuid from "uuid";

import TodoItem from "../TodoItem";
import {
  Filter,
  MainWrapper,
  InputAndButton,
  Input,
  Add,
  Filters
} from "./index.style";
import "../style.css";

const todoItems = [
  {
    text: "Item 1",
    id: uuid()
  },
  {
    text: "Item 2",
    id: uuid()
  },
  {
    text: "Item 3",
    id: uuid()
  }
];

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(
    todoItems.map(item => ({
      ...item,
      done: false
    }))
  );
  const [filter, setFilter] = useState("all");

  const deleteItem = useCallback(
    (e: React.MouseEvent, id: string) => {
      e.stopPropagation();
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos]
  );

  const addTodo = useCallback(() => {
    setTodos([
      ...todos,
      {
        text: input,
        id: uuid(),
        done: false
      }
    ]);
  }, [input, todos]);

  const toggleTodoStatus = useCallback(
    (id: string) => {
      let currentTodo = todos.filter(todo => todo.id === id)[0];
      let currentTodoIndex = todos.indexOf(currentTodo);
      setTodos([
        ...todos.slice(0, currentTodoIndex),
        { ...currentTodo, done: !currentTodo.done },
        ...todos.slice(currentTodoIndex + 1)
      ]);
    },
    [todos]
  );

  const renderList = () => {
    return todos
      .filter(item => {
        switch (filter) {
          case "all":
            return true;
          case "done":
            return item.done === true;
          case "ongoing":
            return item.done === false;
          default:
            break;
        }
      })
      .map(({ id, text, done }) => (
        <TodoItem
          deleteTodo={e => deleteItem(e, id)}
          toggleStatus={id => toggleTodoStatus(id)}
          key={id}
          id={id}
          text={text}
          done={done}
        />
      ));
  };

  return (
    <MainWrapper>
      <InputAndButton>
        <Input value={input} onChange={e => setInput(e.target.value)} />
        <Add onClick={() => addTodo()}>Add</Add>
      </InputAndButton>
      <Filters>
        <Filter active={filter === "all"} onClick={() => setFilter("all")}>
          All
        </Filter>
        <Filter
          active={filter === "ongoing"}
          onClick={() => setFilter("ongoing")}
        >
          Ongoing
        </Filter>
        <Filter active={filter === "done"} onClick={() => setFilter("done")}>
          Done
        </Filter>
      </Filters>
      {renderList()}
    </MainWrapper>
  );
};

export default App;
