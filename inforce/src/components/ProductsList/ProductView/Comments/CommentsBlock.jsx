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
import ProductServices from "../../../../API/ProductServices";

const CommentsBlockComponent = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [comment, setComment] = useState(null);
  const productId = Number(useParams().id);

  const onEditComment = (values) => {
      const comment = {
          ...values,
          date: getDateNow(),
      }
    dispatch(
      editComment(comment)
    );
    new ProductServices()
      .editComment(values.productId, values.id, comment)
      .then((r) => console.log(r));
  };

  const onAddComment = (values) => {
    const comment = {
      id: Date.now(),
      productId,
      ...values,
      date: getDateNow(),
    };
    dispatch(addComment(comment));
    new ProductServices().addComment(comment).then((r) => console.log(r));
    new ProductServices()
      .addCommentProduct(productId)
      .then((r) => console.log(r));
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
