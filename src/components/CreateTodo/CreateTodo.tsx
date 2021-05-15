import React from 'react';
import { cn, uniqid } from 'libs';
import { TodosUpdaterContext } from 'contexts';
import s from './CreateTodo.module.scss';
import { PlusSolid } from 'assets/icons';

export interface CreateTodoProps {}

export const CreateTodo: React.FC<CreateTodoProps> = () => {
  const [todoName, setTodoName] = React.useState('');
  const [opened, setOpened] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const { addTodo } = React.useContext(TodosUpdaterContext);

  React.useEffect(() => {
    inputRef.current?.focus();
  }, [opened]);

  const onClickToggle = () => {
    setOpened((opened) => {
      return !opened;
    });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setTodoName(e.target.value);

  const add = () => {
    addTodo({
      id: uniqid(),
      name: todoName,
      done: false,
      createdDate: new Date().toString(),
      deleted: false,
    });
    setTodoName('');
    setOpened(false);
  };

  const onClickAdd = () => add();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    add();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className={s.self}>
        <div className={cn(s.plus, { [s.opened]: opened })}>
          <PlusSolid onClick={onClickToggle} />
        </div>
        {opened && (
          <div>
            <input ref={inputRef} className={s.input} value={todoName} onChange={onChange} />
            <button
              className={cn(s.button, 'button', 'button-green-bg')}
              disabled={!todoName}
              type="button"
              onClick={onClickAdd}
            >
              Add
            </button>
          </div>
        )}
      </div>
    </form>
  );
};
