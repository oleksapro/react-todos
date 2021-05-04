import { Todo } from 'types';

export type ActionType = 'add' | 'remove' | 'update' | 'done';

export interface Action {
  type: ActionType;
  payload: Todo;
}

export type AddTodo = (todo: Todo) => void;

export type RemoveTodo = (todo: Todo) => void;

export type UpdateTodo = (todo: Todo) => void;

export type DoneTodo = (todo: Todo) => void;

export interface TodosControls {
  addTodo: AddTodo;
  removeTodo: RemoveTodo;
  updateTodo: UpdateTodo;
  doneTodo: DoneTodo;
}
