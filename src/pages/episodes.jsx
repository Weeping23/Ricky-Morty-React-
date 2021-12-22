import React, { useState, useEffect } from 'react';
//**COMPONENTES */
import { MenuEpisode } from '../components/Episodes/MenuEpisode';
import { HeaderEpisode } from '../components/Episodes/HeaderEpisode'
import { CharacterTarget } from '../components/Characters/CharacterTarget';
//**FUNCIÓN MATRIZ */
export function Episodes() {
    let [results, setResults] = useState([]);
    let [characters, setCharacters] = useState([])
    let [episode, setEpisode] = useState(1);
    let [episodeIndex] = useState(0);
    let api = `https://rickandmortyapi.com/api/episode/${episode}`
    let AllEpisodes = [];
    //** BUCLE FOR*/
    (() => {
        for (let i = 1; i < 52; i++) {
            AllEpisodes.push(i)
        }
    })()
    //** CAPTURA UN EVENTO Y DEVUELVE OBJETO ARRAY */
    function ChangeEpisode(event) {
        let str = event.target.value;
        let num = str.match(/\d+/g);
        setEpisode(num)
    }
    //** FUNCIÓN ASÍNCRONAS CON DOS VARIABLES */
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(api);
                const data = await response.json();
                setResults(data);
                let characters = await Promise.all(data.characters.map((url) => {
                    return fetch(url).then(response => response.json())
                }))
                setCharacters(characters)
            } catch (error) { }
        })();
    }, [api]);
    //**RETORNA A MAIN */
    return (
        <main className='main'>
            <HeaderEpisode
                name={results.name}
                airDate={results.air_date}
            />
            <div className='main-con'>
                <div className='episodes'>
                    <h4>Pick Episode</h4>
                    <MenuEpisode
                        functional={ChangeEpisode}
                        name={AllEpisodes[episodeIndex]}
                        value={AllEpisodes}
                    />
                </div>
                <CharacterTarget
                    results={characters}
                />
                </div>
        </main>
    )
}
