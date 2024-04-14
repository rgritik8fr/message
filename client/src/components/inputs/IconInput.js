import React from "react";
import "./input.css";

const IconInput = ({ label, icon, placeholder }) => {
  return (
    <>
      <div className="icon-input-wrapper">
        <label className="my-2 is-font-14">{label}</label>
        <div className="input-group mb-3 w-100">
          <span className="input-group-text" id="basic-addon1">
            <i className={icon}></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder={placeholder}
            aria-label={placeholder}
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
    </>
  );
};

export default IconInput;
