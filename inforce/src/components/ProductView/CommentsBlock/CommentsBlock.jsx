import React, { useContext, useState } from "react";
import styles from "../ProductView.module.css";
import classNames from "classnames";
import { useParams } from "react-router-dom";
import CommentsForm from "../CommentsForm/CommentsForm";
import { useDispatch } from "react-redux";
import { addComment, editComment } from "../../../reducers/actions/actions";
import ModalWindow from "../../ModalWindow/ModalWindow";
import { getDateNow } from "../../../helpers";
import { AlertContext } from "../../../Context/AlertContextProvider";
import CommentsServices from "../../../API/CommentsServices";
import Comments from "./Comments/Comments";

const CommentsBlockComponent = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [comment, setComment] = useState(null);
  const productId = Number(useParams().id);
  const commentsServices = new CommentsServices();
  const handleAlert = useContext(AlertContext);

  const onEditComment = async (values) => {
    const comment = {
      ...values,
      date: getDateNow(),
    };

    const response = await commentsServices.editComment(comment.id, comment);
    if (response.status === 200) {
     return  dispatch(editComment(response.data));
    }
    handleAlert(response);
  };

  const onAddComment = async (values) => {
    const comment = {
      id: Date.now(),
      productId,
      ...values,
      date: getDateNow(),
    };

    const response = await commentsServices.addComment(comment);
    if (response.status === 201) {
      dispatch(addComment(response.data));
    }
    handleAlert(response);
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
