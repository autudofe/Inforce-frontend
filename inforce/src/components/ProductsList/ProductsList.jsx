import React, { useState } from "react";
import Header from "./Header/Header";
import ContentList from "./ContentList/ContentList";
import ModalWindow from "../ModalWindow/ModalWindow";
import { addProduct } from "../../reducers/actions/actions";
import { useDispatch } from "react-redux";
import DataForm from "../ModalWindow/DataForm/DataForm";

const ProductsList = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const [sortBy, setSortBy] = useState("name");

  const onAddProduct = (values) => {
    dispatch(
      addProduct({
        ...values,
        id: Date.now(),
        imageUrl: "https://picsum.photos/300/300",
        comments: [],
      })
    );
  };

  const openModal = () => setShowModal(true);

  return (
    <div>
      <ModalWindow
        FormComponent={DataForm}
        showModal={showModal}
        closeModal={() => setShowModal(false)}
        onSubmit={onAddProduct}
      />
      <Header sortBy={sortBy} setSortBy={setSortBy} openModal={openModal} />
      <ContentList sortBy={sortBy} />
    </div>
  );
};

export default ProductsList;
