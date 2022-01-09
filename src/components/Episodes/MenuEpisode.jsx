import React from 'react'

export function MenuEpisode({ functional, value, }) {
    return (
        <select className="form-select" onClick={functional}>
            {
                value.map((e, index) => (
                    <option id={index}>Episode {e}</option>
                ))
            }
        </select>
    )
}
