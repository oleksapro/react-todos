import React from 'react';
import { TodosUpdaterContext } from 'contexts';
import { Todo } from 'types';
import s from './TodoName.module.scss';
import { CheckSolid } from 'assets/icons';

export interface TodoNameProps {
  todo: Todo;
}

export const TodoName: React.FC<TodoNameProps> = ({ todo }) => {
  const { doneTodo } = React.useContext(TodosUpdaterContext);

  const onClick = () => doneTodo(todo);

  return (
    <div className={s.self} onClick={onClick}>
      {todo.done && (
        <span className={s.doneIcon}>
          <CheckSolid />
        </span>
      )}
      {todo.name}
    </div>
  );
};
