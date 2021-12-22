import React from 'react'

export function HeaderEpisode({name, airDate}) {
    return (
        <div>
            <h1 className="">Episode: <span className=''>{name}</span></h1>
            <h4 className="">Air Date {airDate}</h4>
        </div>
    )
}
