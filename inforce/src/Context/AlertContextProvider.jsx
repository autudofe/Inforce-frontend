import React, { createContext, useState } from "react";
import Snackbar from "../components/Snackbar/Snackbar";

export const AlertContext = createContext({});

const AlertContextProvider = ({ children }) => {
  const [alert, setAlert] = useState({
    show: false,
    status: "",
    message: "",
  });

  const handleAlert = ({ status, statusText }) => {
    let statusMode = status === 200 || status === 201 ? "success" : "fail";
    setAlert({
      show: true,
      status: statusMode,
      message: statusText,
    });
  };

  return (
    <AlertContext.Provider value={handleAlert}>
      {children}
      <Snackbar alert={alert} setAlert={setAlert} />
    </AlertContext.Provider>
  );
};

export default AlertContextProvider;
