import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Content from "./Content/Content";
import styles from './ContentList.module.css'
import ProductServices from "../../../API/ProductServices";
import {addProductsData} from "../../../reducers/actions/actions";

const sportByParam = sortBy => (a, b) => {
  if (a[sortBy] === b[sortBy]) {
    return 0;
  }
  return a[sortBy] > b[sortBy] ? 1 : -1
}

const ContentList = ({sortBy}) => {
  const dispatch = useDispatch()

  useEffect(() => {
    new ProductServices().getProducts().then((r) => dispatch(addProductsData(r.data)));
  }, []);

  const products = useSelector((state) => state.products.products);

  const sortedProducts = products.sort(sportByParam(sortBy));

  return (
    <div className={styles.contentList}>
      {products.length > 0 ? (
        <>
          {sortedProducts.map((product) => {
            return (
              <div key={product.id} className={styles.card}>
                <Content product={product} />
              </div>
            );
          })}
        </>
      ) : (
        <div className="noContent">No products...</div>
      )}
    </div>
  );
};

export default ContentList;
