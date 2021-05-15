import { AngleDownSolid, SkullCrossbonesSolid, TrashRestoreSolid } from 'assets/icons';
import { ElementsGroup } from 'bits';
import { TodoRow } from 'components/Todos/_shared';
import { sortTodos } from '../_utils';
import { TodosContext, TodosUpdaterContext } from 'contexts';
import { cn } from 'libs';
import React from 'react';
import { TodoType } from 'components/Todos/_types';
import s from './TodosRemovedList.module.scss';

export const TodosRemovedList: React.FC = () => {
  const todos = React.useContext(TodosContext);
  const { removeCompletely, restoreTodo } = React.useContext(TodosUpdaterContext);
  const [opened, setOpened] = React.useState(false);

  const removedTodos = sortTodos(todos).filter(({ deleted }) => deleted);

  const onClickToggle = () => setOpened((opened) => !opened);

  const onClickRemoveCompletely = (todo: TodoType) => {
    if (window.confirm(`Do you remove ${todo.name}?`)) {
      removeCompletely(todo);
    }
  };

  const onClickRestore = (todo: TodoType) => {
    if (window.confirm(`Do you want restore ${todo.name}?`)) {
      restoreTodo(todo);
    }
  };

  return (
    <div className={s.self}>
      <div className={s.title}>
        <div className={s.titleText} onClick={onClickToggle}>
          <div>Trash bin:</div>
          <span className={cn(s.angleIcon, { [s.opened]: opened })}>
            <AngleDownSolid />
          </span>
        </div>
      </div>
      {opened && (
        <div className={s.todos}>
          {removedTodos.map((todo) => (
            <TodoRow key={todo.id}>
              <div className={s.name} title={todo.name}>
                {todo.name}
              </div>
              <ElementsGroup>
                <button
                  type="button"
                  className="button button-red"
                  onClick={() => onClickRemoveCompletely(todo)}
                >
                  <SkullCrossbonesSolid />
                </button>
                <button
                  type="button"
                  className="button button-blue"
                  onClick={() => onClickRestore(todo)}
                >
                  <TrashRestoreSolid />
                </button>
              </ElementsGroup>
            </TodoRow>
          ))}
        </div>
      )}
    </div>
  );
};
