import { Link } from "react-router-dom";
import styles from "./SearchResult.module.css";

function SearchResult({ data }) {
  return (
    <Link
      className={styles.wrapper}
      to={{
        pathname: `/info/${data.id}`,
      }}
      state={{ data: data }}
    >
      <img
        className={styles.avatar}
        src={data.Image}
        width="50px"
        height="50px"
      />
      <div className={styles.name}>{data.Name}</div>
    </Link>
  );
}

export default SearchResult;
