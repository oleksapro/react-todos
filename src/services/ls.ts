const createLs = () => {
  return {
    get: <T>(key: 'todos'): T | null => {
      return JSON.parse(window.localStorage.getItem(key) ?? 'null');
    },
    set: <T extends any>(value: T) => {
      window.localStorage.setItem('todos', JSON.stringify(value));
    },
  };
};

export const ls = createLs();
