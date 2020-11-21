import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from './../Context';
import data from './../songData';

function Lyric() {
    const { songs } = useContext(Context);
    const { id } = useParams();
    const songLyrics = songs.find(song => song.id === Number(id)) || data.find(song => song.id === Number(id));
    console.log(songLyrics, songs);
    return (
        <div>
            <h1>{`${songLyrics.artist}: ${songLyrics.title}`}</h1>
            <div className="lyric-card">
                <h3>Lyric</h3>
                <div>{songLyrics.lyric}</div>
            </div>
        </div>
    )
}
export default Lyric;