import React, { useContext, useState } from 'react';
import { Context } from '../Context';
import deleteIcon from '../icons/delete.svg';

function CartSong() {
    const { cartItem, removeFromCart, setCartItem } = useContext(Context);
     const total = 0;
    function buySongs() {
        setTimeout(() => {
            setCartItem([]);
            if (cartItem.length === 0 || cartItem.length === 1) {
                console.log("You bought a song for ...");
            } else {
                console.log("You bought songs for ...");
            }
        }, 2000)
    }

    const totalPrice = cartItem.reduce((acc, val) => {
        return
    })

    return (
        <div className="card-container">
            {cartItem.map(cart =>
                <div className="card" key={cart.id}>
                    <img src={deleteIcon} alt="" id={cart.id} onClick={() => removeFromCart(cart.id)} className="delete" />
                    <div>
                        <h3>{cart.title}</h3>
                        <span>{cart.artist}</span>
                    </div>
                    <span className="price">{cart.price}</span>
                </div>)}
            <div>
                {cartItem.length > 0 && <button onClick={buySongs}>Buy</button>}
                <h3>Total: </h3>
            </div>
        </div>
    )
}

export default CartSong;