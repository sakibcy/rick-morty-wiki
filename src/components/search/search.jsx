import React from "react";
import styles from "./search.module.scss";

const Search = ({ setSearch, setPageNumber }) => {
  return (
    <form className={`d-flex justify-content-center gap-4 mb-5`}>
      <input
        onChange={(input) => {
          setSearch(input.target.value);
          setPageNumber(1);
        }}
        placeholder="Search for characters"
        className={styles.input}
        type="text"
      />
      <button
        className={`${styles.btn} btn btn-primary fs-5`}
        onClick={(value) => value.preventDefault()}
      >
        Search
      </button>
    </form>
  );
};

export default Search;
