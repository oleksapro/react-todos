import React from 'react';
import { cn, uniqid } from 'libs';
import { TodosUpdaterContext } from 'contexts';
import s from './CreateTodo.module.scss';

export interface CreateTodoProps {}

export const CreateTodo: React.FC<CreateTodoProps> = () => {
  const [todoName, setTodoName] = React.useState('');
  const { addTodo } = React.useContext(TodosUpdaterContext);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setTodoName(e.target.value);

  const add = () => {
    addTodo({ id: uniqid(), name: todoName, done: false });
    setTodoName('');
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    add();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className={s.self}>
        <label className={s.label}>Add todo:</label>
        <input value={todoName} onChange={onChange} />
        <button
          className={cn(s.add, 'button-green-bg')}
          disabled={!todoName}
          type="button"
          onClick={add}
        >
          Add
        </button>
      </div>
    </form>
  );
};
