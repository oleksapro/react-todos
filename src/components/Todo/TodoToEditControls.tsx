import React from 'react';
import { TodosUpdaterContext } from 'contexts';
import { Todo } from 'types';
import { ElementsGroup, Menu } from 'bits';
import { MenuItem } from 'bits/MenuItem';

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
        <MenuItem onClick={startEditingName}>Edit</MenuItem>
        <MenuItem onClick={onClickRemove}>Delete</MenuItem>
      </Menu>
    </ElementsGroup>
  );
};
