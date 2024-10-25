import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import css from "./Filters.module.css";
import AC from "../../img/categories/wind.svg";
import automatic from "../../img/categories/diagram.svg";
import kitchen from "../../img/categories/cup-hot.svg";
import TV from "../../img/categories/tv.svg";
import bathroom from "../../img/categories/ph_shower.svg";
import van from "../../img/categories/bi_grid-1x2.svg";
import integrated from "../../img/categories/bi_grid.svg";
import alcove from "../../img/categories/bi_grid-3x3-gap.svg";
import { setFilters } from "../../redux/filters/slice";
import { selectFilters } from "../../redux/filters/selectors";

const images = {
  AC,
  automatic,
  kitchen,
  TV,
  bathroom,
  van,
  integrated,
  alcove,
};

const Filter = () => {
  const dispatch = useDispatch();
  const formId = nanoid();

  const equipment = ["AC", "automatic", "kitchen", "TV", "bathroom"];
  const form = ["van", "integrated", "alcove"];

  const filters = useSelector(selectFilters);

  const handleSubmit = (values) => {
    dispatch(setFilters(values));
  };

  return (
    <>
      <Formik initialValues={filters} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <div className={css.location}>
            <label htmlFor={formId}>Location</label>
            <Field
              className={css.locationInput}
              type="text"
              id={formId}
              name="location"
              placeholder="City"
            />
          </div>

          <p className={css.filtersLabel}>Filters</p>
          <h3 className={css.filtersTitle}>Vechicle equipment</h3>
          <ul className={css.filtersLists}>
            {equipment.map((item) => {
              const id = nanoid();

              return (
                <li key={id}>
                  <label className={css.equipLabel} htmlFor={id}>
                    <Field
                      className={css.equipInput}
                      type="checkbox"
                      name={item}
                      id={id}
                    />
                    <span className={css.checkmark}></span>
                    <div className={css.equipWrapper}>
                      <img src={images[item]} alt={item}></img>
                      <span className={css.itemName}>{item}</span>
                    </div>
                  </label>
                </li>
              );
            })}
          </ul>

          <ul className={css.filtersLists}>
            <h3 className={css.filtersTitle}>Vechicle type</h3>
            {form.map((item) => {
              const id = nanoid();

              return (
                <li key={id}>
                  <label className={css.equipLabel} htmlFor={id}>
                    <Field
                      className={css.equipInput}
                      type="radio"
                      name="form"
                      id={id}
                      value={item}
                    />
                    <span className={css.checkmark}></span>
                    <div className={css.equipWrapper}>
                      <img src={images[item]} alt={item}></img>
                      <span className={css.itemName}>{item}</span>
                    </div>
                  </label>
                </li>
              );
            })}
          </ul>

          <button type="submit">Search</button>
        </Form>
      </Formik>
    </>
  );
};

export default Filter;
