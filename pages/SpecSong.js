import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from './../Context';
import data from './../songData';

function SpecSong() {
    const { songs } = useContext(Context);
    const { songId } = useParams();
    const specificSong = songs.find(song => song.id === Number(songId)) || data.find(song => song.id === Number(songId));
    console.log(specificSong);
    return (
        <div>
            {specificSong === undefined ? "No Lyric avalilable!😢":
            <div>
                <h1>{`${specificSong.artist}: ${specificSong.title}`}</h1>
                <div className="lyric-card">
                    <h3>Lyric</h3>
                    <pre>{specificSong.lyric || ''}</pre>
                </div>
            </div>
}
        </div>
    )
}
export default SpecSong;