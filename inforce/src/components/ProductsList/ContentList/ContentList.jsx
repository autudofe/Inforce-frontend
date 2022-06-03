import React from "react";
import { useSelector } from "react-redux";
import Content from "./Content/Content";
import styles from './ContentList.module.css'

const sportByParam = sortBy => (a, b) => {
  if (a[sortBy] === b[sortBy]) {
    return 0;
  }
  return a[sortBy] > b[sortBy] ? 1 : -1
}

const ContentList = ({sortBy}) => {
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
