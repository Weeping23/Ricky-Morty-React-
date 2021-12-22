import React, { useState, useEffect } from 'react';
import { Menu } from '../components/menu';
import { HeaderEpisode } from '../components/headerepisodes'
import { MainTarget } from '../components/maintarget';

export function Episodes() {
    let [results, setResults] = useState([]);
    let [characters, setCharacters] = useState([])
    let [episode, setEpisode] = useState(1);
    let [episodeIndex, setEpisodeIndex] = useState(0);
    let api = `https://rickandmortyapi.com/api/episode/${episode}`

    let AllEpisodes = [];
    (() => {
        for (let i = 1; i < 52; i++) {
            AllEpisodes.push(i)
        }
    })()
    function ChangeEpisode(event) {
        let str = event.target.value;
        let num = str.match(/\d+/g);
        setEpisode(num)
    }
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
return (
    <main className='main'>
        <HeaderEpisode
            name={results.name}
            airDate={results.air_date}
        /><div className='main-con'>
            <div className='episodes'>
                <h4>Pick Episode</h4>
                <Menu
                    functional={ChangeEpisode}
                    name={AllEpisodes[episodeIndex]}
                    value={AllEpisodes}
                />
                </div>
            
    <MainTarget
        results={characters}
    /></div>
        
    </main>
)
}
