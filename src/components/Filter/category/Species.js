import React from "react";
import FilterBTN from "../FilterBTN";

const Species = ({ updateSpecies, updatePageNumber }) => {
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button
          class="btn btn-toggle align-items-center rounded collapsed"
          aria-expanded="false"
          data-bs-target="#collapseTwo"
          data-bs-toggle="collapse"
          type="button"
          aria-controls="collapseTwo">
          Species
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordion"
      >
        <div className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
          {species.map((item, index) => {
            return (
              <FilterBTN
                name="species"
                index={index}
                key={index}
                updatePageNumber={updatePageNumber}
                task={updateSpecies}
                input={item}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Species;
