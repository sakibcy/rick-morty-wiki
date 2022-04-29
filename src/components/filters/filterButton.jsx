import { useContext } from "react";
import FilterContext from "../../context/filterContext";

const FilterButton = ({ name, index, item }) => {
  const filterContext = useContext(FilterContext);
  return (
    <div>
      <style>
        {`
        .i:checked + label {
          background-color:  #0275d8 ;
          color: white
        }
          input[type='radio']{
            display: none
          }
          `}
      </style>
      <div className="form-check">
        <input
          className="form-check-input i"
          type="radio"
          name={name}
          id={`${name}-${index}`}
          // checked
          // defaultChecked
        />
        <label
          onClick={() => {
            filterContext.setPageNumber(1);

            name === "status"
              ? filterContext.setStatus(item)
              : filterContext.setStatus("");
            name === "gender"
              ? filterContext.setGender(item)
              : filterContext.setGender("");
            name === "species"
              ? filterContext.setSpecies(item)
              : filterContext.setSpecies("");
          }}
          className="btn btn-outline-primary"
          htmlFor={`${name}-${index}`}
        >
          {item}
        </label>
      </div>
    </div>
  );
};

export default FilterButton;
