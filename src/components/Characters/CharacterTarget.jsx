import React from 'react'

export function CharacterTarget ({results, search, addToCart}) {
    function toLowerCase(textToEdit) {
        return textToEdit.toLowerCase();
    }
    return (
        <div className="main-target">
                    {results ? results.map((personaje) =>
                    (<article className="main-character">
                        <div className="main-img">
                            <img src={personaje.image} alt="" />
                        </div>
                        <h2>{personaje.name}</h2>
                        <h3>{personaje.location.name}</h3>
                        <div>
                            <p className={toLowerCase(personaje.status)}>{personaje.status}</p>
                        </div>
                        <div>
                            <button onClick={addToCart} className="buy">Add to cart</button>
                        </div>
                    </article>)) :
                        (
                            <p>We couldn't find any results for <span className="couldn-find">"{search}"</span></p>
                        )}
                </div>
    )
}
