import React from "react";

export const Result = props => {
  return (
    <label>
      <input type="text" value={props.result} readOnly />
    </label>
  );
};
