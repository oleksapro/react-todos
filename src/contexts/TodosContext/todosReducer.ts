import { produce } from 'immer';
import { Todo } from 'types';
import { Action } from './types';

export type TodosReducer = (state: Todo[], action: Action) => Todo[];

export const todosReducer = produce<TodosReducer>((todos, action) => {
  switch (action.type) {
    case 'add':
      todos.push(action.payload);
      break;
    case 'remove': {
      const index = todos.findIndex((todo) => todo.id === action.payload.id);
      todos[index].deleted = true;
      break;
    }
    case 'update': {
      const index = todos.findIndex((todo) => todo.id === action.payload.id);
      if (index !== -1) todos[index].name = action.payload.name;
      break;
    }
    case 'done': {
      const index = todos.findIndex((todo) => todo.id === action.payload.id);
      if (index !== -1) todos[index].done = !todos[index].done;
      break;
    }
    case 'restore': {
      const index = todos.findIndex((todo) => todo.id === action.payload.id);
      todos[index].deleted = false;
      break;
    }
  }
});
