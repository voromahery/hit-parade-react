import React, { useState, useContext } from 'react';
import { Context } from '../Context';
import favoriteIcon from '../icons/favorite-fill.svg';
import heartIcon from '../icons/favorite-line.svg';
import addCartIcon from '../icons/cart-fill.svg';
import cartIcon from '../icons/cart-line.svg';
import upIcon from '../icons/upscore.svg';
import downIcon from '../icons/downscore.svg';
import lyricIcon from '../icons/lyric.svg';
import { Link } from 'react-router-dom';

function Songs({ song, removeScore, addScore }) {
    const { toggleFavorite, cartItem, addToCart, removeFromCart } = useContext(Context);

    function addHeartIcon() {
        if (song.favorite) {
            return <img src={favoriteIcon} className="favorite" alt="heart" onClick={() => toggleFavorite(song.id)} />
        } else {
            return <img src={heartIcon} className="favorite" alt="heart" onClick={() => toggleFavorite(song.id)} />
        }
    }

     function addCart() {
         if (cartItem.some(cart => cart.id === song.id)) {
             return <img src={addCartIcon} className="add-cart" alt="" id={song.id} onClick={() => removeFromCart(song.id)} />
         } else {
             return <img src={cartIcon} className="add-cart" alt="" id={song.id} onClick={() => addToCart(song)} />
         }
     }

    return (
        <div>
            <div className="card">
                {addHeartIcon(song.id)}
                <div>
                    <Link to={`/song/${song.id}`}>
                        <h3>{song.title}</h3>
                    </Link>
                    <span>{song.artist}</span>
                </div>
                <span className="score">{song.scoreUp}
                    <img src={upIcon} alt="upscore" onClick={addScore} id={song.id} />
                </span>
                <span className="score">{song.scoreDown}
                    <img src={downIcon} alt="downscore" onClick={removeScore} id={song.id} />
                </span>
                {addCart()}
                <div className="lyric">
                    <Link to={`/lyric/${song.id}`}>
                        <img src={lyricIcon} alt="" className="Lyric" id={song.id} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Songs;