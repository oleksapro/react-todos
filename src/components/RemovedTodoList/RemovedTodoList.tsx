import { AngleDownSolid, SkullCrossbonesSolid } from 'assets/icons';
import { ElementsGroup } from 'bits';
import { TodosContext, TodosUpdaterContext } from 'contexts';
import React from 'react';
import { Todo } from 'types';
import s from './RemovedTodoList.module.scss';

export const RemovedTodoList: React.FC = () => {
  const todos = React.useContext(TodosContext);
  const { removeCompletely } = React.useContext(TodosUpdaterContext);
  const [opened, setOpened] = React.useState(false);

  const removedTodos = todos.filter(({ deleted }) => deleted);

  const onClickToggle = () => setOpened((opened) => !opened);

  const onClickRemoveCompletely = (todo: Todo) => {
    if (window.confirm(`Do you remove ${todo.name}?`)) {
      removeCompletely(todo);
    }
  };

  return (
    <div className={s.self}>
      <ElementsGroup>
        <div>REMOVED TODOS:</div>
        <button type="button" className="button-blue" onClick={onClickToggle}>
          {opened ? <AngleDownSolid /> : <AngleDownSolid />}
        </button>
      </ElementsGroup>
      {opened && (
        <div>
          {removedTodos.map((todo) => (
            <div key={todo.id}>
              {todo.name}
              <button
                type="button"
                className="button-red"
                onClick={() => onClickRemoveCompletely(todo)}
              >
                <SkullCrossbonesSolid />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
