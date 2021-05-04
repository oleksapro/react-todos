import { Todo } from 'types';

export type ActionType = 'add' | 'remove' | 'update' | 'done' | 'restore';

export interface Action {
  type: ActionType;
  payload: Todo;
}

export type ChangeTodo = (todo: Todo) => void;

export interface TodosControls {
  addTodo: ChangeTodo;
  removeTodo: ChangeTodo;
  updateTodo: ChangeTodo;
  doneTodo: ChangeTodo;
  restoreTodo: ChangeTodo;
}
