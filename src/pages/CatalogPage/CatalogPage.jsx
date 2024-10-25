import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars, fetchFiltredCars } from "../../redux/cars/operations";
import CarsList from "../../components/CarsList/CarsList";
import Filter from "../../components/Filters/Filters";
import { selectFilters } from "../../redux/filters/selectors";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  const filters = useSelector(selectFilters);

  const reworkedFilters = (filters) => {
    const result = { ...filters };

    if (result.automatic) {
      result.transmission = "automatic";
      delete result.automatic;
    }
    console.log(result);
    return Object.fromEntries(
      Object.entries(result).filter(
        ([_, value]) => value === true || value != ""
      )
    );
  };

  useEffect(() => {
    dispatch(fetchFiltredCars(reworkedFilters(filters)));
  }, [dispatch, filters]);

  return (
    <main className={css.container}>
      <section className={css.catalog}>
        <Filter />
        <CarsList />
      </section>
    </main>
  );
};

export default CatalogPage;
