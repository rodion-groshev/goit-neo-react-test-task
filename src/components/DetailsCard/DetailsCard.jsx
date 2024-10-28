import css from "./DetailsCard.module.css";
import star from "../../img/Rating.svg";
import book from "../../img/book.svg";
import { nanoid } from "@reduxjs/toolkit";

const DetailsCard = ({
  props: { name, gallery, rating, reviews, location, price, description },
}) => {
  return (
    <div className={css.detailsCard}>
      <h2>{name}</h2>
      <div className={css.reviewsWrapper}>
        <p className={css.reviews}>
          <img src={star} width={16} height={16} />
          {rating}({reviews.length} Reviews)
        </p>
        <p className={css.location}>
          <img src={book} width={16} height={16} />
          {location}
        </p>
      </div>
      <h2>€{price}.00</h2>
      <ul className={css.detailsList}>
        {gallery.map((image) => {
          const id = nanoid();
          return (
            <li key={id} className={css.detailsItem}>
              <img
                className={css.detailsImg}
                src={image.original}
                width={292}
                height={312}
                alt={name}
              />
            </li>
          );
        })}
      </ul>
      <p className={css.description}>{description}</p>
    </div>
  );
};

export default DetailsCard;
