import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faBroom } from "@fortawesome/free-solid-svg-icons";
import Status from "./status";
import Gender from "./gender";
import Species from "./species";
import FilterContext from "./../../context/filterContext";
import styles from "./filter.module.scss";

const Filters = () => {
  const handleClear = () => {
    filterContext.setStatus("");
    filterContext.setGender("");
    filterContext.setSpecies("");
  };
  const filterContext = useContext(FilterContext);
  return (
    <div className="alert alert-success ">
      <div className="fs-5 fw-bold text-center">
        <FontAwesomeIcon icon={faFilter} /> Filters
      </div>
      <div
        style={{ cursor: "pointer" }}
        className={`my-3 fs-6 ${styles.filter} d-flex justify-content-center`}
        onClick={() => handleClear()}
      >
        <FontAwesomeIcon icon={faBroom} /> Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        <Status />
        <Gender />
        <Species />
      </div>
    </div>
  );
};

export default Filters;
