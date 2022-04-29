import FilterButton from "./filterButton";

const Gender = () => {
  const gender = ["Female", "male", "genderless", "unknown"];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Gender
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {gender.map((item, index) => (
            <FilterButton key={index} name="gender" index={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gender;
