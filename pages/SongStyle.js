import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Context } from '../Context';
import data from './../songData';

function SongStyle() {
    const { songs } = useContext(Context);
    const [style] = useState(["Rock", "R&B", "Afrotrap", "Slow", "Kawitry", "Rap"]);
    console.log(data, songs);
    return (
        <div>
            <ul className="style-list">
                {style.map(song =>
                    <li key={song}>
                        <Link to={`/style/${song}`}>
                            <div>{song}</div>
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}
export default SongStyle;