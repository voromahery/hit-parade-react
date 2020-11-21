import React, { useState, useEffect } from 'react';
import data from './songData';
const Context = React.createContext();

export default function ContextProvider(props) {
    const [songs, setSongs] = useState([]);
    const [songStyle, setSongStyle] = useState([]);
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
                    isFavorite: !song.favorite,
                }
            };
            console.log(song,song.id);
            return song;
        })
        setSongs(songsArray);
    }

    useEffect(() => {
        songsDATA();
    }, [])

    return (
        <div>
            <Context.Provider value={{ songs, setSongs, songStyle, setSongStyle, toggleFavorite }}>
                {props.children}
            </Context.Provider>
        </div>
    )
}

export { ContextProvider, Context }

