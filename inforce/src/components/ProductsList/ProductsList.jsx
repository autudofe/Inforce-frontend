import React, {useContext, useState} from "react";
import Header from "./Header/Header";
import ContentList from "./ContentList/ContentList";
import ModalWindow from "../ModalWindow/ModalWindow";
import { addProduct } from "../../reducers/actions/actions";
import { useDispatch } from "react-redux";
import DataForm from "../ModalWindow/DataForm/DataForm";
import ProductServices from "../../API/ProductServices";
import {AlertContext} from "../../Context/AlertContextProvider";

const ProductsList = () => {
  const dispatch = useDispatch();
  const handleAlert = useContext(AlertContext);
  const [showModal, setShowModal] = useState(false);

  const [sortBy, setSortBy] = useState("name");

  const onAddProduct = async (values) => {
    let product = {
      id: Date.now(),
      imageUrl: "https://picsum.photos/300/300",
      ...values,
    };

    const response = await new ProductServices().addProduct(product);
    if (response.status === 201) {
      dispatch(addProduct(response.data));
    }
    console.log(response);
    handleAlert(response);
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
