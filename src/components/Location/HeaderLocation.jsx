import React from 'react'

export function HeaderLocation({name, type}) {
    return (
        <div>
    <h1 className="">Location: <span className=''>{name}</span></h1>
    <h4 className="">Type: {type}</h4>
</div>
    )
}
