import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <div>
      <p>Error: {message}</p>
    </div>
  );
};

export default ErrorMessage;