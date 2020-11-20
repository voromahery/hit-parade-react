import React, { useContext } from 'react'
import { Context } from '../Context.js';

function SongsList() {
    const { songs } = useContext(Context);
    console.log(songs, "SONGS");
    return (
        <div>
            {songs.map((song, index) => (
                <div key={index}>
                    <span>💛</span>
                    <div>
                        <h3>{song.title}</h3>
                        <span>{song.artist}</span>
                    </div>
                    <span>0</span>
                    <span>0</span>
                    <span>Cart</span>
                    <p>{song.lyric}</p>
                </div>
            )
            )}
        </div>
    )
}
export default SongsList;