import React from 'react';
import { TodoType } from 'components/Todos/_types';
import { TodoEditingControls, TodoName, TodoRemovedControls, TodoToEditControls } from './_sub';
import s from './Todo.module.scss';
import { TodoRow } from 'components/Todos/_shared';

export interface TodoProps {
  todo: TodoType;
}

export const Todo: React.FC<TodoProps> = ({ todo }) => {
  const [editingName, setEditingName] = React.useState<string>();

  const onEdit = (e: React.ChangeEvent<HTMLInputElement>) => setEditingName(e.target.value);
  const resetEditingName = () => setEditingName(undefined);
  const startEditingName = () => setEditingName(todo.name);

  return (
    <TodoRow>
      {editingName !== undefined ? (
        <input className={s.input} value={editingName} onChange={onEdit} />
      ) : (
        <TodoName todo={todo} />
      )}

      <div className={s.buttons}>
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
      </div>
    </TodoRow>
  );
};
