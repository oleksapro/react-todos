import React from 'react';
import { TodosUpdaterContext } from 'contexts';
import { Todo } from 'types';
import s from './TodoName.module.scss';

export interface TodoNameProps {
  todo: Todo;
}

export const TodoName: React.FC<TodoNameProps> = ({ todo }) => {
  const { doneTodo } = React.useContext(TodosUpdaterContext);

  const onClick = () => doneTodo(todo);

  return (
    <span className={`${s.self} ${todo.done ? s.done : ''}`} onClick={onClick}>
      {todo.name}
    </span>
  );
};
