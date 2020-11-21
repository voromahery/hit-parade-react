import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Context } from '../Context';
import data from './../songData';

function SongStyle() {
    const { songs } = useContext(Context);
    console.log(data, songs);
    return (
        <div>
            <ul>
                {songs.map(song =>
                    <li key={song.id}>
                        <Link to={`/style/${song.style}`}>
                            <div>{song.style}</div>
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}
export default SongStyle;