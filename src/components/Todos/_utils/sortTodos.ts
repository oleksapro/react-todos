import { TodoType } from '../_types';

export const sortTodos = (todos: TodoType[]) =>
  [...todos].sort((a, b) => {
    if (a.deleted && !b.deleted) return 1;
    if (!a.deleted && b.deleted) return -1;

    if (a.done && !b.done) return 1;
    if (!a.done && b.done) return -1;

    if (new Date(a.createdDate).getTime() < new Date(b.createdDate).getTime()) return 1;
    if (new Date(a.createdDate).getTime() > new Date(b.createdDate).getTime()) return -1;

    return 0;
  });
