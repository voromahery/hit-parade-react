import React, { useContext, useState, useEffect } from "react";
import { Context } from "../Context";
import deleteIcon from "../icons/delete.svg";

function CartSong() {
  const { cartItem, removeFromCart, setCartItem } = useContext(Context);
  const [buttonText, setButtonText] = useState("Buy");
  const totalPrice = cartItem.reduce((acc, item) => acc + item.price, 0);

  function buySongs() {
    setButtonText("Buying...");
    setTimeout(() => {
      setCartItem([]);
      if (cartItem.length === 0 || cartItem.length === 1) {
        // console.log(`You bought a song for ${totalPrice} Ar`);
        alert(`You bought a song for ${totalPrice} Ar`);
      } else {
        // console.log(`You bought songs for ${totalPrice} Ar`);
        alert(`You bought songs for ${totalPrice} Ar`);
      }
      setButtonText("Buy");
    }, 2000);
  }

  return (
    <div className="card-container">
      {cartItem.map((cart) => (
        <div className="card" key={cart.id}>
          <img
            src={deleteIcon}
            alt=""
            id={cart.id}
            onClick={() => removeFromCart(cart.id)}
            className="delete"
          />
          <div>
            <h3>{cart.title}</h3>
            <span>{cart.artist}</span>
          </div>
          <span className="price">{cart.price} Ar</span>
        </div>
      ))}
      <div>
        {cartItem.length > 0 && (
          <button onClick={buySongs}>{buttonText}</button>
        )}
        <h3>
          <span className="total">Total:</span> {totalPrice}Ar
        </h3>
      </div>
    </div>
  );
}

export default CartSong;
