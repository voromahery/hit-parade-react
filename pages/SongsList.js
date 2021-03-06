import React, { useContext, useState } from "react";
import { Context } from "../Context.js";
import Songs from "./../components/Songs";

function SongsList() {
  const { songs, setSongs } = useContext(Context);
  const sortByScore = songs.sort(
    (songA, songB) =>
      songB.scoreUp - songB.scoreDown - (songA.scoreUp - songA.scoreDown)
  );
  const [upScore, setUpScore] = useState();
  const [downScore, setDownScore] = useState();

  function addScore(e) {
    const songId = Number(e.target.id);
    const findSong = songs.find((song) => song.id === songId);
    if (findSong) {
      setUpScore(findSong.scoreUp++);
    }
  }

  function removeScore(e) {
    const songId = Number(e.target.id);
    const findSong = songs.find((song) => song.id === songId);
    if (findSong) {
      setDownScore(findSong.scoreDown++);
    }
  }

  return (
    <div className="card-container">
      {sortByScore.map((song) => (
        <Songs
          key={song.id}
          song={song}
          addScore={addScore}
          removeScore={removeScore}
        />
      ))}
    </div>
  );
}

export default SongsList;
