import React from 'react';
import s from './MenuItem.module.scss';

interface MenuItemProps {
  onClick?: () => void;
}

export const MenuItem: React.FC<MenuItemProps> = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className={s.self}>
      {children}
    </div>
  );
};
