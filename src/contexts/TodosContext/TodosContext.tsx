import React from 'react';
import { ls } from 'services';
import { Todo } from 'types';
import { todosReducer, TodosReducer } from './todosReducer';
import { TodosControls } from './types';

export const TodosContext = React.createContext<Todo[]>([]);

export const TodosUpdaterContext = React.createContext<TodosControls>({
  addTodo: () => {},
  removeTodo: () => {},
  updateTodo: () => {},
  doneTodo: () => {},
  restoreTodo: () => {},
  removeCompletely: () => {},
});

const initialTodos: Todo[] = ls.get<Todo[]>('todos') ?? [];

export const TodosContextProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = React.useReducer<TodosReducer, Todo[]>(
    todosReducer,
    [],
    () => initialTodos
  );

  React.useEffect(() => {
    ls.set(todos);
  }, [todos]);

  const value = React.useMemo(
    () => ({
      addTodo: (todo: Todo) => setTodos({ type: 'add', payload: todo }),
      removeTodo: (todo: Todo) => setTodos({ type: 'remove', payload: todo }),
      updateTodo: (todo: Todo) => setTodos({ type: 'update', payload: todo }),
      doneTodo: (todo: Todo) => setTodos({ type: 'done', payload: todo }),
      restoreTodo: (todo: Todo) => setTodos({ type: 'restore', payload: todo }),
      removeCompletely: (todo: Todo) => setTodos({ type: 'remove-completely', payload: todo }),
    }),
    []
  );

  return (
    <TodosContext.Provider value={todos}>
      <TodosUpdaterContext.Provider value={value}>{children}</TodosUpdaterContext.Provider>
    </TodosContext.Provider>
  );
};
