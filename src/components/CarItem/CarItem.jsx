import css from "./CarItem.module.css";
import heart from "../../img/Vector.svg";
import activeHeart from "../../img/Vector-1.svg";

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
    // AC,
    // TV,
    // transmission,
    // gas,
    // kitchen,
    // bathroom,
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
              {isFavorite ? (
                <img src={activeHeart}></img>
              ) : (
                <img src={heart}></img>
              )}
            </span>
          </div>
        </div>
        <p>
          {rating}({reviews.length} Reviews)
        </p>
        <p>{location}</p>
        <p className={css.description}>{description}</p>
      </div>
    </div>
  );
};

export default CarItem;
