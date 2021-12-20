import React, { useState, useEffect } from 'react';
import arrow from "../assets/img/arrow.svg";

export function Main() {
    function toLowerCase(textToEdit) {
        return textToEdit.toLowerCase();
    }
    let [results, setResults] = useState([]);
    let [search, setSearch] = useState('');
    let [status, setStatus] = useState('');
    let [species, setSpecies] = useState('');
    let [gender, setGender] = useState('');
    let characterPage = 1;
    let api = `https://rickandmortyapi.com/api/character?page=${characterPage}&name=${search}&status=${status}&species=${species}&gender=${gender}`
    useEffect(() => {
        (async function () {
            fetch(api)
                .then((response) => response.json())
                .then((data) => setResults(data.results));
        })()
    }, [api])
    // const refreshPage = () => {
    //     window.location.reload();
    // }
    let clearFilters = e => {
        setStatus('');
        setGender('');
        setSpecies('');
    }
    return (
        <main className="main">
            <h1>Characters</h1>
            <div className="main-search">
                <div className="main-clear">
                    <h2>Filters</h2>
                    <span onClick={clearFilters}>Clear filters</span>
                </div>
                <div className="main-search-target">
                    <input type="search" name="" id="search" placeholder="Search a Character" onChange={(event) => { setSearch(event.target.value) }} />
                    <button id="search-button">Search</button>
                </div>
            </div>
            <div className="main-content">
                <div className="main-filter">
                    <div>Status
                        <input type="radio" name="status" id="" value="alive" onClick={(event) => { setStatus(event.target.value) }} />
                        <label for="status"></label>
                        <input type="radio" name="status" id="" value="dead" onClick={(event) => { setStatus(event.target.value) }} />
                        <input type="radio" name="status" id="" value="unknown" onClick={(event) => { setStatus(event.target.value) }} />
                    </div>
                    <div>Species
                        <input type="radio" name="species" id="" value="human" onClick={(event) => { setSpecies(event.target.value) }} />
                        <input type="radio" name="species" id="" value="alien" onClick={(event) => { setSpecies(event.target.value) }} />
                        <input type="radio" name="species" id="" value="unknown" onClick={(event) => { setSpecies(event.target.value) }} />
                    </div>
                    <div>Gender
                        <input type="radio" name="gender" id="" value="male" onClick={(event) => { setGender(event.target.value) }} />
                        <input type="radio" name="gender" id="" value="female" onClick={(event) => { setGender(event.target.value) }} />
                        <input type="radio" name="gender" id="" value="unknown" onClick={(event) => { setGender(event.target.value) }} />
                    </div>
                </div>
                <div className="main-target">
                    {results ? results.map((personaje) =>
                    (<article className="main-character">
                        <div className="main-img">
                            <img src={personaje.image} alt="" />
                        </div>
                        <h2>{personaje.name}</h2>
                        <h3>{personaje.location.name}</h3>
                        <div>
                            <p className={toLowerCase(personaje.status)}>{personaje.status}</p>
                        </div>
                    </article>)) :
                        (
                            <p>We couldn't find any results for <span className="couldn-find">"{search}"</span></p>
                        )}
                </div>
            </div>
            <div className="main-following">
                <img className='arrowback' src={arrow} alt="" />
                <img className='arrowfollowing' src={arrow} alt="" />
            </div>
        </main>
    )
}

