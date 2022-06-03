import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Comments.module.css";
import {deleteComment} from "../../../../reducers/actions/actions";
import {useParams} from "react-router-dom";

const CommentsComponent = ({ onStartEditComment }) => {
  const productId = Number(useParams().id);

  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.comments);
  const filteredComments = comments.filter(
    (comment) => comment.productId === productId
  );

  const editComment = (comment) => onStartEditComment(comment);

  const handleDeleteComment = ({ id }) => dispatch(deleteComment({ productId, id }));

  return (
    <>
      {filteredComments.map((comment) => (
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
