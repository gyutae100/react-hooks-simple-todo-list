import React, { useState, useRef, useCallback } from "react";
import "./App.css";
import TodoTemplate from "./components/TodoTemplate";
import TodoItemInsert from "./components/TodoItemInsert";
import TodoItemListTable from "./components/TodoItemListTable";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, content: "콘텐츠1", checked: false },
    { id: 2, content: "콘텐츠2", checked: false },
    { id: 3, content: "콘텐츠3", checked: false }
  ]);

  const nextId = useRef(4);

  const onInsertTodoItem = useCallback(
    content => {
      const todo = {
        id: nextId.current,
        content,
        checked: false
      };

      setTodos(
        todos.concat({
          ...todo
        })
      );
      nextId.current += 1;
    },
    [todos]
  );

  const onToggleTodoItemState = useCallback(
    id => {
      setTodos(
        todos.map(element => {
          if (element.id == id) {
            element.checked = !element.checked;
          }
          return element;
        })
      );
    },
    [todos]
  );

  const onDeleteTodoItem = useCallback(id => {
    setTodos(
      todos.filter(element => {
        if (id !== element.id) {
          return true;
        } else {
          return false;
        }
      })
    );
  });

  const onModifyTodoItemContent = useCallback((targetId, nextContent) => {
    setTodos(
      todos.map(element => {
        if (element.id == targetId) {
          element.content = nextContent;
        }
        return element;
      })
    );
  });

  return (
    <TodoTemplate>
      <TodoItemInsert onInsertTodoItem={onInsertTodoItem} />
      <TodoItemListTable
        todos={todos}
        onToggleTodoItemState={onToggleTodoItemState}
        onDeleteTodoItem={onDeleteTodoItem}
        onModifyTodoItemContent={onModifyTodoItemContent}
      />
    </TodoTemplate>
  );
}

export default App;
