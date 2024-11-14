/** @format */

import { Formik } from "formik";
import css from "../module_css/SearchBar.module.css";

export function SearchBar({ disabled, setSearchQuery, setPage, getImages }) {
  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const { searchQueryInput } = form.elements;
    if (searchQueryInput.value === "") {
      console.log("to pole jest wymagane");
      return;
    }
    getImages(searchQueryInput.value);
    setSearchQuery(searchQueryInput.value);
    setPage((p) => p + 1);
  };

  return (
    <div className={css.SearchBar__box}>
      <form className={css.SearchBar__form} onSubmit={handleSearch}>
        <input
          onChange={() => {
            setPage(1);
          }}
          disabled={disabled}
          type="text"
          name="searchQueryInput"
          placeholder="Search by name..."
        />
        <button disabled={disabled} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
