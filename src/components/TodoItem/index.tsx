import React, { FC } from "react";

import { Todo, TextStatus, Text, Status, Delete } from "./index.styles";

type Props = {
  id: string;
  text: string;
  deleteTodo: (e: React.MouseEvent) => void;
  toggleStatus: (id: string) => void;
  done: boolean;
};

const TodoItem: FC<Props> = ({ id, text, deleteTodo, done, toggleStatus }) => {
  return (
    <Todo status={done} onClick={() => toggleStatus(id)}>
      <TextStatus>
        <Text>{text}</Text>
        <Status>{done === false ? "ongoing" : "done"}</Status>
      </TextStatus>
      <Delete onClick={e => deleteTodo(e)}>delete</Delete>
    </Todo>
  );
};

export default TodoItem;
