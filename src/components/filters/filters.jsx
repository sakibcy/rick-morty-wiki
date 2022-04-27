import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faBroom } from "@fortawesome/free-solid-svg-icons";
import Status from "./status";
import Gender from "./gender";
import Species from "./species";

const Filters = () => {
  return (
    <div className="alert alert-success ">
      <div className="fs-5 fw-bold text-center">
        <FontAwesomeIcon icon={faFilter} /> Filters
      </div>
      <div className="my-3 fs-6 badge bg-danger d-flex justify-content-center">
        <FontAwesomeIcon icon={faBroom} /> Clear Filters
      </div>
      <div class="accordion" id="accordionExample">
        <Status />
        <Gender />
        <Species />
      </div>
    </div>
  );
};

export default Filters;
