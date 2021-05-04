import { TodosUpdaterContext } from 'contexts';
import React from 'react';
import { Todo } from 'types';

interface TodoRemovedControlsProps {
  todo: Todo;
}

export const TodoRemovedControls: React.FC<TodoRemovedControlsProps> = ({ todo }) => {
  const { restoreTodo } = React.useContext(TodosUpdaterContext);
  const onClickRestore = () => restoreTodo(todo);

  return (
    <>
      <button className="button-blue" type="button" onClick={onClickRestore}>
        Restore
      </button>
    </>
  );
};
