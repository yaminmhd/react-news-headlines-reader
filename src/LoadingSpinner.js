import React from "react";

const LoadingSpinner = () => {
  return (
    <div>
      <i style={{fontSize: '3rem'}} className="fa fa-spinner fa-spin" /> <span>Loading articles...</span>
    </div>
  );
};

export default LoadingSpinner;
