import React, { useContext } from 'react';
import { Context } from '../Context';
import deleteIcon from '../icons/delete.svg';

function CartSong() {
    const { cartItem, removeFromCart } = useContext(Context);

    // function deletefromCart() {

    // }

    return (
        <div className="card-container">
            {cartItem.map(cart =>
                <div className="card" key={cart.id}>
                    <img src={deleteIcon} alt="" id={cart.id} onClick={() => removeFromCart(cart.id)}  className="delete"/>
                    <div>
                        <h3>{cart.title}</h3>
                        <span>{cart.artist}</span>
                    </div>
                    <span className="price">{cart.price}</span>
                </div>)}
        </div>
    )
}

export default CartSong;