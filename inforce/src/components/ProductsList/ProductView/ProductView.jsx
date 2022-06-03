import React, { useState } from "react";
import styles from "./ProductView.module.css";
import { NavLink, useParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import DataForm from "../../ModalWindow/DataForm/DataForm";
import ModalWindow from "../../ModalWindow/ModalWindow";
import {editProduct} from "../../../reducers/actions/actions";
import CommentsBlock from "./Comments/CommentsBlock";

const ProductView = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const productId = Number(useParams().id);
  const products = useSelector((state) => state.products.products);
  const product = products.reduce(
    (productItem, acc) =>
      productItem.id === productId ? { ...acc, ...productItem } : { ...acc },
    {}
  );
  const { name, count, size, weight, imageUrl } = product;

  const onEditProduct = values =>
    dispatch(
        editProduct({
          ...values,
        })
    );

  return (

    <div className={styles.viewContainer}>
      <div>
        <ModalWindow
            FormComponent={DataForm}
            showModal={showModal}
            closeModal={() => setShowModal(false)}
            onSubmit={onEditProduct}
            initialData={product}
        />
        <div className={styles.tools}>
          <NavLink to={`/`} className="fa-solid">
            <i className="fa-solid fa-arrow-left" />
            Back
          </NavLink>
        </div>

        <div className={styles.name}>{name}</div>



        <div className={styles.productInfo}>
          <div className={styles.productInfoContent}>
            <button className={styles.button} type="button" onClick={() => setShowModal(true)}>
              Edit product
            </button>
            <div className={styles.row}>count: {count}</div>
            <div className={styles.row}>
              size: width-{size.width} height-{size.height}
            </div>
            <div className={styles.row}>weight: {weight}</div>
            <div className={styles.row}>imageUrl: {imageUrl}</div>
          </div>
          <div className={styles.picture}>
            <img className={styles.img} src={imageUrl} alt="" />
          </div>
        </div>

      <CommentsBlock/>
      </div>
    </div>

  );
};

export default ProductView;
