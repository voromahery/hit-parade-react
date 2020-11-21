import React, { useContext } from 'react';
import { Context } from '../Context.js';

function AddSong() {
    const { songs, setSongs } = useContext(Context);

    function addNewSong(e) {
        e.preventDefault();
        const form = e.currentTarget;
        const newSongs =
        {
            title: form.title.value,
            artist: form.artist.value,
            price: Number(form.price.value),
            style: form.style.value,
            lyric: form.lyric.value,
            id: Date.now(),
            scoreUp: 0,
            scoreDown: 0,
            favorite: false,
        }

        setSongs([...songs, newSongs]);
    }

    return (
        <div>
            <h1>🌚 Add a new song</h1>
            <form onSubmit={addNewSong}>
                <input type="text" className="title" name="title" placeholder="Title" />
                <input type="text" className="artist" name="artist" placeholder="Artist" />
                <input type="number" className="price" name="price" placeholder="Price" />
                <select className="style" name="style">
                    <option value="">Style</option>
                    <option value={`R&B`}>{`R&B`}</option>
                    <option value="Rock">Rock</option>
                    <option value="Rap">Rap</option>
                    <option value="Slow">Slow</option>
                    <option value="Afrotrap">Afrotrap</option>
                    <option value="Kawitry">Kawitry</option>
                </select>
                <textarea placeholder="Lyric" name="lyric"></textarea>
                <button className="add-button">Add</button>
            </form>
        </div>
    )
}

export default AddSong;