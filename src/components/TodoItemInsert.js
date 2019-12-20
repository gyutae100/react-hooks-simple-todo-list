import React, { useState, useCallback } from "react";

const TodoItemInsert = ({ onInsertTodoItem }) => {
  const [content, setContent] = useState("");

  const handleOnChange = useCallback(e => {
    setContent(e.target.value);
  }, []);

  const handleOnSubmit = useCallback(
    e => {
      onInsertTodoItem(content);
      e.preventDefault();
    },
    [content, onInsertTodoItem]
  );

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "row" }}
        onSubmit={handleOnSubmit}
      >
        <input onChange={handleOnChange}></input>
        <button type="submit" style={{ border: "1px solid black" }}>
          삽입
        </button>
      </form>
    </div>
  );
};

export default TodoItemInsert;
