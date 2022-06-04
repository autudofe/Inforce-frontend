import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Comments.module.css";
import { useParams } from "react-router-dom";
import ProductServices from "../../../API/ProductServices";
import {
  addCommentsData,
  deleteComment,
} from "../../../reducers/actions/actions";

const CommentsComponent = ({ onStartEditComment }) => {
  const productId = Number(useParams().id);
  const dispatch = useDispatch();

  useEffect(() => {
    new ProductServices()
      .getComments(productId)
      .then((r) => dispatch(addCommentsData(r.data)));
  }, []);

  const comments = useSelector((state) => state.comments.comments);

  const editComment = (comment) => onStartEditComment(comment);

  const handleDeleteComment = ({ id }) => {
    new ProductServices().deleteComment(id).then((r) => {
      if (r.status === 200) {
        dispatch(deleteComment(id));
      } else {
        console.log(r.statusText);
      }
    });
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
