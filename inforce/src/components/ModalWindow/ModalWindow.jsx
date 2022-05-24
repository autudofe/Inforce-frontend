import React, { useState } from "react";
import "./ModalWindow.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addProducts,
  visibilityModalWindow,
} from "../../reducers/actions/actions";
import { checkValidation } from "../ProductsList/ContentList/helpers/helpers";
import classNames from "classnames";

const ModalWindow = () => {
  let defaultState = {
    imageUrl: "",
    name: "",
    count: 1,
    size: {
      width: 1,
      height: 1,
    },
    weight: "",
    comments: [],
  };
  const dispatch = useDispatch();
  const { visible } = useSelector((state) => state.modals);

  const [list, setList] = useState(defaultState);

  const closeModal = () => {
    dispatch(visibilityModalWindow({ visible: false }));
  };

  const createList = (e) => {
    /*dispatch(
          addProducts({
            ...list,
            id: Date.now().toString(),
          })
        );*/

    closeModal();
  };

  const inputName = (value) => {
    /*checkValidation(value);*/
    setList({ ...list, name: value });
  };

  return (
    <div className={classNames("modal", { modalActive: visible })}>
      <form>
        <i onClick={closeModal} className="fa-solid fa-xmark fa-2xl" />
        <input
          value={list.name}
          onChange={(e) => inputName(e.target.value)}
          name="name"
          type="text"
          className="create_form"
          placeholder="Name"
          autoComplete="off"
        />
        <input
          value={list.count}
          onChange={(e) => setList({ ...list, count: Number(e.target.value) })}
          name="count"
          type="number"
          className="create_form"
          placeholder="count"
          autoComplete="off"
        />

        <button onClick={createList} className="create_button">
          CREATE
        </button>
      </form>
    </div>
  );
};

export default ModalWindow;
