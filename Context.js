import React, { useState, useEffect } from 'react';
import data from './songData';
const Context = React.createContext();

export default function ContextProvider(props) {
    const [songs, setSongs] = useState([]);
    const [isFavorite, setIsFavorite] = useState(false);
    const [songStyle, setSongStyle] = useState([]);
    function songsDATA() {
        setSongs(data)
        // setSongStyle([{style: data.style}]);
    }

function favorited() {
    setIsFavorite(true);
    console.log('favorite');
}

    useEffect(() => {
        songsDATA();
    }, [])

    return (
        <div>
            <Context.Provider value={{ songs, setSongs, songStyle, setSongStyle, isFavorite, setIsFavorite, favorited }}>
                {props.children}
            </Context.Provider>
        </div>
    )
}

export { ContextProvider, Context }

