import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Comments.module.css";
import {addCommentData, addProductData, deleteComment} from "../../../../reducers/actions/actions";
import {useParams} from "react-router-dom";
import ProductServices from "../../../../API/ProductServices";

const CommentsComponent = ({ onStartEditComment }) => {
  const productId = Number(useParams().id);

  useEffect(() => {
    new ProductServices().getComments(productId).then((r) => dispatch(addCommentData(r.data)));
  }, []);

  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.comments);

  const editComment = (comment) => onStartEditComment(comment);

  const handleDeleteComment = ({ id }) => {
    dispatch(deleteComment({ productId, id }));
    new ProductServices().deleteComment(productId, id).then(r => console.log(r));
  };

  if (!comments.length) return <div className={styles.noData}>No data</div>;
  return (
    <>
      {comments.map((comment) => (
        <div key={comment.id} className={styles.commentsRow}>
          <div className={styles.date}>{comment.date} </div>
          <div>{comment.description}</div>

          <div className={styles.tools}>
            <i
              onClick={() => editComment(comment)}
              className="fa-solid fa-pen"
            />
            <i
              onClick={() => handleDeleteComment(comment)}
              className="fa-solid fa-trash"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default CommentsComponent;
