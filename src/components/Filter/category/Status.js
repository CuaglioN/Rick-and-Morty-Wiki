import React from "react";
import FilterBTN from "../FilterBTN";

const Status = ({ updateStatus, updatePageNumber }) => {
  let status = ["Alive", "Dead", "Unknown"];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button
          class="btn btn-toggle align-items-center rounded collapsed"
          aria-expanded="false"
          data-bs-target="#collapseOne"
          data-bs-toggle="collapse"
          type="button"
          aria-controls="collapseOne">
          Status
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse"
        aria-labelledby="headingOne"
        data-bs-parent="#accordion"
      >
        <div className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
          {status.map((item, index) => (
            <FilterBTN
              key={index}
              index={index}
              name="status"
              task={updateStatus}
              updatePageNumber={updatePageNumber}
              input={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Status;
