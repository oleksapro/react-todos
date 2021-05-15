import React from 'react';
import { TodosContextProvider } from 'contexts';
import { TodoCreate } from '../TodoCreate';
import { TodosList } from '../TodosList';
import s from './Todos.module.scss';
import { TodosRemovedList } from '../TodosRemovedList';

export const Todos: React.FC = () => {
  return (
    <TodosContextProvider>
      <div className={s.self}>
        <TodoCreate />
        <TodosList />
        <TodosRemovedList />
      </div>
    </TodosContextProvider>
  );
};
