import React from 'react';
import { TodosUpdaterContext } from 'contexts';
import { Todo } from 'types';

export interface TodoToEditControlsProps {
  todo: Todo;
  startEditingName: () => void;
}

export const TodoToEditControls: React.FC<TodoToEditControlsProps> = ({
  todo,
  startEditingName,
}) => {
  const { removeTodo } = React.useContext(TodosUpdaterContext);
  const onClickRemove = () => removeTodo(todo);

  return (
    <>
      <button type="button" className="button-blue" onClick={startEditingName}>
        Edit
      </button>
      <button type="button" className="button-red" onClick={onClickRemove}>
        Remove
      </button>
    </>
  );
};
