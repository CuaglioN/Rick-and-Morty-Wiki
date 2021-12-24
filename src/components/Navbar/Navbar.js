import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import UserMenu from "../UserMenu/UserMenu";
import axios from "axios";
import './Navbar.css';

const Navbar = ({ users }) => {

  let [axiosData, setAxios] = useState([]);

  const rickAndMortyHTPP = axios.create({
    baseURL: "https://api-rick-morty-bootcamp.herokuapp.com"
  });

  let params = `${users.username}`;

  useEffect(() => {
    (async function () {
      await rickAndMortyHTPP.get(`/user/${params}`)
        .then(response => setAxios(response.data))
    })();
  }, [rickAndMortyHTPP, params]);

  return (
    <nav className="navbar mx-0 navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        <Link to="/" className="navbar-brand fs-3 ubuntu">
          <h1 className="navbarBrand">Rick & Morty</h1>
        </Link>
        <button
          className="navbar-toggler bg-primary border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="fas fa-bars open text-dark"></span>
          <span class="fas fa-times close text-dark"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNavAltMarkup">
          <div className="navbar-nav fs-5">
            <NavLink to="/" className="nav-link ">Characters</NavLink>
            <NavLink to="/episodes" className="nav-link ">Episodes</NavLink>
            <NavLink activeClassName="active" className="nav-link" to="/location">Locations</NavLink>
          </div>
          <div className="userContainer">
            <UserMenu data={axiosData} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
