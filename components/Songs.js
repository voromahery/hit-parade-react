import React, { useState, useContext } from 'react';
import { Context } from '../Context';
import favoriteIcon from '../icons/favorite-fill.svg';
import unfavoriteIcon from '../icons/favorite-line.svg';

function Songs({ song, removeScore, addScore }) {
const {favorited} = useContext(Context)


function addHeartIcon() {
    if (song.favorite) {
        return <img src={favoriteIcon} className="favorite" alt="" onClick={favorited}/>
    } else {
        return <img src={unfavoriteIcon} className="favorite" alt="" onClick={favorited}/>
    }
}

    return (
        <div>
            <div className="card">
                {addHeartIcon()}
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
                <p>Lyric</p>
            </div>
        </div>
    )
}

export default Songs;