import React from 'react'

export function CharacterSearch({ClearFilter, SearchFunction}) {
    
    return (
        <div className="main-search">
        <div className="main-clear">
            <h2>Filters</h2>
            <span onClick={ClearFilter}>Clear filters</span>
        </div>
        <div className="main-search-target">
            <input type="search" name="" id="search" placeholder="Search a Character" onChange={SearchFunction} />
            <button id="search-button">Search</button>
        </div>
    </div>
    )
}
