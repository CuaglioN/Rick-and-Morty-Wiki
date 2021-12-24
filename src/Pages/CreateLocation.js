import InputGroup from "../components/Filter/category/InputGroup";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CreateLocation.css"

function CreateCharacter() {
    let [info, setInfo] = useState([]);
    let [number, setNumber] = useState(1);

    // let api = `https://rickandmortyapi.com/api/location/${number}`;

    const rickAndMortyHTPP = axios.create({
        baseURL: `https://rickandmortyapi.com/api/location`
    });

    const rickAndMorty2HTPP = axios.create();

    let params = `${number}`;
    let url = "";

    useEffect(() => {
        (async function () {
            await rickAndMortyHTPP.get()
                .then(response => {
                    setInfo(response.data.results)
                    url = response.data.residents;
                })
        })
            ();
    }, [params]);

    return (
        <>
            <div className="container createWrapper">
                <h3 data-aos="fade-right" className='welcomeTitle mt-5'><span className='text-white'>Add a new location</span></h3>
                <form action="" method="post" role="form" autocomplete="off">
                    <div className="my-0 form-container" data-aos="flip-left">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            tabindex="1"
                            className="my-3 form-control"
                            placeholder="location name"
                            autocomplete="off"
                        />
                        <label className="my-3 label-style">Status:</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected disabled>Set the location status...</option>
                            <option value="1">Live</option>
                            <option value="2">Dead</option>
                            <option value="3">Unknown</option>
                        </select>
                        <label className="my-3 label-style">Gender:</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected disabled>Set the location gender...</option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                            <option value="3">Genderles</option>
                            <option value="3">Unknown</option>
                        </select>
                        <label className="my-3 label-style">Species:</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected disabled>Set the location species...</option>
                            <option value="1">Human</option>
                            <option value="2">Alien</option>
                            <option value="3">Humanoid</option>
                            <option value="4">Poopybutthole</option>
                            <option value="5">Mythological</option>
                            <option value="6">Animal</option>
                            <option value="7">Disease</option>
                            <option value="8">Robot</option>
                            <option value="9">Cronenberg</option>
                            <option value="10">Planet</option>
                            <option value="11">Unknown</option>
                        </select>
                        <label className="my-3 label-style">Origin:</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected disabled>Set the location origin...</option>
                            {info.map(location => {
                                return (
                                    <option value={location.name}>{location.name}</option>
                                )
                            })}
                        </select>
                        <label className="my-3 label-style">Last Location:</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected disabled>Set the location...</option>
                            {info.map(location => {
                                return (
                                    <option value={location.name}>{location.name}</option>
                                )
                            })}
                        </select>
                        <div className="col-xs-5 mt-5 pull-right">
                            <input
                                type="submit"
                                name="create-submit"
                                id="create-submit"
                                tabindex="6"
                                className="form-control btn createLocationBtn"
                                value="Create"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreateCharacter
