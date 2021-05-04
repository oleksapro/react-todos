import React from 'react';
import { TodosContext } from 'contexts';
import { Todo } from '../Todo';
import s from './TodoList.module.scss';

export interface TodoListProps {}

export const TodoList: React.FC<TodoListProps> = () => {
  const todos = React.useContext(TodosContext);

  return (
    <div className={s.self}>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
