import React from "react";
import styles from "./Header.module.css";

const Header = ({sortBy, setSortBy, openModal}) => {
    const filter = () => {
        sortBy === "name" ? setSortBy("count") : setSortBy("name")
    }

  return (
    <header className={styles.header}>
        <button onClick={openModal} className={styles.button}>
            CREATE PRODUCT
        </button>
      <div onClick={filter} className={styles.tools}>
          FILTER
        {sortBy === "name" ? (
          <i
            className="fa-solid fa-arrow-down-a-z"
          />
        ) : (
          <i
            className="fa-solid fa-arrow-down-1-9"
          />
        )}
      </div>
    </header>
  );
};

export default Header;
