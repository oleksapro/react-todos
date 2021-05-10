import React from 'react';
import { TodosUpdaterContext } from 'contexts';
import { Todo } from 'types';
import { PencilAltSolid, TrashSolid } from 'assets/icons';
import { ElementsGroup } from 'bits';

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
    <ElementsGroup>
      <button type="button" className="button-blue" onClick={startEditingName}>
        <PencilAltSolid />
      </button>
      <button type="button" className="button-red" onClick={onClickRemove}>
        <TrashSolid />
      </button>
    </ElementsGroup>
  );
};
