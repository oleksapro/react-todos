import React from 'react';
import { TodosContext } from 'contexts';
import { Todo } from '../Todo';
import s from './TodoList.module.scss';

export interface TodoListProps {
  title?: string;
}

export const TodoList: React.FC<TodoListProps> = ({ title }) => {
  const todos = React.useContext(TodosContext);

  const filteredTodos = [...todos]
    .sort((a, b) => {
      if (a.deleted && !b.deleted) return 1;
      if (!a.deleted && b.deleted) return -1;

      if (a.done && !b.done) return 1;
      if (!a.done && b.done) return -1;

      if (new Date(a.createdDate).getTime() < new Date(b.createdDate).getTime()) return 1;
      if (new Date(a.createdDate).getTime() > new Date(b.createdDate).getTime()) return -1;

      return 0;
    })
    .filter(({ deleted }) => !deleted);

  return (
    <div className={s.self}>
      {title && <div>{title}</div>}
      <div>
        {filteredTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};
