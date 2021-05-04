import React from 'react';
import { Todos } from 'components';
import s from './App.module.scss';

export const App: React.FC = () => {
  return (
    <div className={s.self}>
      <Todos />
    </div>
  );
};
