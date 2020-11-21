import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from './../Context';
import data from './../songData';

function Lyric() {
    const { songs } = useContext(Context);
    const { songLyric } = useParams();
    const songLyrics = songs.find(song => song.id === Number(songLyric)) || data.find(song => song.id === Number(songLyric) || "");
    return (
        <div>
            <div className="lyric-card">
                <h3>Lyric</h3>
                <div>{songLyrics.lyric || ["No lyric available!😢"]}</div>
            </div>
        </div>
    )
}
export default Lyric;