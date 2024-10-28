import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars, fetchFiltredCars } from "../../redux/cars/operations";
import CarsList from "../../components/CarsList/CarsList";
import Filter from "../../components/Filters/Filters";
import { selectFilters } from "../../redux/filters/selectors";
import css from "./CatalogPage.module.css";
import { selectTotalCar } from "../../redux/cars/selectors";
import { perPage, startPage } from "../../components/Constants/Constants";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const totalPages = useSelector(selectTotalCar);

  const reworkedFilters = (filters) => {
    const result = { ...filters, ...startPage, ...perPage };

    if (result.automatic) {
      result.transmission = "automatic";
      delete result.automatic;
    }

    const activeValues = Object.fromEntries(
      Object.entries(result).filter(
        ([_, value]) => value === true || value != ""
      )
    );

    return activeValues;
  };

  const [page, setPage] = useState(2);

  const isLoadMore =
    totalPages !== null && page - 1 < Math.ceil(totalPages / perPage.limit);

  const handleLoadMore = () => {
    setPage(page + 1);
    const reworked = reworkedFilters(filters);
    reworked.page = page;
    dispatch(fetchCars(reworked));
  };

  useEffect(() => {
    const reworked = reworkedFilters(filters);
    dispatch(fetchFiltredCars(reworked));
  }, [dispatch, filters]);

  return (
    <main className={css.container}>
      <section className={css.catalog}>
        <Filter />
        <CarsList handleLoadMore={handleLoadMore} isLoadMore={isLoadMore} />
      </section>
    </main>
  );
};

export default CatalogPage;
