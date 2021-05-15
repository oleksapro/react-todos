import { TodosUpdaterContext } from 'contexts';
import React from 'react';
import { TodoType } from '../../../../../_types';

interface TodoRemovedControlsProps {
  todo: TodoType;
}

export const TodoRemovedControls: React.FC<TodoRemovedControlsProps> = ({ todo }) => {
  const { restoreTodo } = React.useContext(TodosUpdaterContext);
  const onClickRestore = () => restoreTodo(todo);

  return (
    <>
      <button className="button button-blue" type="button" onClick={onClickRestore}>
        Restore
      </button>
    </>
  );
};
