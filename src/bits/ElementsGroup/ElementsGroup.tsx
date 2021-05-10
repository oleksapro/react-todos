import React from 'react';
import s from './ElementsGroup.module.scss';

export const ElementsGroup: React.FC = ({ children }) => {
  return (
    <div className={s.self}>
      {React.Children.map(children, (child) => (
        <div className={s.child}>{child}</div>
      ))}
    </div>
  );
};
