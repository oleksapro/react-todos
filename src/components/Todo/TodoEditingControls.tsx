import React from 'react';
import { TodosUpdaterContext } from 'contexts';
import { Todo } from 'types';
import { SaveSolid } from 'assets/icons';
import { ElementsGroup } from 'bits';

interface TodoEditingControlsProps {
  editingName: string | undefined;
  resetEditingName: () => void;
  todo: Todo;
}

export const TodoEditingControls: React.FC<TodoEditingControlsProps> = ({
  todo,
  editingName,
  resetEditingName,
}) => {
  const { updateTodo } = React.useContext(TodosUpdaterContext);

  const onClickSave = () => {
    updateTodo({ ...todo, name: editingName! });
    resetEditingName();
  };

  const onClickCancel = () => resetEditingName();

  return (
    <ElementsGroup>
      <button className="button-green" disabled={!editingName} type="button" onClick={onClickSave}>
        <SaveSolid />
      </button>
      <button className="button-red" type="button" onClick={onClickCancel}>
        Cancel
      </button>
    </ElementsGroup>
  );
};
