import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './CardDetails.css'
import axios from "axios";
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { GiChewedSkull } from 'react-icons/gi';
import { CgMediaLive } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const CardDetails = () => {

  let { id } = useParams();
  let [axiosData, setAxios] = useState([]);
  let { name, location, origin, gender, image, status, species } = axiosData;

  const rickAndMortyHTPP = axios.create({
    baseURL: `https://rickandmortyapi.com/api/character`
  });

  let params = `${id}`;

  useEffect(() => {
    (async function () {

      await rickAndMortyHTPP.get(`${params}`)
        .then(response => setAxios(response.data))

    })();
  }, [params, rickAndMortyHTPP]);

  return (
    <>
      <div className="titleWrap">
        <h2 className="homeTitle text-center" data-aos="fade-right">Character Details</h2>
      </div>

      <div className="container detailsContainer" >
        <div className="imgContainer">
          <img className="img-fluid" src={image} alt="image" />
        </div>
        <div className="info text-white" data-aos="flip-right">
          <h1 className="text-center mb-4">{name}</h1>

          {(() => {
            if (status === "Dead") {
              return <ul><li className="statusInfo"> <b>Status:</b> <span className="deadIcon"><GiChewedSkull size="2em" /></span> {status}</li></ul>;
            } else if (status === "Alive") {
              return <ul>
                <li className="statusInfo"> <b>Status:</b> <span className="aliveIcon"> <CgMediaLive size="2em" />
                </span> {status}</li></ul>;
            } else {
              return <ul><li className="statusInfo"><b>Status:</b>  <span className="unknownIcon"> <AiOutlineQuestionCircle size="2em" /></span> {status}</li></ul>;
            }
          })()}
          <ul>
            <li>
              <span className="statusInfo"><b>Gender:</b> </span>
              {gender}
            </li>
          </ul>
          <ul>
            <li>
              <span className="fw-bold">Location: </span>
              {location?.name}
            </li>
          </ul>
          <ul>
            <li>
              <span className="fw-bold">Origin: </span>
              {origin?.name}
            </li>
          </ul>
          <ul>
            <li>
              <span className="fw-bold">Species: </span>
              {species}
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/EditCharacter" className="btn editBtn">Edit</Link>


            </li>
          </ul>
        </div>

      </div>
      <div className="text-center">
        <Link to="/" className="btn goBackBtn">Go back</Link>
      </div>
    </>
  );

};

export default CardDetails;
