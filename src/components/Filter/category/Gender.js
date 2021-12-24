import React from "react";
import FilterBTN from "../FilterBTN";

const Gender = ({ updateGender, updatePageNumber }) => {

  let genders = ["female", "male", "genderless", "unknown"];

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button
          class="btn btn-toggle align-items-center rounded collapsed"
          aria-expanded="false"
          data-bs-target="#collapseThree"
          data-bs-toggle="collapse"
          type="button"
          aria-controls="collapseThree">
          Gender
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordion"
      >
        <div className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
          {genders.map((items, index) => {
            return (
              <FilterBTN
                name="gender"
                index={index}
                key={index}
                updatePageNumber={updatePageNumber}
                task={updateGender}
                input={items}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gender;
