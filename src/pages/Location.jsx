import React, { useState, useEffect } from 'react';
//**COMPONENTES */
import { HeaderLocation } from '../components/Location/HeaderLocation';
import { MainTargetLocation } from '../components/Location/MainTargetLocation';
import { MenuLocation } from "../components/Location/MenuLocation";
//**FUNCIÓN MATRIZ */
export function Location() {
    //**VARIABLES */
    let [results, setResults] = useState([]);
    let [characters, setCharacters] = useState([])
    let [location, setLocation] = useState(1);
    let [locationIndex] = useState(0);
    let api = `https://rickandmortyapi.com/api/location/${location}`
    let AllLocation = [];
    //** BUCLE FOR*/
    (() => {
        for (let i = 1; i < 126; i++) {
            AllLocation.push(i)
        }
    })()
    //** CAPTURA UN EVENTO Y DEVUELVE OBJETO ARRAY */
    function ChangeLocation(event) {
        let str = event.target.value;
        let num = str.match(/\d+/g);
        setLocation(num)
    }
    //** FUNCIÓN ASÍNCRONAS CON DOS VARIABLES */
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(api);
                const data = await response.json();
                setResults(data);
                let characters = await Promise.all(data.residents.map((url) => {
                    return fetch(url).then(response => response.json())
                }))
                setCharacters(characters)
            } catch (error) { }
        })();
    }, [api]);
    //**RETORNA A MAIN */
    return (
        <main className='main'>
            <HeaderLocation
                name={results.name}
                type={results.type}
            />
            <div className='main-con'>
                <div className='episodes'>
                    <h4>Pick Location</h4>
                    <MenuLocation
                        functional={ChangeLocation}
                        name={AllLocation[locationIndex]}
                        value={AllLocation}
                    />
                </div>

                <MainTargetLocation
                    results={characters}
                />
            </div>
        </main>
    )
}
