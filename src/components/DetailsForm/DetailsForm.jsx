import css from "./DetailsForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import DatePicker from "react-datepicker";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";

const DetailsForm = () => {
  const initialValues = {
    name: "",
    email: "",
    comment: "",
  };
  const [startDate, setStartDate] = useState(new Date());
  const notify = () => toast.success("Truck booked successfully");

  const handleSubmit = (values) => {
    notify();
    console.log({ ...values, date: startDate });
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please enter a valid email address"
      )
      .required("Required"),
  });
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
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
        <ErrorMessage className={css.message} name="name" component="span" />
        <Field
          type="email"
          className={css.bookInputs}
          placeholder="Email*"
          name="email"
        />
        <ErrorMessage className={css.message} name="email" component="span" />
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
  );
};

export default DetailsForm;
