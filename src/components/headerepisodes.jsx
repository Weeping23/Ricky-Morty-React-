import React from 'react'

export function HeaderEpisode({name, airDate}) {
    return (
        <div>
            <h1 className="text-center pt-5">Episode: <span className='Episode-Title'>{name}</span></h1>
            <h4 className="text-center">Air Date {airDate}</h4>
        </div>
    )
}
