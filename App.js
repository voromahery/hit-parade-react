import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import SongStyle from './pages/SongStyle';
import AddSong from './pages/AddSong';
import SongsList from './pages/SongsList';
import CartSong from './pages/CartSong';
import Music from './pages/Music';
import Lyric from './pages/Lyric';
import Style from './pages/Style';

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/">
					<SongsList />
				</Route>
				<Route path="/add">
					<AddSong />
				</Route>
				<Route path="/cart">
					<CartSong />
				</Route>
				<Route path="/style/soul">
					<Music />
				</Route>
				<Route path="/lyric/:id">
					<Lyric />
				</Route>
				<Route exact path="/style">
					<SongStyle />
				</Route>
				<Route exact path="/style/:styleName">
					<Style />
				</Route>
			</Switch>
		</div>
	)
}

export default App;