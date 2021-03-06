import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CreateCharacter.css"

function CreateCharacter() {
    let [info, setInfo] = useState([]);
    let [number, setNumber] = useState(1);

    const rickAndMortyHTPP = axios.create({
        baseURL: `https://rickandmortyapi.com/api/location`
    });

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
                <h3 data-aos="fade-right" className='newCharacterTitle mt-5'><span className='text-white'>Add a new character</span></h3>
                <form action="" method="post" role="form" autocomplete="off">
                    <div className="my-0 form-container" data-aos="flip-left">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            tabindex="1"
                            className="my-3 form-control"
                            placeholder="Character name"
                            autocomplete="off"
                        />
                        <label className="my-3 label-style">Status:</label>
                        <select className="form-select" aria-label="Default select example">
                            <option selected disabled>Set the character status...</option>
                            <option value="1">Live</option>
                            <option value="2">Dead</option>
                            <option value="3">Unknown</option>
                        </select>
                        <label className="my-3 label-style">Gender:</label>
                        <select className="form-select" aria-label="Default select example">
                            <option selected disabled>Set the character gender...</option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                            <option value="3">Genderles</option>
                            <option value="3">Unknown</option>
                        </select>
                        <label className="my-3 label-style">Species:</label>
                        <select className="form-select" aria-label="Default select example">
                            <option selected disabled>Set the character species...</option>
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
                        <select className="form-select" aria-label="Default select example">
                            <option selected disabled>Set the character origin...</option>
                            {info.map(location => {
                                return (
                                    <option value={location.name}>{location.name}</option>
                                )
                            })}
                        </select>
                        <label className="my-3 label-style">Last Location:</label>
                        <select className="form-select" aria-label="Default select example">
                            <option selected disabled>Set the character location...</option>
                            {info.map(location => {
                                return (
                                    <option value={location.name}>{location.name}</option>
                                )
                            })}
                        </select>
                        <div className="col-xs-5 mt-5 pull-right d-flex justify-content-center">
                            <input
                                type="submit"
                                name="create-submit"
                                id="create-submit"
                                tabindex="6"
                                className="form-control btn createBtn"
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
