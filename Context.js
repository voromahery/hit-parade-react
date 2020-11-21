import React, { useState, useEffect } from 'react';
import data from './songData';
const Context = React.createContext();

export default function ContextProvider(props) {
    const [songs, setSongs] = useState([]);
    const [songStyle, setSongStyle] = useState([]);
    const [cartItem, setCartItem] = useState([]);

    function songsDATA() {
        setSongs(data)
        // setSongStyle([{style: data.style}]);
    }

    function toggleFavorite(id) {
        const songsArray = songs.map(song => {
            if (song.id === id) {
                // Update this element 
                return {
                    ...song,
                    favorite: !song.favorite,
                }
            };
            return song;
        })
        setSongs(songsArray);
    }

    useEffect(() => {
        songsDATA();
    }, [])

    // Add item to the cart
    function addToCart(newSong) {
        setCartItem(prevItem => [...prevItem, newSong]);
    }

    function removeFromCart(id) {
        setCartItem(prevItem => prevItem.filter(item => item.id !== id));
    }

    return (
        <div>
            <Context.Provider value={{
                songs,
                setSongs,
                songStyle,
                setSongStyle,
                toggleFavorite,
                cartItem,
                setCartItem,
                addToCart,
                removeFromCart
            }}
            >
                {props.children}
            </Context.Provider>
        </div>
    )
}

export { ContextProvider, Context }

