import React, { useState } from 'react';
const Context = React.createContext();

export default function ContextProvider(props) {
 
    return (
        <div>
            <Context.Provider value={""}>
                {props.children}
            </Context.Provider>
        </div>
    )
}

export { ContextProvider, Context }

