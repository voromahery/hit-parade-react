import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import SongStyle from './pages/SongStyle';
import AddSong from './pages/AddSong';
import SongsList from './pages/SongsList';
import CartSong from './pages/CartSong';
import Lyric from './pages/Lyric';
import Style from './pages/Style';
import SpecSong from './pages/SpecSong';

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/">
					<SongsList />
				</Route>
				<Route exact path="/add">
					<AddSong />
				</Route>
				<Route exact path="/cart">
					<CartSong />
				</Route>
				<Route exact path="/lyric/:songLyric">
					<Lyric />
				</Route>
				<Route exact path="/style">
					<SongStyle />
				</Route>
				<Route exact path="/style/:styleName">
					<Style />
				</Route>
				<Route exact path="/song/:songId">
					<SpecSong />
				</Route>
			</Switch>
		</div>
	)
}

export default App;