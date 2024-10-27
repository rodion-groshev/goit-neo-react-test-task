import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectAllCars } from "../../redux/cars/selectors";
import { useEffect } from "react";
import { fetchFiltredCars } from "../../redux/cars/operations";

const DetailsCard = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const selectCar = useSelector(selectAllCars)
    console.log(selectCar)
    useEffect(() => {dispatch(fetchFiltredCars(id))})
 };

export default DetailsCard;