import React from 'react'

export function HeaderEpisode({name, airDate}) {
    return (
        <div>
            <h1>Episode: <span className='Episode-Title'>{name}</span></h1>
            <h4>Air Date {airDate}</h4>
        </div>
    )
}
