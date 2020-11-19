import React, { useState } from 'react'

function AddSong() {
    const [songs, setSongs] = useState([]);

    function addNewSong(e) {
        e.preventDefault();
        setSongs({
            title: "D",
            artist: "A",
            price: "6",
            style: "R",
            lyric: "fghjk",
        })
    }
    console.log(songs);

    return (
        <div>
            <h1>🌚 Add a new song</h1>
            <form onSubmit={addNewSong}>
                <input type="text" className="title" name="title" placeholder="Title" />
                <input type="text" className="artist" name="artist" placeholder="Artist" />
                <input type="text" className="price" name="price" placeholder="Price" />
                <select className="style" name="style">
                    <option>Style</option>
                    <option value="soul">Soul</option>
                    <option value="rock">Rock</option>
                    <option value="rap">Rap</option>
                    <option value="slow">Slow</option>
                    <option value="afrotrap">Afrotrap</option>
                    <option value="kawitry">Kawitry</option>
                </select>
                <textarea placeholder="Lyric" name="lyric"></textarea>
                <button className="add-button">Add</button>
            </form>
        </div>
    )
}

export default AddSong;