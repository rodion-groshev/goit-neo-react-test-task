import { Suspense, useEffect } from "react";
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  selectCar,
  selectIsError,
  selectIsLoading,
} from "../../redux/cars/selectors";
import { fetchCarByID } from "../../redux/cars/operations";
import DetailsCard from "../../components/DetailsCard/DetailsCard";
import css from "./DetailsPage.module.css";
import clsx from "clsx";
import "react-datepicker/dist/react-datepicker.css";
import DetailsForm from "../../components/DetailsForm/DetailsForm";
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";
import { Toaster } from "react-hot-toast";

const DetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const carByID = useSelector(selectCar);
  const navigate = useNavigate();
  const location = useLocation();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  const buildLinkClass = ({ isActive }) => {
    return clsx(css.navLink, isActive && css.active);
  };

  useEffect(() => {
    if (
      !location.pathname.endsWith("features") &&
      !location.pathname.endsWith("reviews")
    ) {
      navigate("features");
    }
    dispatch(fetchCarByID(id));
  }, [dispatch, id, navigate, location.pathname]);
  return (
    <main className={css.container}>
      <section className={css.details}>
        <Toaster />
        {isError && <Error>{isError}</Error>}
        {isLoading && <Loader />}
        {carByID && <DetailsCard props={carByID} />}
        {carByID && (
          <nav className={css.navBar}>
            <div className={css.navWrapper}>
              <NavLink className={buildLinkClass} to={"features"}>
                Features
              </NavLink>
              <NavLink className={buildLinkClass} to={"reviews"}>
                Reviews
              </NavLink>
            </div>
          </nav>
        )}
        {carByID && (
          <div className={css.innerWrapper}>
            <Suspense fallback="">
              <Outlet />
            </Suspense>
            <DetailsForm />
          </div>
        )}
      </section>
    </main>
  );
};

export default DetailsPage;
