import { Link } from "react-router-dom";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <main>
      <div className={css.heroSection}>
        <h1 className={css.heroTitle}>Campers of your dreams</h1>
        <h2 className={css.heroSubTitle}>
          You can find everything you want in our catalog
        </h2>
        <Link to={"/catalog"}>
          <button type="button">View Now</button>
        </Link>
      </div>
    </main>
  );
};

export default HomePage;
