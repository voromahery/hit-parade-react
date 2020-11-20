import React, { useContext, useState } from 'react'
import { Context } from '../Context.js';
import Songs from './../components/Songs';

function SongsList() {
    const { songs } = useContext(Context);

    return (
        <div className="card-container">
            {songs.map((song) => (
                <Songs
                    song={song}
                    key={song.id}
                    songId={song.id}
                />
            )
            )}
        </div>
    )
}
export default SongsList;