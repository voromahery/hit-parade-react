import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";
import data from "./../songData";
import { ImHeadphones } from "react-icons/all";

function SongStyle() {
  const { styles } = useContext(Context);
  return (
    <div>
      <ul className="style-list">
        {styles.map((song) => (
          <li key={song}>
            <Link to={`/style/${song}`}>
              <div>
                <ImHeadphones /> {song}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default SongStyle;
