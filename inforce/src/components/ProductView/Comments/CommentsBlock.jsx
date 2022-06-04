import React, { useState } from "react";
import styles from "../ProductView.module.css";
import classNames from "classnames";
import Comments from "./Comments";
import { useParams } from "react-router-dom";
import CommentsForm from "../CommentsForm/CommentsForm";
import { useDispatch } from "react-redux";
import ProductServices from "../../../API/ProductServices";
import { addComment, editComment } from "../../../reducers/actions/actions";
import ModalWindow from "../../ModalWindow/ModalWindow";
import { getDateNow } from "../../../helpers";

const CommentsBlockComponent = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [comment, setComment] = useState(null);
  const productId = Number(useParams().id);

  const onEditComment = (values) => {
    const comment = {
      ...values,
      date: getDateNow(),
    };

    new ProductServices().editComment(comment.id, comment).then((r) => {
      if (r.status === 200) {
        dispatch(editComment(r.data));
      } else {
        console.log(r.statusText);
      }
    });
  };

  const onAddComment = (values) => {
    const comment = {
      id: Date.now(),
      productId,
      ...values,
      date: getDateNow(),
    };

    new ProductServices().addComment(comment).then((r) => {
      if (r.status === 201) {
        dispatch(addComment(r.data));
      } else {
        console.log(r.statusText);
      }
    });
  };

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
