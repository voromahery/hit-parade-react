import React, { useContext } from 'react'
import { Context } from './../Context';
import { useParams } from 'react-router-dom';
import data from './../songData';

function Style() {
    const { songs } = useContext(Context);
    const { styleName } = useParams();
    const styleSong = songs.filter(song => song.style == styleName);
    console.log(styleName, styleSong);
    return (
        <div>
            {styleSong.map(song =>
                <div key={song.id}>
                    <h3>{song.artist}</h3>
                    <span>{song.style}</span>
                </div>
            )}
        </div>
    )
}

export default Style;