import { TodoType } from 'components/Todos/_types';

export type ActionType = 'add' | 'remove' | 'update' | 'done' | 'restore' | 'remove-completely';

export interface Action {
  type: ActionType;
  payload: TodoType;
}

export type ChangeTodo = (todo: TodoType) => void;

export interface TodosControls {
  addTodo: ChangeTodo;
  removeTodo: ChangeTodo;
  updateTodo: ChangeTodo;
  doneTodo: ChangeTodo;
  restoreTodo: ChangeTodo;
  removeCompletely: ChangeTodo;
}
