import React, { useState, useEffect } from "react";
import data from "./songData";
const Context = React.createContext();

export default function ContextProvider(props) {
  const [songs, setSongs] = useState([]);
  const [songStyle, setSongStyle] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [styles] = useState([
    "Rock",
    "R&B",
    "Afrotrap",
    "Slow",
    "Kawitry",
    "Rap",
    "Soul",
    "Pop",
  ]);

  function toggleFavorite(id) {
    // Recreate a whole new state array
    const songsArray = songs.map((song) => {
      if (song.id === id) {
        // Update the state in an immutable way
        return {
          ...song,
          favorite: !song.favorite,
        };
      }
      return song;
    });
    // Set it into state
    setSongs(songsArray);
  }

  useEffect(() => {
    setSongs(data);
  }, []);

  // Add item to the cart
  function addToCart(newSong) {
    setCartItem((prevItem) => [...prevItem, newSong]);
  }

  function removeFromCart(id) {
    setCartItem((prevItem) => prevItem.filter((item) => item.id !== id));
  }

  useEffect(() => {
    const lsSong = JSON.parse(localStorage.getItem("songs"));
    lsSong ? setSongs(lsSong) : setSongs(data);

    const lsCartItem = JSON.parse(localStorage.getItem("cartItem"));
    lsCartItem && setCartItem(lsCartItem);
  }, []);

  useEffect(() => {
    localStorage.setItem("songs", JSON.stringify(songs));
  }, [songs]);

  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
  }, [cartItem]);

  return (
    <div>
      <Context.Provider
        value={{
          songs,
          setSongs,
          songStyle,
          setSongStyle,
          toggleFavorite,
          cartItem,
          setCartItem,
          addToCart,
          removeFromCart,
          styles,
        }}
      >
        {props.children}
      </Context.Provider>
    </div>
  );
}

export { ContextProvider, Context };
