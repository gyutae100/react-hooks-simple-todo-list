import React from "react";
import TodoItem from "./TodoItem";

const TodoItemListTable = ({
  todos,
  onToggleTodoItemState,
  onDeleteTodoItem,
  onModifyTodoItemContent
}) => {
  const todosTable = todos.map(todo => {
    return (
      <TodoItem
        todo={todo}
        onToggleTodoItemState={onToggleTodoItemState}
        onDeleteTodoItem={onDeleteTodoItem}
        onModifyTodoItemContent={onModifyTodoItemContent}
      />
    );
  });

  return (
    <table>
      <tr>
        <th>id</th>
        <th>content</th>
      </tr>
      {todosTable}
    </table>
  );
};

export default TodoItemListTable;
