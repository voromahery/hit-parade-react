import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context';

function SongStyle() {
    const { songs } = useContext(Context)

    return (
        <div>
            <ul>
                {songs.map((style, index) =>
                <div key={index}>
                    <Link to={`./style/${style.style}`}>
                        <li >{style.style}</li>
                    </Link>
                    </div>
                    )}
            </ul>
        </div>
    )
}
export default SongStyle;