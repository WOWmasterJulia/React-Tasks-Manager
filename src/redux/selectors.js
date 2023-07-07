// Импортируем хук
// import { useSelector } from "react-redux";

export const getTasks = state => state.tasks;

export const getStatusFilter = state => state.filters.status;

// const MyComponent = () => {
//   // Получаем необходимую часть состояния
//   const value = useSelector(state => state.some.value);
// };