import React, { useState, useContext } from 'react';
import { Context } from '../Context';
import favoriteIcon from '../icons/favorite-fill.svg';
import heartIcon from '../icons/favorite-line.svg';
import addCartIcon from '../icons/cart-fill.svg';
import cartIcon from '../icons/cart-line.svg';
import upIcon from '../icons/upscore.svg';
import downIcon from '../icons/downscore.svg';

function Songs({ song, removeScore, addScore }) {
    const { toggleFavorite, cartItem, addToCart, removeFromCart } = useContext(Context)

    function addHeartIcon() {
        if (song.favorite) {
            return <img src={favoriteIcon} className="favorite" alt="" onClick={() => toggleFavorite(song.id)} />
        } else {
            return <img src={heartIcon} className="favorite" alt="" onClick={() => toggleFavorite(song.id)} />
        }
    }

    function addCart() {
        if (cartItem.some(cart => cart.id === song.id)) {
            return <img src={addCartIcon} className="add-cart" alt="" id={song.id} onClick={() => removeFromCart(song)} />
        } else {
            return <img src={cartIcon} className="add-cart" alt="" onClick={() => addToCart(song)} />
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
                <span className="score">{song.scoreUp}
                    <img src={upIcon} alt="upscore" onClick={addScore} id={song.id} />
                </span>
                <span className="score">{song.scoreDown}
                    <img src={downIcon} alt="downscore" onClick={removeScore} id={song.id} />
                </span>
                {addCart()}
                <p>...</p>
            </div>
        </div>
    )
}

export default Songs;