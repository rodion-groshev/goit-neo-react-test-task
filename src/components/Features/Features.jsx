import { useSelector } from "react-redux";
import { Badges } from "../Badges/Badges";
import { selectCar } from "../../redux/cars/selectors";
import css from "./Features.module.css";

const Features = () => {
  const carByID = useSelector(selectCar);

  return (
    <div className={css.features}>
      {carByID && (
        <div className={css.badgesWrapper}>
          {carByID.AC && <Badges>AC</Badges>}
          {carByID.TV && <Badges>TV</Badges>}
          {carByID.transmission && <Badges>Automatic</Badges>}
          {carByID.kitchen && <Badges>Kitchen</Badges>}
          {carByID.bathroom && <Badges>Bathroom</Badges>}
          {carByID.gas && <Badges>Gas</Badges>}
          {carByID.refrigerator && <Badges>Refrigerator</Badges>}
          {carByID.microwave && <Badges>Microwave</Badges>}
          {carByID.water && <Badges>Water</Badges>}
        </div>
      )}
      {carByID && (
        <div>
          <h3 className={css.detailsTitle}>Vechicle details</h3>
          <ul className={css.vechicleList}>
            <li className={css.vechicleItem}>
              <p>Form</p>
              <p className={css.vechicleItemText}>{carByID.form}</p>
            </li>
            <li className={css.vechicleItem}>
              <p>Length</p>
              <p>{carByID.length}</p>
            </li>
            <li className={css.vechicleItem}>
              <p>Width</p>
              <p>{carByID.width}</p>
            </li>
            <li className={css.vechicleItem}>
              <p>Height</p>
              <p>{carByID.height}</p>
            </li>
            <li className={css.vechicleItem}>
              <p>Tank</p>
              <p>{carByID.tank}</p>
            </li>
            <li className={css.vechicleItem}>
              <p>Consumption</p>
              <p>{carByID.consumption}</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Features;
