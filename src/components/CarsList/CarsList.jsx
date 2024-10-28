import { selectAllCars, selectIsLoading } from "../../redux/cars/selectors";
import { useDispatch, useSelector } from "react-redux";
import { deleteFavorite, setFavorites } from "../../redux/favorites/slice";
import { selectFavorites } from "../../redux/favorites/selectors";
import CarItem from "../CarItem/CarItem";
import css from "./CarList.module.css";
import Loader from "../../components/Loader/Loader";

const CarsList = ({ handleLoadMore, isLoadMore }) => {
  const dispatch = useDispatch();
  const cars = useSelector(selectAllCars);
  const favoritesCars = useSelector(selectFavorites);
  const isLoading = useSelector(selectIsLoading);

  const handleClick = (id) => {
    if (favoritesCars.includes(id)) {
      dispatch(deleteFavorite(id));
    } else {
      dispatch(setFavorites(id));
    }
  };

  return (
    <div className={css.carsWrapper}>
      <ul className={css.carsList}>
        {cars &&
          cars.map((car) => (
            <li key={car.id}>
              <CarItem
                props={car}
                handleClick={handleClick}
                favoritesCars={favoritesCars}
              />
            </li>
          ))}
      </ul>
       
      {isLoading && <Loader />}
      {isLoadMore && (
        <button
          type="button"
          className={css.loadMoreBtn}
          onClick={handleLoadMore}
        >
          Load more
        </button>
      )}
    </div>
  );
};

export default CarsList;
