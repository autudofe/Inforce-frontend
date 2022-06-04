import React, {useEffect, useState} from "react";
import styles from "./ProductView.module.css";
import { NavLink, useParams } from "react-router-dom";
import CommentsBlock from "./Comments/CommentsBlock";
import ProductServices from "../../API/ProductServices";
import ModalWindow from "../ModalWindow/ModalWindow";
import DataForm from "../ModalWindow/DataForm/DataForm";

const ProductView = () => {
  const id = Number(useParams().id);
  const [product, setProduct] = useState({})
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    new ProductServices().getProduct(id).then((r) => setProduct(r.data));
  }, [id]);

  const onEditProduct = values =>{
    new ProductServices()
        .editProduct(id, values)
        .then((r) => {
          if (r.status === 200) {
            setProduct(r.data)
          } else {
            console.log(r.statusText);
          }
        });
  }



  const { name, count, size, weight, imageUrl } = product;


  if (!Object.keys(product).length) return <div className={styles.loading}>Loading...</div>;
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
