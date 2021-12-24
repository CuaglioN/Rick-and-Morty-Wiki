import React, { useState, useEffect } from "react";
import Search from '../Search/Search';
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import Filter from "../Filter/Filter";
import axios from "axios";
import './Home.css'

export const Home = () => {

  let [pageNumber, updatePageNumber] = useState(1);
  let [status, updateStatus] = useState("");
  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("");
  let [axiosData, setAxios] = useState([]);
  let [search, setSearch] = useState("");
  let { info, results } = axiosData;

  const rickAndMortyHTPP = axios.create({
    baseURL: `https://rickandmortyapi.com/api/character`
  });

  let params = `/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      await rickAndMortyHTPP.get(`${params}`)
        .then(response => setAxios(response.data))
    })();
  }, [rickAndMortyHTPP, params]);

  return (

    <div className="container homeContainer">

      <div className="titleWrap">
        <h1 className="homeTitle text-center" data-aos="fade-in" >Rick & Morty</h1>
      </div>
      <div className="search">
        <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
      </div>
      <div className="row">
        <Filter
          pageNumber={pageNumber}
          status={status}
          updateStatus={updateStatus}
          updateGender={updateGender}
          updateSpecies={updateSpecies}
          updatePageNumber={updatePageNumber} />
        <div className="col-lg-8 col-12">
          <div className="gridContainer">
            <Card page="/" results={results} />
          </div>
        </div>
      </div>

      <Pagination
        info={info}
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber}
      />
    </div>
  );
};