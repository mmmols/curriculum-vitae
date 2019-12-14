import React from "react";
import { Redirect, useLocation } from "react-router-dom";

const NoMatch = () => {
  let location = useLocation();

  return (
    <div>
      <h3>404</h3>
    </div>
  );
};

export default NoMatch;
