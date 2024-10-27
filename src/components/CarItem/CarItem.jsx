import css from "./CarItem.module.css";
import heart from "../../img/Vector.svg";
import activeHeart from "../../img/Vector-1.svg";
import star from "../../img/Rating.svg";
import book from "../../img/book.svg";
import { Badges } from "../Badges/Badges";
import { Link } from "react-router-dom";

const CarItem = ({
  props: {
    id,
    gallery,
    name,
    price,
    rating,
    reviews,
    location,
    description,
    AC,
    TV,
    transmission,
    kitchen,
    bathroom,
  },
  handleClick,
  favoritesCars,
}) => {
  const isFavorite = favoritesCars.includes(id);

  return (
    <div className={css.carItem}>
      <img
        className={css.carImg}
        src={gallery[0].thumb}
        width={292}
        height={320}
        alt={name}
      />
      <div className={css.carWrapper}>
        <div className={css.titleWrapper}>
          <h2>{name}</h2>
          <div className={css.priceWrapper}>
            <h2>€{price}.00</h2>
            <span className={css.favorites} onClick={() => handleClick(id)}>
              {isFavorite ? <img src={activeHeart} /> : <img src={heart} />}
            </span>
          </div>
        </div>
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

        <p className={css.description}>{description}</p>

        <div className={css.badgesWrapper}>
          {AC && <Badges>AC</Badges>}
          {TV && <Badges>TV</Badges>}
          {transmission && <Badges>Automatic</Badges>}
          {kitchen && <Badges>Kitchen</Badges>}
          {bathroom && <Badges>Bathroom</Badges>}
        </div>

        <Link to={`/catalog/${id}`} className={css.showBtn}>
          <button>Show more</button>
        </Link>
      </div>
    </div>
  );
};

export default CarItem;
