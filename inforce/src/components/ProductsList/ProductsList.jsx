import React from "react";
import Header from "./Header/Header";
import ContentList from "./ContentList/ContentList";
import styles from "./buttons/Button.module.css";
import { visibilityModalWindow } from "../../reducers/actions/actions";
import { useDispatch } from "react-redux";

const ProductsList = () => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(visibilityModalWindow({ visible: true }));
  };

  return (
    <div>
      <Header />
      <ContentList />
      <button onClick={openModal} className={styles.buttonStyle}>
        Create Product
      </button>
    </div>
  );
};

export default ProductsList;