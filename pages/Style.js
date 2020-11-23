import React, { useContext } from "react";
import { Context } from "./../Context";
import { useParams, Link } from "react-router-dom";
import { ImHeadphones } from "react-icons/all";

function Style() {
  const { songs } = useContext(Context);
  const { styleName } = useParams();
  const styleSong = songs.filter((song) => song.style === styleName);
  return (
    <div>
      <h1>{styleName}</h1>
      <div className="card-container">
        {styleSong.length === 0
          ? "No song found!😢😢😢"
          : styleSong.map((song) => (
              <div key={song.id} className="card">
                <div>
                  <Link to={`/song/${song.id}`}>
                    <h3>
                      <ImHeadphones /> {song.title}
                    </h3>
                    <span>{song.artist}</span>
                  </Link>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Style;
