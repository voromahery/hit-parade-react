import React, { useContext, useState } from "react";
import { Context } from "../Context.js";

function AddSong() {
  const { songs, setSongs, styles } = useContext(Context);
  const [title, setTitle] = useState();
  const [artist, setArtist] = useState();
  const [style, setStyle] = useState([]);
  const [lyric, setLyric] = useState();
  const [price, setPrice] = useState();

  function addNewSong(e) {
    e.preventDefault();
    const newSongs = {
      title,
      artist,
      price:Number(price),
      style,
      lyric,
      id: Date.now(),
      scoreUp: 0,
      scoreDown: 0,
      favorite: false,
    };

    // Reset the form
    setTitle("");
    setArtist("");
    setPrice("");
    setLyric("");
    setStyle("");

    // Update the songs(main state)
    setSongs([...songs, newSongs]);
  }

  return (
    <div>
      <h1>🌚 Add a new song</h1>
      <form onSubmit={addNewSong}>
        <input
          type="text"
          className="title"
          placeholder="Title"
        //   value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
        <input
          type="text"
          className="artist"
          placeholder="Artist"
        //   value={artist}
          onChange={(e) => setArtist(e.currentTarget.value)}
        />
        <input
          type="number"
          className="price-input"
          placeholder="Price"
        //   value={price}
          onChange={(e) => setPrice(e.currentTarget.value)}
        />
        <select
          className="style"
          placeholder="Style"
          onChange={(e) => setStyle(e.currentTarget.value)}
        >
          {/* <option value="">Style</option> */}
          {styles.map((style, index) => (
            <option value={style} key={index}>
              {style}
            </option>
          ))}
        </select>
        <textarea
          placeholder="Lyric"
        //   value={lyric}
          onChange={(e) => setLyric(e.currentTarget.value)}
        ></textarea>
        <button className="add-button">Add</button>
      </form>
    </div>
  );
}

export default AddSong;
