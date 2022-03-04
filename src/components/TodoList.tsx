import React from "react";
import { observer } from "mobx-react";
import Form from "./Form";
import { Instance } from "mobx-state-tree";
import Todo from "../models/Todo";
import { StyledItem } from "../style/todolist";

interface Props {
  todo: ITodo;
}
interface ITodo extends Instance<typeof Todo> {}

const TodoList = ({ todo }: Props) => {
  console.log(todo);

  return (
    <StyledItem>
      <h4 className="card-title">{todo.name}</h4>
      <div>{todo.details}</div>
      <div className="status">{todo.status()}</div>
      {/* {!todo.is_done && (
        <button className="btn btn-info mb-2" onClick={todo.markDone}>
          Done
        </button>
      )} */}
      <div>
        <input
          type="checkbox"
          checked={todo.is_done}
          onChange={todo.is_done ? todo.undoMark : todo.markDone}
        />
      </div>
    </StyledItem>
  );
};
export default observer(TodoList);
