import { useSelector } from "react-redux";
import { selectAllCars } from "../../redux/cars/selectors";
import CarItem from "../CarItem/CarItem";
import css from "./CarList.module.css";

const CarsList = () => {
  const cars = useSelector(selectAllCars);


  return (
    <ul className={css.carsList}>
      {cars.map((car) => (
        <li key={car.id}>
          <CarItem props={car} />
        </li>
      ))}
    </ul>
  );
};

export default CarsList;
