import { Button } from "components/Button/Button";
import css from "./StatusFilter.module.css";

// // Импортируем хук
// import { useSelector } from "react-redux";
// // Импортируем объект значений фильтра
// import { statusFilters } from "../../redux/constants";
import { getStatusFilter } from "../../redux/selectors";

// // export const StatusFilter = () => {
// //   return (
// //     <div className={css.wrapper}>
// //       <Button>All</Button>
// //       <Button>Active</Button>
// //       <Button>Completed</Button>
// //     </div>
// //   );
// // };
// export const StatusFilter = () => {
// //   Получаем значение фильтра из состояния Redux
// //   const filter = useSelector(state => state.filters.status);
//     const filter = useSelector(getStatusFilter);
//   return (
//     <div className={css.wrapper}>
//       <Button selected={filter === statusFilters.all}>All</Button>
//       <Button selected={filter === statusFilters.active}>Active</Button>
//       <Button selected={filter === statusFilters.completed}>Completed</Button>
//     </div>
//   );
// };

// Импортируем хук
import { useSelector, useDispatch } from "react-redux";
// Импортируем генератор экшена
import { setStatusFilter } from "../../redux/actions";
// Импортируем объект значений фильтра
import { statusFilters } from "../../redux/constants";

export const StatusFilter = () => {
  // Получаем ссылку на функцию отправки экшенов
  const dispatch = useDispatch();

//   const filter = useSelector(state => state.statusFilter);
 const filter = useSelector(getStatusFilter);
  // Вызываем генератор экшена и передаём значение фильтра
  // Отправляем результат - экшен изменения фильтра
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};