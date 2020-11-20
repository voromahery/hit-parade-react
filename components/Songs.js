import React, {useState} from 'react'

function Songs({song, removeScore, addScore}) {

    return (
        <div>
            <div className="card">
                <span></span>
                <div>
                    <h3>{song.title}</h3>
                    <span>{song.artist}</span>
                </div>
                <span>{song.scoreUp}
                    <button onClick={addScore} id={song.id}>Add</button>
                </span>
                <span>{song.scoreDown}
                        <button onClick={removeScore} id={song.id}>remove</button>
                </span>
                <span>Cart</span>
                <p>{song.lyric}</p>
            </div>
        </div>
    )
}

export default Songs;