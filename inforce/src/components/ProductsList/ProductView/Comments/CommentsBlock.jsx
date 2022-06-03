import React, { useState } from "react";
import styles from "../ProductView.module.css";
import classNames from "classnames";
import Comments from "./Comments";
import { useParams } from "react-router-dom";
import ModalWindow from "../../../ModalWindow/ModalWindow";
import CommentsForm from "../CommentsForm/CommentsForm";
import { addComment, editComment } from "../../../../reducers/actions/actions";
import { useDispatch } from "react-redux";
import { getDateNow } from "../../../../helpers";

const CommentsBlockComponent = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [comment, setComment] = useState(null);
  const productId = Number(useParams().id);

  const onEditComment = (values) =>
    dispatch(
      editComment({
        ...values,
        date: getDateNow(),
      })
    );

  const onAddComment = (values) =>
    dispatch(
      addComment({
        ...values,
        id: Date.now(),
        productId,
        date: getDateNow(),
      })
    );

  const handleCloseModal = () => {
    setShowModal(false);
    setComment(null);
  };

  const handleShowModal = () => setShowModal(true);

  const onStartEditComment = (comment) => {
    setComment(comment);
    handleShowModal();
  };

  return (
    <>
      <ModalWindow
        FormComponent={CommentsForm}
        showModal={showModal}
        closeModal={handleCloseModal}
        onSubmit={!comment ? onAddComment : onEditComment}
        initialData={comment}
      />
      <div className={styles.nameComments}>Comments</div>
      <button onClick={handleShowModal} className={styles.button} type="button">
        Add comment
      </button>

      <div className={classNames(styles.comments)}>
        <Comments onStartEditComment={onStartEditComment} />
      </div>
    </>
  );
};

export default CommentsBlockComponent;
