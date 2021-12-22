//**INSTANCIO LOS ESTADOS: INICIAL, DESPUES DE MODIFICAR */
import React, { useState, useEffect } from 'react';
//**IMAGENES */
import arrow from "../assets/img/arrow.svg";
//**IMPORTO COMPONENTES*/
import { CharacterTarget } from '../components/Characters/CharacterTarget';
import { CharacterSearch } from '../components/Characters/CharacterSearch';
import { Filters } from '../components/Characters/Filters';
//**FUNCIÓN MATRIZ*/
export function Characters() {
    //**DECLARO VARIABLE COMO STRING*/ 
    let [results, setResults] = useState([]);
    //** *   ESTABLEZCO UN ESTADO INICIAL VACIO CON VARIABLES
    let [search, setSearch] = useState('');
    let [status, setStatus] = useState('');
    let [species, setSpecies] = useState('');
    let [gender, setGender] = useState('');
    //* ESTABLEZCO NUMERO DE PÁGINA INICIAL */
    let [characterIndex, setCharacterIndex] = useState(1);
    //* TOMO RUTAS DE MI API Y LA ADENTRO EN UNA VARIABLE */
    let api = `https://rickandmortyapi.com/api/character?page=${characterIndex}&name=${search}&status=${status}&species=${species}&gender=${gender}`
    //** FUNCIÓN ASÍNCRONA SIMPLE */
    useEffect(() => {
        (async function () {
            fetch(api)
                .then((response) => response.json())
                .then((data) => setResults(data.results));
        })()
    }, [api])
    //** RECARGAR PÁGINA */
    const refreshPage = () => {
        window.location.reload();
    }
    //** PROPS FUNCTION */
    function changeStatus(event) {
        setStatus(event.target.value);
    }
    function changeGender(event){
        setGender(event.target.value);
    }
    function changeSpecies(event){
        setSpecies(event.target.value);
    }
    function searchChange(event) {
        setSearch(event.target.value);
    }
    //** FUNCIONES CON CONDICIONES (operadores lógicos)*/
    function suma() {
        if (characterIndex === 42)
            setCharacterIndex(1);
        else {
            setCharacterIndex(++characterIndex);
        }
    }
    function resta() {
        if (characterIndex > 1)
            setCharacterIndex(--characterIndex);
    }
    //** RETORNA EN MAIN */
    return (
        <main className="main">
            <h1>Characters</h1>
            <CharacterSearch
                ClearFilter={refreshPage}
                SearchFunction={searchChange}
            />
            <div className="main-content">
                <Filters
                    StatusFilter={changeStatus}
                    StatusGender={changeGender}
                    StatusSpecies={changeSpecies}
                />
                <CharacterTarget
                    results={results}
                    search={search}
                />
            </div>
            <div className="main-following">
                <img className='arrowback' src={arrow} alt="" onClick={() => { resta() }} />
                <img className='arrowfollowing' src={arrow} alt="" onClick={() => { suma() }} />
            </div>
        </main >
    )
}

