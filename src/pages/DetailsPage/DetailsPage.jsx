import { Suspense, useEffect, useState } from "react";
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectCar } from "../../redux/cars/selectors";
import { fetchCarByID } from "../../redux/cars/operations";
import DetailsCard from "../../components/DetailsCard/DetailsCard";
import css from "./DetailsPage.module.css";
import clsx from "clsx";
import { Field, Form, Formik } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const carByID = useSelector(selectCar);
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.navLink, isActive && css.active);
  };

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (values) => {
    console.log({ ...values, date: startDate });
  };
  const [startDate, setStartDate] = useState(new Date());
  const initialValues = {
    name: "",
    email: "",
    comment: "",
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
        <div className={css.innerWrapper}>
          <Suspense fallback="">
            <Outlet />
          </Suspense>

          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className={css.bookForm}>
              <h3>Book your campervan now</h3>
              <p className={css.bookText}>
                Stay connected! We are always ready to help you.
              </p>
              <Field
                type="name"
                className={css.bookInputs}
                placeholder="Name*"
                name="name"
              />
              <Field
                type="email"
                className={css.bookInputs}
                placeholder="Email*"
                name="email"
              />
              <DatePicker
                selected={startDate}
                className={css.bookInputs}
                placeholderText="Booking date*"
                onSelect={(date) => setStartDate(date)}
              />

              <Field
                type="text"
                className={css.bookInputsComment}
                placeholder="Comment"
                name="comment"
              />
              <button className={css.bookBtn} type="submit">
                Send
              </button>
            </Form>
          </Formik>
        </div>
      </section>
    </main>
  );
};

export default DetailsPage;
