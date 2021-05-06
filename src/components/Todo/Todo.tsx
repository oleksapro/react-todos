import React from 'react';
import { Todo as TodoType } from 'types';
import { TodoEditingControls } from './TodoEditingControls';
import { TodoName } from './TodoName';
import { TodoRemovedControls } from './TodoRemovedControls';
import { TodoToEditControls } from './TodoToEditControls';
import s from './Todo.module.scss';

export interface TodoProps {
  todo: TodoType;
}

export const Todo: React.FC<TodoProps> = ({ todo }) => {
  const [editingName, setEditingName] = React.useState<string>();

  const onEdit = (e: React.ChangeEvent<HTMLInputElement>) => setEditingName(e.target.value);
  const resetEditingName = () => setEditingName(undefined);
  const startEditingName = () => setEditingName(todo.name);

  return (
    <div className={s.self}>
      {editingName !== undefined ? (
        <input className={s.input} value={editingName} onChange={onEdit} />
      ) : (
        <TodoName todo={todo} />
      )}

      <span>
        {!todo.deleted && editingName === undefined && (
          <TodoToEditControls todo={todo} startEditingName={startEditingName} />
        )}
        {!todo.deleted && editingName !== undefined && (
          <TodoEditingControls
            todo={todo}
            editingName={editingName}
            resetEditingName={resetEditingName}
          />
        )}
        {todo.deleted && <TodoRemovedControls todo={todo} />}
      </span>
    </div>
  );
};
