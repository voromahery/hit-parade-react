import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';
import { Context } from '../Context.js';

function Music() {
    const {songs} = useContext(Context)
    const {id} = useParams();
    const musics = songs.find(music => music.id === Number(id));
    return (
        <div>
            <h1>{id}</h1>
        </div>
    )
}

export default Music;