import React, { useState, useEffect } from 'react';
import arrow from "../assets/img/arrow.svg";
import { MainTarget } from '../components/maintarget';


export function Main() {
    
    let [results, setResults] = useState([]);
    let [search, setSearch] = useState('');
    let [status, setStatus] = useState('');
    let [species, setSpecies] = useState('');
    let [gender, setGender] = useState('');
    let [characterPage, setCharacterPage] = useState(1);
    let api = `https://rickandmortyapi.com/api/character?page=${characterPage}&name=${search}&status=${status}&species=${species}&gender=${gender}`
    useEffect(() => {
        (async function () {
            fetch(api)
                .then((response) => response.json())
                .then((data) => setResults(data.results));
        })()
    }, [api])
    const refreshPage = () => {
        window.location.reload();
    }
    function suma() {
        if (characterPage === 42)
            setCharacterPage(1);
        else {
            setCharacterPage(++characterPage)
        }
    }
    function resta() {
        if (characterPage > 1)
            setCharacterPage(--characterPage)
    }
    return (
        <main className="main">
            <h1>Characters</h1>
            <div className="main-search">
                <div className="main-clear">
                    <h2>Filters</h2>
                    <span onClick={refreshPage}>Clear filters</span>
                </div>
                <div className="main-search-target">
                    <input type="search" name="" id="search" placeholder="Search a Character" onChange={(event) => { setSearch(event.target.value) }} />
                    <button id="search-button">Search</button>
                </div>
            </div>
            <div div className="main-content">
                <div className="main-filter">
                    <div>
                        <h4>Status</h4>
                        <label for="status">Alive <input type="radio" name="status" id="" value="alive" onClick={(event) => { setStatus(event.target.value) }} /></label>
                        <label for="status">Dead <input type="radio" name="status" id="" value="dead" onClick={(event) => { setStatus(event.target.value) }} /></label>
                        <label for="status">Unknown <input type="radio" name="status" id="" value="unknown" onClick={(event) => { setStatus(event.target.value) }} /></label>
                    </div>
                    <div>
                        <h4>Species</h4>
                        <label for="species">Human <input type="radio" name="species" id="" value="human" onClick={(event) => { setSpecies(event.target.value) }} /></label>                        
                        <label for="species">Alien <input type="radio" name="species" id="" value="alien" onClick={(event) => { setSpecies(event.target.value) }} /></label>                        
                        <label for="species">Unknown <input type="radio" name="species" id="" value="unknown" onClick={(event) => { setSpecies(event.target.value) }} /></label>
                    </div>
                    <div>
                        <h4>Gender</h4>
                        <label for="gender">Male <input type="radio" name="gender" id="" value="male" onClick={(event) => { setGender(event.target.value) }} /></label>                        
                        <label for="gender">Female<input type="radio" name="gender" id="" value="female" onClick={(event) => { setGender(event.target.value) }} /></label>                        
                        <label for="gender">Unknown<input type="radio" name="gender" id="" value="unknown" onClick={(event) => { setGender(event.target.value) }} /></label>
                    </div>
                </div>
                <MainTarget
            results={results}
            search={search}
                />
            
            <div className="main-following">
                <img className='arrowback' src={arrow} alt="" onClick={() => { resta() }} />
                <img className='arrowfollowing' src={arrow} alt="" onClick={() => { suma() }} />
            </div>
            </div>
        </main>
    )
}
