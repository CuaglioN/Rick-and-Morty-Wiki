import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ page, results }) => {
  let display;

  if (results) {
    display = results.map((x) => {
      let { id, image, name, status, location } = x;
      return (
        <div className="cardContainer" data-aos="flip-right">
          <Link
            id="linkCard"
            style={{ textDecoration: "none" }}
            to={`${page}${id}`}
            key={id}
            className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark">

            <div className="card d-flex flex-column justify-content-center">

              <img className="img img-fluid" src={image} alt="img" />
              <div className="cardTextWrap">
                <h3 className="text-center cardName">{name}</h3><button className="card-inner">More Info</button>
              </div>

            </div>

            {(() => {
              if (status === "Dead") {
                return (
                  <div className="position-absolute badge bg-danger">
                    {status}
                  </div>
                );
              } else if (status === "Alive") {
                return (
                  <div className="position-absolute badge bg-success">
                    {status}
                  </div>
                );
              } else {
                return (
                  <div className="position-absolute badge bg-secondary">
                    {status}
                  </div>
                );
              }
            })()}

          </Link></div>
      );

    });

  } else {
    display = (
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    );
  }

  return <>{display}</>;
};

export default Card;
