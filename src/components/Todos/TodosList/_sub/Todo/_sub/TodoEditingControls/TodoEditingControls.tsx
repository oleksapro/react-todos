import React from 'react';
import { TodosUpdaterContext } from 'contexts';
import { TodoType } from 'components/Todos/_types';
import { SaveSolid, TimesSolid } from 'assets/icons';
import { ElementsGroup } from 'bits';

interface TodoEditingControlsProps {
  editingName: string | undefined;
  resetEditingName: () => void;
  todo: TodoType;
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
      <button
        className="button button-green"
        disabled={!editingName}
        type="button"
        onClick={onClickSave}
      >
        <SaveSolid />
      </button>
      <button className="button button-red" type="button" onClick={onClickCancel}>
        <TimesSolid />
      </button>
    </ElementsGroup>
  );
};
