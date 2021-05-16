import React from 'react';
import { EllipsisVSolid } from 'assets/icons';
import s from './Menu.module.scss';
import { useOnClickOutside } from 'hooks';

export const Menu: React.FC = ({ children }) => {
  const [opened, setOpened] = React.useState(false);
  const onClick = () => setOpened(true);
  const ref = React.useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setOpened(false));

  return (
    <div className={s.self} ref={ref}>
      <button type="button" className="button button-blue" onClick={onClick}>
        <EllipsisVSolid />
      </button>
      {opened && (
        <div className={s.body}>
          <div>{children}</div>
        </div>
      )}
    </div>
  );
};
