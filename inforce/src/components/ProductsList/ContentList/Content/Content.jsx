import "./Content.css";
import styles from "./Content.module.css";
import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { deleteProductAndComments } from "../../../../reducers/actions/actions";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import ProductServices from "../../../../API/ProductServices";
import { AlertContext } from "../../../../Context/AlertContextProvider";

const Content = ({ product: { id, count, name, imageUrl, weight } }) => {
  const dispatch = useDispatch();
  const handleAlert = useContext(AlertContext);

  const deleteElement = async () => {
    const response = await new ProductServices().deleteProduct(id);
    if (response.status === 200) {
      dispatch(deleteProductAndComments(id));
    }
    console.log(response);
    handleAlert(response);
  };

  return (
    <div className={classNames(styles.block)}>
      <div className={styles.tools}>
        <NavLink to={`/productView/${id}`} className={styles.navLink}>
          <i className="fa-solid fa-eye" />
        </NavLink>
        <i onClick={deleteElement} className="fa-solid fa-trash" />
      </div>

      <div className={styles.picture}>
        <img className={styles.img} src={imageUrl} alt="" />
      </div>
      <div className={styles.name}>
        <p title={name}>{name}</p>
      </div>
      <div className={styles.count}>
        <p title={count}>Count: {count}</p>
      </div>
      <div className={styles.weight}>
        <p title={weight}>Weight: {weight}</p>
      </div>
    </div>
  );
};

export default Content;
