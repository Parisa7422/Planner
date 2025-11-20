// client/src/components/Alert.js
import React from "react";
import Wrapper from "../assets/wrappers/Alert";
import { useAppContext } from "../context/appContext";

const Alert = () => {
  const { alertType, alertText } = useAppContext();

  const isSuccess = alertType === "success";

  return (
    <Wrapper className={`alert alert-${alertType}`}>
      <span className="alert-icon">{isSuccess ? "✔" : "⚠"}</span>
      <span>{alertText}</span>
    </Wrapper>
  );
};

export default Alert;
