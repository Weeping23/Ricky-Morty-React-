import React, { useState, useEffect } from 'react';

export function Main() {
    let [results, setResults] = useState([]);
    let [search, setSearch] = useState('');
    /*let status = '?status='*/
    let [status, setStatus] = useState('')
    let api = `https://rickandmortyapi.com/api/location?page=`
    useEffect(() => {
        (async function () {
            fetch(api)
                .then((response) => response.json())
                .then((data) => setResults(data.results));
        })()
    }, [api])

    return (
        <main class="main">
            <h1>Location</h1>
            <div class="main-search">
                <div class="main-clear">
                    <h3>Filters</h3>
                    <span>Clear filters</span>
                </div>
                <div class="main-search-target">

                    <input type="search" name="" id="search" onChange={(event) => { setSearch(event.target.value) }} />
                    <button id="search-button">Search</button>
                </div>
            </div>
            <div class="main-content">
                <div class="main-filter">
                    <div>Status
                        <button onChange={(event)=> { setStatus (event.target.status) }}>live</button>
                        <button>dead</button>
                        <button>unknown</button>
                    </div>
                    <div>Species</div>
                    <div>Gender</div>
                </div>
                <div class="main-target">
                    {results.map((location) => (<article class="main-character">
                        <div class="main-img">
                            <img src="" alt="" />
                        </div>
                        <h2>{location.name}</h2>
                        <h3>{location.location.name}</h3>
                        <div>
                            <p>{location.status}</p>
                        </div>
                    </article>))}
                </div >
            </div>
        </main>
    )
}
