import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css"
const NotFoundPage = () => {
  return (
    <div className={css.notFound}>
      <p className={css.text}>
        Oops! The page you are looking for does not exist.
      </p>
      <Link to="/" className={css.homeLink}>
        Go back to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
