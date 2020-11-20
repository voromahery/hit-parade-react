import React, { useState, useEffect } from 'react';
const Context = React.createContext();
import dataList from './songs.json'; 

export default function ContextProvider(props) {
    const [songs, setSongs] = useState([]);
// async function songData() {
//     const response = await fetch(dataList);
//     const data = await response.json();
//     console.log(data);
//     setSongs(data);
// }

// useEffect(() => {
//   songData();
// }, [])

    return (
        <div>
            <Context.Provider value={{songs, setSongs}}>
                {props.children}
            </Context.Provider>
        </div>
    )
}

export { ContextProvider, Context }

