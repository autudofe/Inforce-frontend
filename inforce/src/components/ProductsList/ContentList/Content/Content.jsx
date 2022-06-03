import "./Content.css";
import styles from "./Content.module.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../../../reducers/actions/actions";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

let countComments;
const Content = ({ product: { id, count, name, imageUrl, comments } }) => {
  useEffect(() => {
    countComments = comments.length;
  }, [comments]);

  const dispatch = useDispatch();

  const deleteElement = () => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className={classNames(styles.block)}>
      <div className={styles.tools}>
        <NavLink to={`/productView/${id}`} className={styles.navLink}>
        <i  className="fa-solid fa-eye" />
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
        <div className={styles.comments}>
          <p title={comments.length}>Comments: {comments.length}</p>
        </div>

    </div>
  );
};

export default Content;
