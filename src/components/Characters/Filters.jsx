import React from 'react'

export function Filters({
    StatusFilter,
    StatusGender,
    StatusSpecies
}) {
    return (
        <div className="main-filter">
            <div>
                <h4>Status</h4>
                <label for="status">Alive<input type="radio" name="status" id="" value="alive" onClick={StatusFilter} /></label>
                <label for="status">Dead<input type="radio" name="status" id="" value="dead" onClick={StatusFilter} /></label>
                <label for="status">Unknown<input type="radio" name="status" id="" value="unknown" onClick={StatusFilter} /></label>
            </div>
            <div>
                <h4>Species</h4>
                <label for="species">Human<input type="radio" name="species" id="" value="human" onClick={StatusSpecies} /></label>
                <label for="species">Alien<input type="radio" name="species" id="" value="alien" onClick={StatusSpecies} /></label>
                <label for="species">Unknown<input type="radio" name="species" id="" value="unknown" onClick={StatusSpecies} /></label>
            </div>
            <div>
                <h4>Gender</h4>
                <label for="gender">Male<input type="radio" name="gender" id="" value="male" onClick={StatusGender} /></label>
                <label for="gender">Female<input type="radio" name="gender" id="" value="female" onClick={StatusGender} /></label>
                <label for="gender">Unknown<input type="radio" name="gender" id="" value="unknown" onClick={StatusGender} /></label>
            </div>
        </div>
    )
}
