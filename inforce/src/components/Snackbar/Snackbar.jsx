import React, { useEffect } from "react";
import styles from "./Snackbar.module.css";
import classNames from "classnames";

const Snackbar = ({ alert, setAlert }) => {
  const { status, message, show } = alert;

  useEffect(() => {
    setTimeout(() => {
      setAlert((prevState) => ({
        ...prevState,
        show: false,
      }));
    }, 3000);
  }, [show]);

  let visibleClass = show ? styles.show : styles.hide;
  let colorSchema =
    status === "success" ? styles.successSchema : styles.unSuccessSchema;

  return (
    <div className={classNames(styles.snackbar, visibleClass, colorSchema)}>
      <div className={styles.symbol}>
        {status === "success" ? (
          <i className="fa-solid fa-circle-check" />
        ) : (
          <i className="fa-solid fa-circle-exclamation" />
        )}
      </div>
      <div className={styles.message}>{message}</div>
    </div>
  );
};

export default Snackbar;