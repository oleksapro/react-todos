import React from 'react';
import { Todo } from '../Todo';
import s from './TodoList.module.scss';
import { TodosContext } from 'contexts';
import { sortTodos } from 'components/utils';

export interface TodoListProps {
  title?: string;
}

export const TodoList: React.FC<TodoListProps> = ({ title }) => {
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
