import React from 'react';
import { TodosContextProvider } from 'contexts';
import { CreateTodo } from '../CreateTodo';
import { TodoList } from '../TodoList';
import s from './Todos.module.scss';

export const Todos: React.FC = () => {
  return (
    <TodosContextProvider>
      <div className={s.self}>
        <CreateTodo />
        <TodoList />
      </div>
    </TodosContextProvider>
  );
};
