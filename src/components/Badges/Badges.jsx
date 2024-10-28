import css from "./Badges.module.css";
import AC from "../../img/categories/wind.svg"
import TV from "../../img/categories/tv.svg"
import Automatic from "../../img/categories/diagram.svg"
import Kitchen from "../../img/categories/cup-hot.svg"
import Bathroom from "../../img/categories/ph_shower.svg"
import Gas from "../../img/categories/hugeicons_gas-stove.svg"
import Refrigerator from "../../img/categories/solar_fridge-outline.svg";
import Microwave from "../../img/categories/lucide_microwave.svg";
import Water from "../../img/categories/ion_water-outline.svg";



export const Badges = ({ children }) => {
  const images = {
    AC,
    TV,
    Automatic,
    Kitchen,
    Bathroom,
    Gas,
    Refrigerator,
    Microwave,
    Water,
  };
  return (
    <span className={css.badgesBtn} disabled>
      <img src={images[children]} width={20} height={20}/>
      {children}
    </span>
  );
};


