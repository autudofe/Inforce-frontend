import React from "react";
import { useSelector } from "react-redux";
import Row from "./Row/Row";
import { filteredProducts } from "./helpers/helpers";

const ContentList = () => {
  const products = useSelector((state) => state.products.products);
  /*const filteredProducts = filteredProducts(item, products);*/

  return (
    <>
      {products.length > 0 ? (
        <>
          {products.map((product) => {
            return (
              <div key={product.id}>
                <Row product={product} />
              </div>
            );
          })}
        </>
      ) : (
        <div className="noContent">No products...</div>
      )}
    </>
  );
};

export default ContentList;
