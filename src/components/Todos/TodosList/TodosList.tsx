import React from 'react';
import { Todo } from './_sub';
import s from './TodosList.module.scss';
import { TodosContext } from 'contexts';
import { sortTodos } from '../_utils';

export interface TodosListProps {
  title?: string;
}

export const TodosList: React.FC<TodosListProps> = ({ title }) => {
  const todos = React.useContext(TodosContext);
  const filteredTodos = sortTodos(todos).filter(({ deleted }) => !deleted);

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
