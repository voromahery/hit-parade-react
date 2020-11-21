import React, { useContext } from 'react'
import { Context } from './../Context';
import { useParams } from 'react-router-dom';

function Style() {
    const { songs } = useContext(Context);
    const { styleName } = useParams();
    const styleSong = songs.filter(song => song.style === styleName);
    console.log(styleName, styleSong);
    return (
        <div>
            <h1>{styleName}</h1>
            <div className="card-container">
                {styleSong.map(song =>
                    <div key={song.id} className="card">
                        <div>
                            <h3>{song.title}</h3>
                            <span>{song.artist}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Style;