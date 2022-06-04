import "./Content.css";
import styles from "./Content.module.css";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteProductAndComments } from "../../../../reducers/actions/actions";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import ProductServices from "../../../../API/ProductServices";

const Content = ({ product: { id, count, name, imageUrl, weight } }) => {
  const dispatch = useDispatch();

  const deleteElement = () => {
    new ProductServices().deleteProduct(id).then((r) => {
      if (r.status === 200) {
        dispatch(deleteProductAndComments(id));
      } else {
        console.log(r.statusText);
      }
    });
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
