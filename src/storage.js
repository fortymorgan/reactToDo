export const getItemsList = () => (window.localStorage.getItem('todo-list') ?
  JSON.parse(window.localStorage.getItem('todo-list')) : []);

export const toLocalStorage = (key, data) => {
  const jsonString = JSON.stringify(data);
  window.localStorage.setItem(key, jsonString);
};
