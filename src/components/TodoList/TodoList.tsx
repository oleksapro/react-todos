import React from 'react';
import { TodosContext } from 'contexts';
import { Todo } from '../Todo';
import s from './TodoList.module.scss';

export interface TodoListProps {}

export const TodoList: React.FC<TodoListProps> = () => {
  const todos = React.useContext(TodosContext);

  return (
    <div className={s.self}>
      {[...todos]
        .sort((a, b) => {
          if (a.deleted && !b.deleted) return 1;
          if (!a.deleted && b.deleted) return -1;

          if (a.done && !b.done) return 1;
          if (!a.done && b.done) return -1;

          if (new Date(a.createdDate).getTime() < new Date(b.createdDate).getTime()) return 1;
          if (new Date(a.createdDate).getTime() > new Date(b.createdDate).getTime()) return -1;

          return 0;
        })
        .filter(({ deleted }) => !deleted)
        .map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
    </div>
  );
};
