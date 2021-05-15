import React from 'react';
import { TodosUpdaterContext } from 'contexts';
import { Todo } from 'types';
import { ElementsGroup, Menu } from 'bits';

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
      <Menu>
        <div onClick={startEditingName}>Edit</div>
        <div onClick={onClickRemove}>Delete</div>
      </Menu>
    </ElementsGroup>
  );
};
