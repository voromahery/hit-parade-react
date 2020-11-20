import React, { useState, useContext } from 'react';
import { Context } from '../Context.js';

function AddSong() {
    const { songs, setSongs } = useContext(Context);

    function addNewSong(e) {
        e.preventDefault();
        const form = e.currentTarget;
    console.log(form);
        setSongs({
            title: form.title.value,
            artist: form.artist.value,
            price: form.price.value,
            style: form.style.value,
            lyric: form.lyric.value,
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