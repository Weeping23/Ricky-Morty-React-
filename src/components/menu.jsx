import React from 'react'

export function Menu({ functional, value }) {
    return (
        <select class="form-select" aria-label="Default select example" onClick={functional}>
            {
                value.map((e, index) => (
                    <option id={index}>Episode {e}</option>
                ))
            }
        </select>
    )
}
