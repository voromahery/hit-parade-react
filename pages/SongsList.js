import React, { useContext, useState } from 'react'
import { Context } from '../Context.js';
import Songs from './../components/Songs';

function SongsList() {
    const { songs } = useContext(Context);
    const [upScore, setUpScore] = useState(0);
    const [downScore, setDownScore] = useState(0);

    function addScore(e) {
        const songId = Number(e.target.id);
        const findSong = songs.find(song => song.id === songId);
        setUpScore(findSong.scoreUp++)
    }

    function removeScore(e) {
        const songId = Number(e.target.id);
        const findSong = songs.find(song => song.id === songId);
        setDownScore(findSong.scoreDown++)
    }

    const sortByScore = songs.sort((a, b) => (b.scoreUp - b.scoreDown) - (a.scoreUp - a.scoreDown));

    return (
        <div className="card-container">
            {sortByScore.map((song) => (
                <Songs
                    key={song.id}
                    song={song}
                    addScore={addScore}
                    removeScore={removeScore}
                />
            )
            )}
        </div>
    )
}
export default SongsList;