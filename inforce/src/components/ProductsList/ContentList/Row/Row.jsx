import "./Row.css";
import React from "react";
import { getCountComments } from "../helpers/helpers";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../../../reducers/actions/actions";

const Row = (props) => {
  const { id, count, name, weight, comments } = props.product;
  const countComments = getCountComments(comments);

  const dispatch = useDispatch();

  const deleteElement = () => {
    dispatch(deleteProduct(id));
  };
  const showDetails = () => {};
  return (
    <>
      <div className="block block_style">
        <div className="icon">
          <div className="circle_icon">{/*icon*/}</div>
        </div>
        <div className="name">
          <p title={name}>{name}</p>
        </div>
        <div className="count ">
          <p title={weight}>{count}</p>
        </div>
        <div className="weight">
          <p title={weight}>{weight}</p>
        </div>
        <div className="comments">
          <p title={countComments}>{countComments}</p>
        </div>
        <div className="tools">
          <i onClick={showDetails} className="fa-solid fa-eye" />
          <i onClick={deleteElement} className="fa-solid fa-trash" />
        </div>
      </div>
    </>
  );
};

export default Row;
