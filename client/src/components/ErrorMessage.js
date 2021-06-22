import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <div>
      <p className="error-msg">{message}</p>
    </div>
  );
};

export default ErrorMessage;
