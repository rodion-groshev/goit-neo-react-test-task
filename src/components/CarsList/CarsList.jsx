import { selectAllCars } from "../../redux/cars/selectors";
import { useDispatch, useSelector } from "react-redux";
import { deleteFavorite, setFavorites } from "../../redux/favorites/slice";
import { selectFavorites } from "../../redux/favorites/selectors";
import CarItem from "../CarItem/CarItem";
import css from "./CarList.module.css";

const CarsList = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectAllCars);
  const favoritesCars = useSelector(selectFavorites);

  const handleClick = (id) => {
    if (favoritesCars.includes(id)) {
      dispatch(deleteFavorite(id));
    } else {
      dispatch(setFavorites(id));
    }
  };

  return (
    <ul className={css.carsList}>
      {cars.map((car) => (
        <li key={car.id}>
          <CarItem
            props={car}
            handleClick={handleClick}
            favoritesCars={favoritesCars}
          />
        </li>
      ))}
    </ul>
  );
};

export default CarsList;
