import React, { useState } from 'react';
const Context = React.createContext();

export default function ContextProvider(props) {
    const [songs, setSongs] = useState([]);
    return (
        <div>
            <Context.Provider value={{songs, setSongs}}>
                {props.children}
            </Context.Provider>
        </div>
    )
}

export { ContextProvider, Context }

