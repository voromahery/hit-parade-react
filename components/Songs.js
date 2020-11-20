import React, {useState} from 'react'

function Songs({song, songId}) {
    const [score, setScore] = useState(0);
    function addScore() {
        // const songId = e.target.id;
        // const songAddScore = songs.find(song => song.id === songId);
        setScore(prevScore => prevScore + 1);
    }
    return (
        <div>
            <div className="card" id={songId}>
                <span></span>
                <div>
                    <h3>{song.title}</h3>
                    <span>{song.artist}</span>
                </div>
                <span>{score}
                    <button onClick={() => addScore(song.id)}>Add</button>
                </span>
                <span>0
                        <button>remove</button>
                </span>
                <span>Cart</span>
                <p>{song.lyric}</p>
            </div>
        </div>
    )
}

export default Songs;