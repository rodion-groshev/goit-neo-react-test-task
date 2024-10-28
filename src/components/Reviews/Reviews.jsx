import { useSelector } from "react-redux";
import { selectCar } from "../../redux/cars/selectors";
import { nanoid } from "@reduxjs/toolkit";
import star from "../../img/Rating.svg";
import grayStar from "../../img/Rating_gray.svg";
import css from "./Reviews.module.css";

const Reviews = () => {
  const carByID = useSelector(selectCar);

  const Star = ({ isActive }) =>
    isActive ? <img src={star} /> : <img src={grayStar} />;

  const Rating = ({ rating }) => {
    const totalStars = 5;
    const stars = [];

    for (let i = 0; i < totalStars; i++) {
      stars.push(<Star key={i} isActive={i < rating} />);
    }

    return <div className={css.rating}>{stars}</div>;
  };

  return (
    <div className={css.reviews}>
      {carByID && (
        <ul className={css.reviewsList}>
          {carByID.reviews.map((review) => {
            const id = nanoid();
            return (
              <li key={id} className={css.reviewsItem}>
                <div className={css.reviewWrapper}>
                  <span className={css.reviewSpan}>
                    {review.reviewer_name[0]}
                  </span>
                  <div className={css.ratingWrapper}>
                    <p className={css.reviewName}>{review.reviewer_name}</p>
                    <Rating rating={review.reviewer_rating} />
                  </div>
                </div>
                <p className={css.reviewDescription}>{review.comment}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
