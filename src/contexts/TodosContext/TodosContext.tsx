import React from 'react';
import { ls } from 'services';
import { TodoType } from 'components/Todos/_types';
import { todosReducer, TodosReducer } from './todosReducer';
import { TodosControls } from './types';

export const TodosContext = React.createContext<TodoType[]>([]);

export const TodosUpdaterContext = React.createContext<TodosControls>({
  addTodo: () => {},
  removeTodo: () => {},
  updateTodo: () => {},
  doneTodo: () => {},
  restoreTodo: () => {},
  removeCompletely: () => {},
});

const initialTodos: TodoType[] = ls.get<TodoType[]>('todos') ?? [];

export const TodosContextProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = React.useReducer<TodosReducer, TodoType[]>(
    todosReducer,
    [],
    () => initialTodos
  );

  React.useEffect(() => {
    ls.set(todos);
  }, [todos]);

  const value = React.useMemo(
    () => ({
      addTodo: (todo: TodoType) => setTodos({ type: 'add', payload: todo }),
      removeTodo: (todo: TodoType) => setTodos({ type: 'remove', payload: todo }),
      updateTodo: (todo: TodoType) => setTodos({ type: 'update', payload: todo }),
      doneTodo: (todo: TodoType) => setTodos({ type: 'done', payload: todo }),
      restoreTodo: (todo: TodoType) => setTodos({ type: 'restore', payload: todo }),
      removeCompletely: (todo: TodoType) => setTodos({ type: 'remove-completely', payload: todo }),
    }),
    []
  );

  return (
    <TodosContext.Provider value={todos}>
      <TodosUpdaterContext.Provider value={value}>{children}</TodosUpdaterContext.Provider>
    </TodosContext.Provider>
  );
};
