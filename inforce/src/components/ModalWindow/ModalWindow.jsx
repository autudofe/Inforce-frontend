import React from "react";
import styles from "./ModalWindow.module.css";
import classNames from "classnames";


const ModalWindow = ({ FormComponent, showModal, ...props }) => {
    const { closeModal } = props;
    if(!showModal) return null;
    return (
        <div
            className={classNames(styles.modal, {[styles.modalActive]: showModal})}
        >
            <div className={styles.container}>
                <i
                    onClick={closeModal}
                    className={classNames("fa-solid fa-xmark fa-2xl", styles.close)}
                />
                <FormComponent {...props} />
            </div>
        </div>
    );
};

export default ModalWindow;
