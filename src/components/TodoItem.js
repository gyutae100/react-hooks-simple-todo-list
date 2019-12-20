import React, { useState } from "react";

const TodoItem = ({
  todo,
  onToggleTodoItemState,
  onDeleteTodoItem,
  onModifyTodoItemContent
}) => {
  const [isModifyContentMode, setModifyContentMode] = useState(false);
  const [nextContent, setNextConent] = useState(todo.content);

  const handleOnToggleTodoItemState = id => {
    onToggleTodoItemState(id);
  };

  const handleOnDeleteTodoItem = id => {
    onDeleteTodoItem(id);
  };

  const handleOnModifyTodoItemContent = () => {
    setModifyContentMode(!isModifyContentMode);
    onModifyTodoItemContent(todo.id, nextContent);
  };

  return (
    <tr>
      <td>{todo.id}</td>
      {!todo.checked ? (
        <td>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {!isModifyContentMode ? (
              nextContent
            ) : (
              <input
                value={nextContent}
                onChange={e => {
                  setNextConent(e.target.value);
                }}
              ></input>
            )}
            <button onClick={() => handleOnToggleTodoItemState(todo.id)}>
              완료
            </button>
            <button onClick={() => handleOnDeleteTodoItem(todo.id)}>
              삭제
            </button>

            {isModifyContentMode ? (
              <button onClick={() => handleOnModifyTodoItemContent()}>
                수정완료
              </button>
            ) : (
              <button
                onClick={() => setModifyContentMode(!isModifyContentMode)}
              >
                수정
              </button>
            )}
          </div>
        </td>
      ) : (
        <td>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ textDecoration: "line-through" }}>
              {!isModifyContentMode ? (
                nextContent
              ) : (
                <input
                  value={nextContent}
                  onChange={e => {
                    setNextConent(e.target.value);
                  }}
                ></input>
              )}
            </div>
            <button
              style={{ textDecoration: "none" }}
              onClick={() => handleOnToggleTodoItemState(todo.id)}
            >
              완료 취소
            </button>
            <button onClick={() => handleOnDeleteTodoItem(todo.id)}>
              삭제
            </button>
            {isModifyContentMode ? (
              <button onClick={() => handleOnModifyTodoItemContent()}>
                수정완료
              </button>
            ) : (
              <button
                onClick={() => setModifyContentMode(!isModifyContentMode)}
              >
                수정
              </button>
            )}
          </div>
        </td>
      )}
    </tr>
  );
};

export default TodoItem;
