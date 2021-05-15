import React from 'react';
import s from './TodoRow.module.scss';

export const TodoRow: React.FC = ({ children }) => {
  return <div className={s.self}>{children}</div>;
};
