import React from 'react'

export function MenuLocation({ functional, value }) {
    return (
        <select className="form-select" onClick={functional}>
            {
                value.map((e, index) => (
                    <option id={index}>Location: {e}</option>
                ))
            }
        </select>
    )
}
