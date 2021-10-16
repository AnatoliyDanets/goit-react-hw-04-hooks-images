import { useState } from "react";
import s from "../Searchbar/Searchbar.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Searchbar({ submit }) {
  const [searchName, setSearchName] = useState("");
  const handleInputChange = (e) => {
    setSearchName(e.currentTarget.value.toLowerCase());
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (searchName.trim() === "") {
      toast.error("empty string");
      return;
    }
    submit(searchName);

    setSearchName("");
  };
  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleFormSubmit}>
        <button type="submit" className={s.SearchForm__button}>
          <span className={s.SearchForm__button_label}>Search</span>
        </button>

        <input
          className={s.SearchForm__input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="searchName"
          value={searchName}
          onChange={handleInputChange}
        />
      </form>
    </header>
  );
}
