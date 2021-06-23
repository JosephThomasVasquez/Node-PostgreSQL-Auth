import React from "react";

const SuccessMessage = ({ message }) => {
  return (
    <div>
      <p className="success-msg">{message}</p>
    </div>
  );
};

export default SuccessMessage;
